import {
  Document,
  Page,
  Text,
  View,
  Image
} from "@react-pdf/renderer";
import { styles } from "./StyleCargaCombustible";
import logo from "../../../../../public/logo.png";

const dataCarga = {
  id: 10,
  nombre_clf_tipo_carga: "Autoconsumo",
  nombre_tipo_combustible: "Diésel",
  fecha_carga: "2025-07-22 11:45:00",
  folio_ticket: "456XYZ",
  nombre_sucursal: "Sabinas",
  nombre_personal_operador: "1055 - Luis Martínez Rivas",
  nombre_empresa_unidad: "AUTO TRANSPORTES DEL CENTRO",
  nombre_unidad: "1022 - JKL789",
  kilometraje_actual: 75200 + " km",
  nombre_clave_unidad: "LTR - Litro",
  nombre_moneda: "Peso mexicano",
  tipo_cambio: 1.0,
  nombre_tasa_iva: "Exento",
  cantidad: 45.0,
  precio: 33.5,
  subtotal: 1507.5,
  iva: 0.0,
  total: 1507.5,
  nombre_viaje: " -  -  -  - ",
  observaciones: "Carga realizada en horario nocturno.",
};

export const CargaCombustiblePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
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
        {/* <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text>
              <Text style={styles.detailBold}>Folio: </Text>
              <Text style={styles.detailValue}>{cabecera.id}</Text>
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
        </View> */}
      </View>

      {/* Información de la Carga y Ticket */}
      <View style={[styles.section, styles.row]}>
        <View style={styles.card}>
          <Text style={styles.title}>Información de la Carga</Text>
          <Text style={styles.value}>
            <Text style={styles.label}>ID:</Text> {dataCarga.id}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Folio Ticket:</Text>{" "}
            {dataCarga.folio_ticket}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Tipo de Carga:</Text>{" "}
            {dataCarga.nombre_clf_tipo_carga}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Moneda:</Text> {dataCarga.nombre_moneda}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Tipo de Cambio:</Text>{" "}
            {dataCarga.tipo_cambio}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Tasa IVA:</Text> {dataCarga.iva}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Vehículo y Operador</Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Operador:</Text>{" "}
            {dataCarga.nombre_personal_operador}
          </Text>
          {/* <Text style={styles.value}>
            <Text style={styles.label}>Empresa:</Text>{" "}
            {dataCarga.nombre_empresa_unidad}
          </Text> */}
          <Text style={styles.value}>
            <Text style={styles.label}>Unidad:</Text> {dataCarga.nombre_unidad}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Kilometraje:</Text>{" "}
            {dataCarga.kilometraje_actual}
          </Text>
        </View>
      </View>

      {/* Información Económica */}
      {/* <View style={[styles.section, styles.fullCard]}>
        <Text style={styles.title}>Información Económica</Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Moneda:</Text> {dataCarga.nombre_moneda}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Tipo de Cambio:</Text>{" "}
          {dataCarga.tipo_cambio}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Tasa IVA:</Text> {dataCarga.iva}
        </Text>
      </View> */}

      {/* Resumen de la Carga */}
      <View style={[styles.section, styles.fullCard]}>
        <Text style={styles.title}>Resumen de la Carga</Text>

        <View style={styles.tableHeader}>
          <Text style={styles.cell}>Tipo de{'\n'}Combustible</Text>
          <Text style={styles.cell}>Cantidad</Text>
          <Text style={styles.cell}>Unidad de Medida {'\n'} (U.M)</Text>
          <Text style={styles.cell}>Precio Unitario</Text>
          <Text style={styles.cell}>IVA</Text>
          <Text style={styles.cell}>Subtotal</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cell}>{dataCarga.nombre_tipo_combustible}</Text>
          <Text style={styles.cell}>{dataCarga.cantidad}</Text>
          <Text style={styles.cell}>{dataCarga.nombre_clave_unidad}</Text>
          <Text style={styles.cell}>{dataCarga.precio}</Text>
          <Text style={styles.cell}>{dataCarga.iva}</Text>
          <Text style={styles.cell}>{dataCarga.subtotal}</Text>
        </View>

        <Text style={styles.total}>Total: {dataCarga.total}</Text>
      </View>

      {/* Detalles Adicionales */}
      <View style={[styles.section, styles.fullCard]}>
        <Text style={styles.title}>Detalles Adicionales</Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Viaje:</Text> {dataCarga.nombre_viaje}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Observaciones:</Text>{" "}
          {dataCarga.observaciones}
        </Text>
      </View>
    </Page>
  </Document>
);