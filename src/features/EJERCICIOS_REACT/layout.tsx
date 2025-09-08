import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from "recharts";

// Arreglo fijo de meses
const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

interface dataAnio {
  anio: number;
  monto: number;
}

interface dataMensual {
  anio: number;
  mesNombre: string;
  monto: number;
}

const mockData = {
  data: {
    ventasAnuales: [
      { anio: 2021, monto: 90000 },
      { anio: 2022, monto: 40000 },
      { anio: 2023, monto: 100000 },
      { anio: 2024, monto: 80000 },
      { anio: 2025, monto: 150000 },
    ],
    ventasMensuales: [
      { anio: 2022, mesNombre: "Ene", monto: 150000 },
      { anio: 2022, mesNombre: "Feb", monto: 75000 },
      { anio: 2022, mesNombre: "Mar", monto: 50000 },
      { anio: 2022, mesNombre: "Abr", monto: 60000 },
      { anio: 2022, mesNombre: "May", monto: 17000 },
      { anio: 2022, mesNombre: "Jun", monto: 77000 },
      { anio: 2022, mesNombre: "Jul", monto: 57000 },
      { anio: 2022, mesNombre: "Ago", monto: 80000 },
      { anio: 2022, mesNombre: "Sep", monto: 40000 },
      { anio: 2022, mesNombre: "Oct", monto: 76000 },
      { anio: 2022, mesNombre: "Nov", monto: 58000 },
      { anio: 2022, mesNombre: "Dic", monto: 140000 },
    ],
  },
};

const formatMonto = (value: any) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "K";
  } else {
    return value.toString();
  }
};




export const Dashboard = () => {
  const [datosAnuales] = useState<dataAnio[]>(mockData.data.ventasAnuales);
  const [añoSeleccionado, setAñoSeleccionado] = useState<number | null>(null);
  const [datosMensuales, setDatosMensuales] = useState<dataMensual[]>([]);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const currentMes = meses[currentMonthIndex];

  useEffect(() => {
    const hasCurrentYear = datosAnuales.some((d) => d.anio === currentYear);
    if (hasCurrentYear) {
      setAñoSeleccionado(currentYear);
      const datosFiltrados = meses.map((mes) => ({
        anio: currentYear,
        mesNombre: mes,
        monto:
          mockData.data.ventasMensuales.find((m) => m.anio === currentYear && m.mesNombre === mes)?.monto || 0,
      }));
      setDatosMensuales(datosFiltrados);
    }
  }, [datosAnuales]);

  const handleBarClick = (data: any) => {
    const anio = data.anio;
    setAñoSeleccionado(anio);

    const datosFiltrados = meses.map((mes) => ({
      anio,
      mesNombre: mes,
      monto: mockData.data.ventasMensuales.find((m) => m.anio === anio && m.mesNombre === mes)?.monto || 0,
    }));

    setDatosMensuales(datosFiltrados);
  };

  return (
    <>
      {/* Gráfico anual */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={datosAnuales} margin={{ top: 30, right: 40, left: 50, bottom: 10 }}>
          <XAxis dataKey="anio" tick={{ fill: "#635f4bff" }} />
          {/* <Tooltip formatter={formatMonto} /> */}
          <Bar
            dataKey="monto"
            radius={[6, 6, 0, 0]}
            onClick={handleBarClick}
            style={{ cursor: "pointer", outline: "none"}}
          >
            <LabelList
              dataKey="monto"
              formatter={formatMonto}
              position="top"
              style={{ fill: "#001f3f", fontSize: 15, fontWeight: "bold" }}
            />
            {datosAnuales.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.anio === añoSeleccionado ? "#ffda20" : "#001f3f"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Gráfico mensual condicional */}
      {añoSeleccionado && (
        <div style={{ marginTop: 30 }}>
          <h3 style={{ marginTop: 30, marginLeft: 50 }}>Ventas Mensuales - {añoSeleccionado}</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={datosMensuales} margin={{ top: 30, right: 40, left: 50, bottom: 10 }}>
              <XAxis dataKey="mesNombre" tick={{ fill: "#635d4bff" }} />
              {/* <Tooltip formatter={formatMonto} /> */}
              <Bar dataKey="monto" radius={[6, 6, 0, 0]}>
                <LabelList
                  dataKey="monto"
                  formatter={formatMonto}
                  position="top"
                  style={{ fontSize: 15,  fill: "#001f3f" }}
                />
                {datosMensuales.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.mesNombre === currentMes
                        ? "#ffda20"
                        : "#001f3f"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};