import React from "react";
import "./MyCalendar.scss";

type EventType = "danger" | "info" | "warning" | "success";

interface ScheduleEvent {
  id: number;
  title: string;
  start: string; // formato YYYY-MM-DD HH:mm
  end: string;   // formato YYYY-MM-DD HH:mm
  type: EventType;
  unitId: number;
}

interface Unit {
  id: number;
  name: string;
}

const units: Unit[] = [
  { id: 1, name: "1032-68AM4E" },
  { id: 2, name: "1032-68AM4E" },
  { id: 3, name: "1032-68AM4E" },
  { id: 4, name: "1032-68AM4E" },
];

const events: ScheduleEvent[] = [
  {
    id: 1,
    title: "Siniestrado",
    start: "2025-08-05 06:00",
    end: "2025-08-07 14:00",
    type: "danger",
    unitId: 1,
  },
  {
    id: 9,
    title: "Mantenimiento Preventivo",
    start: "2025-08-07 17:00",
    end: "2025-08-09 14:00",
    type: "success",
    unitId: 1,
  },
  {
    id: 2,
    title: "Viaje Cargado",
    start: "2025-08-02 22:00",
    end: "2025-09-07 23:00",
    type: "info",
    unitId: 2,
  },
  {
    id: 3,
    title: "Mantenimiento Preventivo",
    start: "2025-08-04 02:00",
    end: "2025-09-07 18:30",
    type: "success",
    unitId: 3,
  },
  {
    id: 4,
    title: "Mantenimiento Preventivo",
    start: "2025-08-02 12:00",
    end: "2025-09-09 07:30",
    type: "warning",
    unitId: 4,
  },
];

const parseDateTime = (dateTimeStr: string): Date => {
  const [datePart, timePart] = dateTimeStr.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
};

const isSameDay = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

const getWeekRangeCentered = (current: Date): Date[] => {
  const days: Date[] = [];
  for (let i = -3; i <= 3; i++) {
    const date = new Date(current);
    date.setDate(current.getDate() + i);
    days.push(date);
  }
  return days;
};

export const MyCalendar: React.FC = () => {
  const today = new Date();
  const days = getWeekRangeCentered(today);

  const getEventStyle = (type: EventType) => {
    switch (type) {
      case "danger": return "schedule__event--danger";
      case "info": return "schedule__event--info";
      case "warning": return "schedule__event--warning";
      case "success": return "schedule__event--success";
      default: return "";
    }
  };

  return (
    <div className="schedule">
      {/* Header */}
      <div className="schedule__header">
        <div className="schedule__unit-header">UNIDAD</div>
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className={`schedule__day-header ${
              isSameDay(day, today) ? "schedule__day-header--today" : ""
            }`}
          >
            <div className="schedule__date">
              {`${day
                .toLocaleDateString("es-ES", { weekday: "short" })
                .toUpperCase()}, ${day.getDate().toString().padStart(2, "0")}`}
            </div>
            <div className="schedule__day-month">
              {day.toLocaleDateString("es-ES", { month: "long" })},{" "}
              {String(day.getFullYear()).slice(-2)}
            </div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="schedule__body">
        {units.map((unit) => {
          const unitEvents = events.filter((ev) => ev.unitId === unit.id);

          return (
            <div key={unit.id} className="schedule__row">
              <div className="schedule__unit-cell">{unit.name}</div>
              <div className="schedule__days-grid">
                {/* Celdas vacías */}
                {days.map((_, idx) => (
                  <div key={idx} className="schedule__cell"></div>
                ))}

                {/* Eventos */}
                {unitEvents.map((ev) => {
                  const start = parseDateTime(ev.start);
                  const end = parseDateTime(ev.end);

                  let startIndex = days.findIndex((d) => isSameDay(d, start));
                  let endIndex = days.findIndex((d) => isSameDay(d, end));

                  // Eventos que empiezan antes del rango visible → pegamos al inicio
                  let startHourFraction =
                    (start.getHours() + start.getMinutes() / 60) / 24;
                  if (start < days[0] && !isSameDay(start, days[0])) {
                    startIndex = 0;
                    startHourFraction = 0;
                  }

                  // Eventos que terminan después del rango visible → pegamos al final
                  let endHourFraction =
                    (end.getHours() + end.getMinutes() / 60) / 24;
                  if (end > days[days.length - 1] && !isSameDay(end, days[days.length - 1])) {
                    endIndex = days.length - 1;
                    endHourFraction = 1;
                  }

                  // Mostrar si termina en el primer día visible
                  if (end < days[0] && !isSameDay(end, days[0])) return null;

                  if (startIndex === -1 && start < days[0]) startIndex = 0;
                  if (endIndex === -1 && isSameDay(end, days[0])) endIndex = 0;
                  if (endIndex === -1 && end > days[days.length - 1])
                    endIndex = days.length - 1;

                  if (startIndex === -1 || endIndex === -1) return null;

                  const cellWidth = 100 / days.length;
                  const left = (startIndex + startHourFraction) * cellWidth;
                  const width =
                    (endIndex + endHourFraction - (startIndex + startHourFraction)) *
                    cellWidth;

                  return (
                    <div
                      key={ev.id}
                      className={`schedule__event ${getEventStyle(ev.type)}`}
                      style={{
                        left: `${left}%`,
                        width: `${width}%`,
                      }}
                    >
                      {ev.title}
                      <span className="schedule__event-icon">⏱</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
