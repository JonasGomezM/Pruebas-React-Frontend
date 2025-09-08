import { View, Text, Document, Page } from "@react-pdf/renderer";
import { styles } from "./stylePDfLiquidaciones";
import { conceptos } from "./conceptos";
import { viajes_asociados } from "./viajes_asociados";
import { resumen } from "./resumen";

export const PdfLiquidacion = () => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* encabezado */}
        <View style={styles.wrapper}>
          <View style={styles.headerBox}>
            {/* LOGO */}
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>LOGO</Text>
            </View>

            {/* TÍTULO */}
            <View style={styles.titleBox}>
              <Text style={styles.title}>ADMINISTRACIÓN DE LIQUIDACIÓN</Text>
            </View>

            {/* INFORMACIÓN */}
            <View style={styles.infoBox}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Nombre: </Text>
                <Text style={styles.value}>Raymundo - Garabito - Garabito</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>División de negocio: </Text>
                <Text style={styles.value}>Caja Seca</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Folio: </Text>
                <Text style={styles.value}>7</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.value}>27/06/2025</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Estado: </Text>
                <Text style={styles.estado}>CANCELADO</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Conceptos de la liquidación */}
        <View style={styles.conceptosWrapper}>
          {/* Título */}
          <View style={styles.conceptosTitleBox}>
            <Text style={styles.conceptosTitle}>Conceptos de liquidación</Text>
          </View>

          {/* Encabezado */}
          <View style={styles.conceptosRowHeader}>
            <Text style={styles.conceptosCellHeader}>Item</Text>
            <Text style={styles.conceptosCellHeader}>Concepto</Text>
            <Text style={styles.conceptosCellHeader}>Observaciones</Text>
            <Text style={styles.conceptosCellHeader}>Viaje</Text>
            <Text style={styles.conceptosCellHeader}>Cantidad</Text>
            <Text style={styles.conceptosCellHeader}>Subtotal</Text>
            <Text style={styles.conceptosCellHeader}>Iva</Text>
            <Text style={styles.conceptosCellHeader}>Retención</Text>
            <Text style={styles.conceptosCellHeader}>Total</Text>
            <Text style={styles.conceptosCellHeader}>Acciones</Text>
          </View>

          {/* Filas */}
          {conceptos.map((c, i) => (
            <View
              key={i}
              style={[
                styles.conceptosRow,
                i % 2 === 0 ? styles.conceptosRowEven : styles.conceptosRowOdd,
              ]}
            >
              <Text style={styles.conceptosCell}>{c.item}</Text>
              <Text style={styles.conceptosCell}>{c.concepto}</Text>
              <Text style={styles.conceptosCell}>{c.observaciones}</Text>
              <Text style={styles.conceptosCell}>{c.viaje}</Text>
              <Text style={styles.conceptosCell}>{c.cantidad}</Text>
              <Text style={styles.conceptosCell}>{c.subtotal}</Text>
              <Text style={styles.conceptosCell}>{c.iva}</Text>
              <Text style={styles.conceptosCell}>{c.retencion}</Text>
              <Text style={styles.conceptosCell}>{c.total}</Text>
              <Text style={styles.conceptosCell}>{c.acciones}</Text>
            </View>
          ))}
        </View>
        {/* Viajes Asociados*/}
        <View style={styles.viajesWrapper}>
          {/* Título general */}
          <View style={styles.viajesTitleBox}>
            <Text style={styles.viajesTitle}>Viajes asociados</Text>
          </View>

          {viajes_asociados.map((v, i) => (
            <View key={v.id} style={styles.viajeItem}>
              {/* Cabecera del item */}
              <View style={styles.viajeHeader}>
                <Text style={styles.viajeHeaderText}>ITEM {v.id}</Text>
              </View>

              {/* Fila 1 */}
              <View style={styles.viajeRow}>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Viaje:</Text> {v.viaje}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Unidad:</Text> {v.unidad}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Remolque:</Text> {v.remolque}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Dolly:</Text> {v.dolly}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Remolque 2:</Text> {v.remolque2}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Fecha de inicio:</Text>{" "}
                  {v.fechaInicio}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Fecha de final:</Text>{" "}
                  {v.fechaFinal}
                </Text>
              </View>

              {/* Fila 2 */}
              <View
                style={[
                  styles.viajeRow,
                  i % 2 === 0 ? styles.viajeRowEven : styles.viajeRowOdd,
                ]}
              >
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Km. inicial:</Text> {v.kmInicial}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Km. final:</Text> {v.kmFinal}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Km. recorrido:</Text>{" "}
                  {v.kmRecorrido}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Cargado/Vacío:</Text> {v.carga}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Litros de combustible:</Text>{" "}
                  {v.litros}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Sueldo operador:</Text> {v.sueldo}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Armado:</Text> {v.armado}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Fecha de registro:</Text>{" "}
                  {v.fechaRegistro}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Usuario registro:</Text> {v.usuario}
                </Text>
                <Text style={styles.viajeCell}>
                  <Text style={styles.bold}>Acciones:</Text> {v.acciones}
                </Text>
              </View>
            </View>
          ))}
        </View>
        {/*Resumen*/}
        <View style={styles.resumenWrapper}>
          {/* Título */}
          <View style={styles.resumenTitleBox}>
            <Text style={styles.resumenTitle}>
              Resumen financiero de liquidación
            </Text>
          </View>

          {/* Encabezado */}
          <View style={styles.resumenRowHeader}>
            <Text style={styles.resumenCellHeader}>Gastos de Viaje</Text>
            <Text style={styles.resumenCellHeader}>Deducción</Text>
            <Text style={styles.resumenCellHeader}>Percepción</Text>
            <Text style={styles.resumenCellHeader}>Obligación</Text>
            <Text style={styles.resumenCellHeader}>Total a Pagar</Text>
          </View>

          {/* Fila de datos */}
          {resumen.map((r, i) => (
            <View
              key={i}
              style={[
                styles.resumenRow,
                i % 2 === 0 ? styles.resumenRowEven : styles.resumenRowOdd,
              ]}
            >
              <Text style={styles.resumenCell}>{r.gasto}</Text>
              <Text style={styles.resumenCell}>{r.deduccion}</Text>
              <Text style={styles.resumenCell}>{r.percepcion}</Text>
              <Text style={styles.resumenCell}>{r.obligacion}</Text>
              <Text style={styles.resumenCell}>{r.total}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
