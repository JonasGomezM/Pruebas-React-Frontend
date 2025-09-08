import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import logo from "../../../../../public/logo.png";
import { styles } from "./StylesPDF";

const detalleData = [
  { id: 1, nombre_concepto: "Frenos", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 2, nombre_concepto: "Luces", revision: false, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 3, nombre_concepto: "Aceite", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 4, nombre_concepto: "Filtro de aire", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 5, nombre_concepto: "Neumáticos", revision: false, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 6, nombre_concepto: "Suspensión", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 7, nombre_concepto: "Batería", revision: false, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 8, nombre_concepto: "Dirección", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 9, nombre_concepto: "Espejos", revision: false, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 10, nombre_concepto: "Llantas", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 11, nombre_concepto: "Escape", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 12, nombre_concepto: "Radiador", revision: false, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 13, nombre_concepto: "Transmisión", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 14, nombre_concepto: "Parabrisas", revision: false, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
  { id: 15, nombre_concepto: "Motor", revision: true, fecha_registro: "09/09/2024", nombre_sucursal: "Sucursal A", nombre_usuario_registro: "Juan Pérez" },
];


export const MyDocument = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.headerTable}>
        {/* Logo */}
        <View style={styles.colLogo}>
          <Image src={logo} style={styles.logoImage} />
        </View>

        {/* Centro */}
        <View style={styles.colCenter}>
          <View style={styles.colCenterHalf}>
            <Text style={styles.centerText}>Formato</Text>
          </View>
          <View style={[styles.colCenterHalf, styles.colCenterBottom]}>
            <Text style={styles.centerText}>INSPECCIÓN 17 PUNTOS</Text>
          </View>
        </View>

        {/* Final */}
        <View style={styles.colEnd}>
          {/* Parte superior: código */}
          <View style={styles.colEndTop}>
            <Text style={styles.rightTextBold}>ATC-SG-F011</Text>
          </View>

          {/* Parte inferior: datos divididos */}
          <View style={styles.colEndBottom}>
            <View style={styles.bottomItem}>
              <Text style={styles.rightText}>Fecha Emisión: Abril 2025</Text>
            </View>
            <View style={styles.bottomItem}>
              <Text style={styles.rightText}>Fecha Revisión: Abril 2025</Text>
            </View>
            <View style={styles.bottomItemLast}>
              <Text style={styles.rightText}>
                Versión: <Text style={styles.rightTextBold}>002</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.colEndArea}>
        <View style={styles.areaRow}>
          <View style={styles.areaCellLeft}>
            <Text style={styles.colEndAreaText}>Área: Seguridad</Text>
          </View>
          <View style={styles.areaCellRight}>
            <Text style={styles.colEndAreaText}></Text>
          </View>
        </View>
      </View>

      {/* Información de movimiento */}
      <Text style={styles.sectionTitle}>
        Información de movimiento – (Entrada/Salida)
      </Text>

      <View style={styles.row}>
        <Text style={styles.cellBold}>Folio</Text>
        <Text style={styles.cellBold}>Sucursal</Text>
        <Text style={styles.cellBold}>Entrada/Salida</Text>
        <Text style={styles.cellBold}>Armado</Text>
        <Text style={styles.cellBold}>Fecha</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>1039</Text>
        <Text style={styles.cell}>Sabinas</Text>
        <Text style={styles.cell}>Entrada</Text>
        <Text style={styles.cell}>Sencillo</Text>
        <Text style={styles.cell}>02/04/2025 13:00hrs</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cellBold}>Estado de carga</Text>
        <Text style={styles.cellBold}>División de negocio</Text>
        <Text style={styles.cellBold}>Unidad</Text>
        <Text style={styles.cellBold}>Personal</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>1039</Text>
        <Text style={styles.cell}>Caja seca</Text>
        <Text style={styles.cell}>1039</Text>
        <Text style={styles.cell}>1012 Edgar Alejandro Robles Martínez</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cellBold}>Remolque 1 </Text>
        <Text style={styles.cellBold}>Fumigación remolque 1</Text>
        <Text style={styles.cellBold}>Número de sello</Text>
        <Text style={styles.cellBold}>Remolque 2 </Text>
        <Text style={styles.cellBold}>Fumigación remolque 2</Text>
        <Text style={styles.cellBold}>Número de sello</Text>
      </View>

      <View style={[styles.row, styles.rowLast]}>
        <Text style={styles.cell}>ATC11-50239F</Text>
        <Text style={styles.cell}>Sí</Text>
        <Text style={styles.cell}>50239F</Text>
        <Text style={styles.cell}>ATC11-50239F</Text>
        <Text style={styles.cell}>Sí</Text>
        <Text style={styles.cell}>ATC12203</Text>
      </View>

      <View style={styles.movimientoWrapper}>
        {/* Título */}
        <View style={styles.movimientoTitleBox}>
          <Text style={styles.movimientoTitle}>Listado movimiento</Text>
        </View>

        {/* Encabezado */}
        <View style={styles.movimientoRowHeader}>
          <Text style={styles.movimientoHeaderCell}>#</Text>
          <Text style={styles.movimientoHeaderCell}>Concepto</Text>
          <Text style={styles.movimientoHeaderCell}>Revisión</Text>
          <Text style={styles.movimientoHeaderCell}>#</Text>
          <Text style={styles.movimientoHeaderCell}>Concepto</Text>
          <Text style={styles.movimientoHeaderCell}>Revisión</Text>
        </View>

        {/* Filas de datos */}
        {(() => {
          const mitad = Math.ceil(detalleData.length / 2);

          return detalleData.slice(0, mitad).map((item, i) => {
            const par = i % 2 === 0;
            const segundaCol = detalleData[i + mitad];

            return (
              <View
                key={i}
                style={[
                  styles.movimientoRow,
                  par ? styles.movimientoRowEven : styles.movimientoRowOdd,
                ]}
              >
                {/* Primera columna */}
                <Text
                  style={[styles.movimientoCell, styles.movimientoCellNumber]}
                >
                  {i + 1}
                </Text>
                <Text style={styles.movimientoCell}>
                  {item.nombre_concepto}
                </Text>
                <Text style={styles.movimientoCell}>
                  {item.revision ? "Sí" : "No"}
                </Text>

                {/* Segunda columna, si existe */}
                {segundaCol ? (
                  <>
                    <Text
                      style={[
                        styles.movimientoCell,
                        styles.movimientoCellNumber,
                      ]}
                    >
                      {i + 1 + mitad}
                    </Text>
                    <Text style={styles.movimientoCell}>
                      {segundaCol.nombre_concepto}
                    </Text>
                    <Text style={styles.movimientoCell}>
                      {segundaCol.revision ? "Sí" : "No"}
                    </Text>
                  </>
                ) : (
                  // En caso de número impar, relleno con celdas vacías
                  <>
                    <Text style={styles.movimientoCell}></Text>
                    <Text style={styles.movimientoCell}></Text>
                    <Text style={styles.movimientoCell}></Text>
                  </>
                )}
              </View>
            );
          });
        })()}
      </View>

      <View style={styles.evidenciasWrapper}>
        {/* Título */}
        <View style={styles.evidenciasTitleBox}>
          <Text style={styles.evidenciasTitle}>Evidencias</Text>
        </View>

        {/* Contenido */}
        <View style={styles.evidenciasContent}>
          {/* Columna 1 */}
          <View style={styles.evidenciasItem}>
            <Text style={styles.evidenciasNumber}>1</Text>
            <Text style={styles.evidenciasLabel}>Defensas y llantas</Text>
            <Image src={logo} style={styles.evidenciasImage} />
          </View>

          {/* Columna 2 */}
          <View style={styles.evidenciasItem}>
            <Text style={styles.evidenciasNumber}>2</Text>
            <Text style={styles.evidenciasLabel}>
              Puertas y compartimientos de herramientas
            </Text>
            <Image src={logo} style={styles.evidenciasImage} />
          </View>
        </View>

        {/* Página */}
        <Text style={styles.evidenciasPage}>Página 1 de 2</Text>
      </View>
    </Page>
  </Document>
);
