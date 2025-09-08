import React, { useEffect, useRef } from "react";
import { DataSet } from "vis-data/peer";
import {
  Timeline,
  TimelineOptions,
  TimelineItem,
  TimelineGroup,
} from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import "./MyCalendar.scss"; // Importa tus estilos SCSS personalizados

const MyCalendar: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const groups = new DataSet<TimelineGroup>(
      Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        content: "1032–68AM4E",
      }))
    );

    const items = new DataSet<TimelineItem>([
      {
        id: 1,
        group: 1,
        content: `<div>Siniestrado <i class="eye-icon">👁️</i></div>`,
        start: "2025-08-03T08:00:00",
        end: "2025-08-08T18:00:00",
        type: "range",
        className: "custom-item siniestrado",
      },
      {
        id: 2,
        group: 2,
        content: `<div>Viaje Cargado <i class="eye-icon">👁️</i></div>`,
        start: "2025-08-04T08:00:00",
        end: "2025-08-05T18:00:00",
        type: "range",
        className: "custom-item cargado",
      },
      {
        id: 3,
        group: 3,
        content: `<div>Viaje Vacio <i class="eye-icon">👁️</i></div>`,
        start: "2025-08-02T18:30:00",
        end: "2025-08-04T23:00:00",
        type: "range",
        className: "custom-item vacio",
      },
      {
        id: 4,
        group: 4,
        content: `<div>Mantenimiento Preventivo <i class="eye-icon">👁️</i></div>`,
        start: "2025-08-05T18:30:00",
        end: "2025-08-07T23:00:00",
        type: "range",
        className: "custom-item mantenimiento",
      },
    ]);

    // const today = new Date("2025-06-03");
    // const start = new Date(today);
    // start.setDate(today.getDate() - 3);
    // const end = new Date(today);
    // end.setDate(today.getDate() + 3);


    
    const today = new Date(); // esto para calculad el Día actual
    const daysBefore = 3; // esta para 3 dias antes
    const daysAfter = 3; // esta para 3 dias despues

    // Calculamos el rango de fechas (inicio y fin) basado en hoy
    const start = new Date(today);
    start.setDate(today.getDate() - daysBefore);

    const end = new Date(today);
    end.setDate(today.getDate() + daysAfter);

    console.log(start, end);


    const options: TimelineOptions = {
      zoomMin: 1000 * 60 * 60 * 24 * 7,
      zoomMax: 1000 * 60 * 60 * 24 * 7,
      zoomKey: "ctrlKey",
      moveable: false,
      selectable: true,
      stack: true,
      orientation: "top",
      start
      end: end.toDateString(),
      editable: false,
      locale: "es",
      showCurrentTime: false,     // ❌ Oculta la línea roja
      showMajorLabels: true,
      showMinorLabels: true,
      tooltip: { followMouse: true },
    };

    const timeline = new Timeline(
      timelineRef.current,
      items as any,
      groups,
      options
    );

    // 🌟 Pintar fondo para el día actual

    const todayStart = new Date();

    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayStart.getDate() + 1); 
    
    console.log(todayStart, todayEnd);

    const backgroundItems = new DataSet([
      {
        id: "today-background",
        content: "",
        start: todayStart.toDateString(),
        end: todayEnd.toDateString(),
        type: "background",
        className: "today-highlight",
      },
    ]);
    timeline.setItems([...items.get(), ...backgroundItems.get()]);

    
    return () => timeline.destroy();
  }, []);

  return (
    <div className="calendar-container">
      <h2>📅 Programación de Unidades</h2>
      <div ref={timelineRef} className="my-timeline" />
    </div>
  );
};

export default MyCalendar;
