import React, { use, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const mockData = {
  data: {
    ventasAnuales: [
      { anio: 2021, monto: 975480 },
      { anio: 2022, monto: 883643 },
      { anio: 2023, monto: 926608 },
      { anio: 2024, monto: 740509 },
      { anio: 2025, monto: 880180 },
    ],
    ventasMensuales: [
      { anio: 2022, mesNombre: "Ene", monto: 31158 },
      { anio: 2022, mesNombre: "Feb", monto: 82186 },
      { anio: 2022, mesNombre: "Mar", monto: 163548 },
      { anio: 2022, mesNombre: "Abr", monto: 244640 },
      { anio: 2022, mesNombre: "May", monto: 21822 },
      { anio: 2022, mesNombre: "Jun", monto: 52995 },
      { anio: 2022, mesNombre: "Jul", monto: 111568 },
      { anio: 2022, mesNombre: "Ago", monto: 86315 },
      { anio: 2022, mesNombre: "Sep", monto: 527933 },
      { anio: 2022, mesNombre: "Oct", monto: 907414 },
      { anio: 2022, mesNombre: "Nov", monto: 1430664 },
      { anio: 2022, mesNombre: "Dic", monto: 223400 },
    ],
  },
};

// Arreglo fijo de meses
const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

interface dataAnio {
  anio: number;
  monto: number;
}

export const Dashboard = () => {
  const [datosAnuales] = useState<dataAnio[]>(mockData.data.ventasAnuales);
  const [añoSeleccionado, setAñoSeleccionado] = useState<number | null>(null);
  const [datosMensuales, setDatosMensuales] = useState<any[]>([]);

  const handleBarClick = ( data:any) => {
    const anio = data.anio;
    setAñoSeleccionado(anio);

    const datosFiltrados = mockData.data.ventasMensuales.filter(
      (mes) => mes.anio === anio
    );

    setDatosMensuales(datosFiltrados);
  };

  return (
    <>
      {/* Gráfico anual */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={datosAnuales} margin={{ top: 30, right: 40, left: 50, bottom: 10 }}>
          <XAxis dataKey="anio" tick={{ fill: "#63614bff" }} />
          <Bar
            dataKey="monto"
            fill="#001f3f"
            radius={[6, 6, 0, 0]}
            onClick={handleBarClick}
            style={{ cursor: "pointer", outline: "none" }}
          >
            <LabelList
              dataKey="monto"
              position="top"
              style={{ fill: "#001f3f", fontSize: 11, fontWeight: "bold" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Gráfico mensual condicional */}
      <div style={{ marginTop: 30 }}>
        <h3>Ventas Mensuales - {añoSeleccionado}</h3>

        {datosMensuales.length > 0 ? (
          // Con datos → muestra barras
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={datosMensuales} margin={{ top: 30, right: 40, left: 50, bottom: 10 }}>
              <XAxis dataKey="mesNombre" tick={{ fill: "#4b5563" }} />
              <Tooltip />
              <Bar dataKey="monto" fill="#0074D9" radius={[6, 6, 0, 0]}>
                <LabelList dataKey="monto" position="top" style={{ fontSize: 10 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          // cuando se vaya hacer la validacion real reqcuerda
          // que este no puede ir porque no hay datos - el back si no
          // tiene nada traera 0 y no es necesario este metodo
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={meses} margin={{ top: 30, right: 40, left: 50, bottom: 10 }}>
              <XAxis 
                dataKey={(mes) => mes} 
                tick={{ fill: "#4b5563" }} 
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
};

