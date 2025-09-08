import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// === TIPOS ===
type AnnualSale = { anio: number; monto: number };
type MonthlySale = { anio: number; mesNumero: number; mesNombre: string; monto: number };

// === DATOS ===
const mockData = {
   data: {
    ventasAnuales: [
      { anio: 2021, monto: 25480 },
      { anio: 2022, monto: 3883643 },
      { anio: 2023, monto: 926608 },
      { anio: 2024, monto: 740509 },
      { anio: 2025, monto: 78880180 },
    ],
    ventasMensuales: [
      { anio: 2021, mesNumero: 1, mesNombre: "Ene", monto: 2000 },
      { anio: 2021, mesNumero: 2, mesNombre: "Feb", monto: 3000 },
      { anio: 2022, mesNumero: 1, mesNombre: "Ene", monto: 31158 },
      { anio: 2022, mesNumero: 2, mesNombre: "Feb", monto: 82186 },
      { anio: 2022, mesNumero: 3, mesNombre: "Mar", monto: 163548 },
      { anio: 2022, mesNumero: 4, mesNombre: "Abr", monto: 244640 },
      { anio: 2022, mesNumero: 5, mesNombre: "May", monto: 21822 },
      { anio: 2022, mesNumero: 6, mesNombre: "Jun", monto: 52995 },
      { anio: 2022, mesNumero: 7, mesNombre: "Jul", monto: 111568 },
      { anio: 2022, mesNumero: 8, mesNombre: "Ago", monto: 86315 },
      { anio: 2022, mesNumero: 9, mesNombre: "Sep", monto: 527933 },
      { anio: 2022, mesNumero: 10, mesNombre: "Oct", monto: 907414 },
      { anio: 2022, mesNumero: 11, mesNombre: "Nov", monto: 1430664 },
      { anio: 2022, mesNumero: 12, mesNombre: "Dic", monto: 223400 },
      { anio: 2025, mesNumero: 1, mesNombre: "Ene", monto: 6000000 },
      { anio: 2025, mesNumero: 2, mesNombre: "Feb", monto: 6200000 },
      { anio: 2025, mesNumero: 3, mesNombre: "Mar", monto: 6500000 },
      { anio: 2025, mesNumero: 4, mesNombre: "Abr", monto: 6300000 },
      { anio: 2025, mesNumero: 5, mesNombre: "May", monto: 6700000 },
      { anio: 2025, mesNumero: 6, mesNombre: "Jun", monto: 6900000 },
      { anio: 2025, mesNumero: 7, mesNombre: "Jul", monto: 7000000 },
      { anio: 2025, mesNumero: 8, mesNombre: "Ago", monto: 7200000 },
    ],
  },
};

// === SIMULACIÓN DE API ===
const fetchMonthlySalesByYear = async (year: number): Promise<MonthlySale[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockData.data.ventasMensuales.filter((item) => item.anio === year);
};

// === COMPONENTE ===
const Dashboard: React.FC = () => {
  const [annualData] = useState<AnnualSale[]>(mockData.data.ventasAnuales);
  const [monthlyData, setMonthlyData] = useState<MonthlySale[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [loading, setLoading] = useState<boolean>(false);

  // Cargar datos iniciales
  useEffect(() => {
    const loadDefault = async () => {
      setLoading(true);
      try {
        const data = await fetchMonthlySalesByYear(2025);
        setMonthlyData(data);
      } catch (error) {
        console.error("Error cargando datos iniciales:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDefault();
  }, []);

  // Manejador de clic en una barra específica
const handleBarClick = async (data: any) => {
  const year = data.payload.anio;
  const monto = data.payload.monto;
  setSelectedYear(year);
  setLoading(true);

  try {
    const result = await fetchMonthlySalesByYear(year);
    setMonthlyData(result);
  } catch (error) {
    console.error("Error al cargar datos mensuales:", error);
    alert("No se pudieron cargar los datos.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Dashboard de Ventas
      </h1>

      <div className="text-center mb-6">
        <p className="text-lg">
          Año seleccionado: <strong className="text-blue-600">{selectedYear}</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* GRÁFICO 1: Ventas Anuales */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Ventas por Año</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={annualData}
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="anio" tick={{ fill: "#4b5563" }} />
              <YAxis tick={{ fill: "#4b5563" }} />
              <Tooltip formatter={(value: number) => new Intl.NumberFormat("es-ES").format(value)} />
              <Bar
                dataKey="monto"
                fill="#001f3f"
                radius={[6, 6, 0, 0]}
                // ✅ onClick aquí, directamente en cada barra
                onClick={(data) => handleBarClick(data)}
                // ✅ Cursor pointer para feedback visual
                style={{ cursor: "pointer" }}
              >
                <LabelList
                  dataKey="monto"
                  position="top"
                  style={{ fill: "#001f3f", fontSize: 11, fontWeight: "bold" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* GRÁFICO 2: Ventas Mensuales */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Ventas Mensuales ({selectedYear})
          </h2>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p>Cargando datos...</p>
            </div>
          ) : monthlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="mesNombre" tick={{ fill: "#4b5563" }} />
                <YAxis tick={{ fill: "#4b5563" }} />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat("es-ES").format(value)} />
                <Bar
                  dataKey="monto"
                  fill="#28a745"
                  radius={[6, 6, 0, 0]}
                >
                  <LabelList
                    dataKey="monto"
                    position="top"
                    style={{ fill: "#28a745", fontSize: 11 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center h-64 text-gray-500">
              <p>No hay datos para {selectedYear}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;