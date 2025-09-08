import { View, Text, Document, Page, Image } from "@react-pdf/renderer";
import { styles } from "./stylePDfLiquidaciones";
import { cabecera, conceptos, viajesAsociados } from "./data";
import logo from "../../../../../public/logo.png";

export const PdfLiquidacion = () => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* ENCABEZADO */}
        <View style={styles.headerContainer}>
          {/* FILA 1: Logo + Título */}
          <View style={styles.topRow}>
            <View style={styles.logoBox}>
              <Image style={styles.logoImage} src={logo} />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.companyName}>AUTO TRANSPORTES CISNEROS</Text>
              <Text style={styles.companyRFC}>RFC: ATC0108171K9</Text>
              <Text style={styles.companyAddress}>
                Calle CARRET. FEDERAL 57 #226, Cloete Mineral/
              </Text>
              <Text style={styles.companyAddress}>
                Sabinas, Sabinas, CP: 26960, México
              </Text>
            </View>
          </View>

          {/* FILA 2: cabecera Liquidacion */}
          <View style={styles.infoBox}>
            <View style={styles.infoRow}>
              <Text>
                <Text style={styles.detailBold}>Folio: </Text>
                <Text style={styles.detailValue}>
                  {cabecera.id}
                </Text>
              </Text>
              <Text>
                <Text style={styles.detailBold}>Nombre: </Text>
                <Text style={styles.detailValue}>
                  {cabecera.nombre_personal_operador}
                </Text>
              </Text>
              <Text>
                <Text style={styles.detailBold}>División de negocio: </Text>
                <Text style={styles.detailValue}>
                  {cabecera.nombre_division_negocio}
                </Text>
              </Text>
            </View>


            <View style={styles.rightBox}>
              <Text>
                <Text style={styles.detailBold}>Fecha: </Text>
                <Text style={styles.detailValue}>
                  {cabecera.fecha_liquidacion}
                </Text>
              </Text>
              <Text>
                <Text style={styles.detailBold}>Estado: </Text>
                <Text style={styles.detailValue}>
                  {cabecera.nombre_status.toUpperCase()}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        {/* CONCEPTOS */}
        <View style={styles.conceptosWrapper}>
          <View style={styles.conceptosTitleBox}>
            <Text style={styles.conceptosTitle}>Conceptos de liquidación</Text>
          </View>
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

          {conceptos.map((c) => (
            <View key={c.id} style={styles.conceptosRow}>
              <Text style={styles.conceptosCell}>{c.id}</Text>
              <Text style={styles.conceptosCell}>{c.nombre_concepto}</Text>
              <Text style={styles.conceptosCell}>{c.observaciones || ""}</Text>
              <Text style={styles.conceptosCell}>
                {c.nombre_viaje || "N/A"}
              </Text>
              <Text style={styles.conceptosCell}>{c.cantidad}</Text>
              <Text style={styles.conceptosCell}>${c.subtotal}</Text>
              <Text style={styles.conceptosCell}>${c.iva}</Text>
              <Text style={styles.conceptosCell}>${c.retencion}</Text>
              <Text style={styles.conceptosCell}>${c.total}</Text>
              <Text style={styles.conceptosCell}></Text>
            </View>
          ))}
        </View>

        {/* VIAJES */}
        <View style={styles.viajesWrapper}>
          <View style={styles.viajesTitleBox}>
            <Text style={styles.viajesTitle}>Viajes asociados</Text>
          </View>
          {viajesAsociados.map((v) => (
            <View key={v.id} style={styles.viajeItem}>
              <View style={styles.viajeHeader}>
                <Text style={styles.viajeHeaderText}>
                  Viaje: {v.nombre_viaje}
                </Text>
              </View>
              <View style={styles.viajeGrid}>
                {/* Columna 1 */}
                <View style={styles.viajeColumn}>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Unidad:</Text> {v.nombre_unidad}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Remolque:</Text>{" "}
                    {v.nombre_remolque1}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Dolly:</Text> {v.nombre_dolly}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Remolque 2:</Text>{" "}
                    {v.nombre_remolque2}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Armado:</Text>{" "}
                    {v.nombre_configuracion_armado}
                  </Text>
                </View>

                {/* Columna 2 */}
                <View style={styles.viajeColumn}>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Usuario:</Text>{" "}
                    {v.nombre_usuario_registro}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Sueldo:</Text> {v.sueldo_operador}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Fecha de inicio:</Text>{" "}
                    {v.fecha_inicial}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Fecha final:</Text>{" "}
                    {v.fecha_final}
                  </Text>
                </View>

                {/* Columna 3 */}
                <View style={styles.viajeColumn}>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Km. inicial:</Text>{" "}
                    {v.kilometraje_inicial}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Km. final:</Text>{" "}
                    {v.kilometraje_final}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Km. recorrido:</Text>{" "}
                    {v.kilometraje_recorrido}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Carga:</Text> {v.estado_carga}
                  </Text>
                  <Text style={styles.viajeCell}>
                    <Text style={styles.bold}>Litros:</Text>{" "}
                    {v.litros_combustible}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* RESUMEN */}
        <View style={styles.resumenWrapper}>
          <View style={styles.resumenTitleBox}>
            <Text style={styles.resumenTitle}>
              Resumen financiero de liquidación
            </Text>
          </View>
          <View style={styles.resumenRowHeader}>
            <Text style={styles.resumenCellHeader}>Gastos</Text>
            <Text style={styles.resumenCellHeader}>Deducción</Text>
            <Text style={styles.resumenCellHeader}>Percepción</Text>
            <Text style={styles.resumenCellHeader}>Obligación</Text>
            <Text style={styles.resumenCellHeader}>Total</Text>
          </View>
          <View style={styles.resumenRow}>
            <Text style={styles.resumenCell}>
              ${cabecera.monto_gastos_viaje}
            </Text>
            <Text style={styles.resumenCell}>${cabecera.monto_deduccion}</Text>
            <Text style={styles.resumenCell}>${cabecera.monto_percepcion}</Text>
            <Text style={styles.resumenCell}>${cabecera.monto_obligacion}</Text>
            <Text style={styles.resumenCell}>
              ${cabecera.monto_total_pagar}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
