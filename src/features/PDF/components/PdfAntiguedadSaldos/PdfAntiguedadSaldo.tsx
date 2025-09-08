import { View, Text, Document, Page, Image } from "@react-pdf/renderer";
import { styles } from "./styleAntiguedadSaldo";
import { AntiguedadSaldo, RowData } from "./data";

import logo from "../../../../../public/logo.png";
import { Background } from "victory";

// export const mockAntiguedadData: AntiguedadSaldo[] = [
//   {
//     nombre_cliente: "ADN ENERGIA",
//     documento: "E-15940",
//     fecha: "22/05/2025",
//     fecha_vencimiento: "22/05/2025",
//     dias: 77,
//     tipo: "Vencido",
//     tipo_documento: "Directa",
//     moneda: "MXN",
//     tipo_cambio: 1.0,
//     saldo: 73920.0,
//     rango_1_7v: 0.0,
//     rango_8_15v: 0.0,
//     rango_16_30v: 0.0,
//     mayor_31v: 73920.0,
//     saldo_vencido: 73920.0,
//     rango_1_7pv: 0.0,
//     rango_8_15pv: 0.0,
//     rango_16_30pv: 0.0,
//     mayor_31pv: 0.0,
//     saldo_por_vencer: 0.0,
//   },
// ];

// Componente
// interface Props {
//   data: any[];
// }

export const AntiguedadSaldosPDF = ({ data }: { data: any[] }) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.topRow}>
        <View style={styles.logoBox}>
          <Image style={styles.logoImage} src={logo} />
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.companyName}>{"AUTO TRANSPORTES CISNEROS"} </Text>
          <Text style={styles.companyRFC}>{"ATC0108171K9"} </Text>
          <Text style={styles.companyAddress}>
            Dirección: {"Sin Dirección: Calle CARRET. FEDERAL 57 #226 Colonia Cloete \n Mineral CP: 26960 México, Coahuila"}
          </Text>
        </View>
      </View>


      {/* Encabezado azul con título */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>REPORTE DE ANTIGUEDAD DE SALDOS</Text>
      </View>

      {/* Cabecera */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.headerCell, { flex: 2 }]}>
          Cliente
        </Text>
        <Text style={[styles.cell, styles.headerCell]}>Doc</Text>
        <Text style={[styles.cell, styles.headerCell]}>F.Emisión</Text>
        <Text style={[styles.cell, styles.headerCell]}>F.Venc</Text>
        <Text style={[styles.cell, styles.headerCell]}>Días</Text>
        <Text style={[styles.cell, styles.headerCell]}>Tipo</Text>
        <Text style={[styles.cell, styles.headerCell]}>T.Doc</Text>
        <Text style={[styles.cell, styles.headerCell]}>Mon</Text>
        <Text style={[styles.cell, styles.headerCell]}>TC</Text>
        <Text style={[styles.cell, styles.headerCell]}>Saldo</Text>
        <Text style={[styles.cell, styles.headerCell]}>Vencido</Text>
        <Text style={[styles.cell, styles.headerCell]}>1-7v</Text>
        <Text style={[styles.cell, styles.headerCell]}>8-15v</Text>
        <Text style={[styles.cell, styles.headerCell]}>16-30v</Text>
        <Text style={[styles.cell, styles.headerCell]}>&gt;31v</Text>
        <Text style={[styles.cell, styles.headerCell]}>Por Vencer</Text>
        <Text style={[styles.cell, styles.headerCell]}>1-7pv</Text>
        <Text style={[styles.cell, styles.headerCell]}>8-15pv</Text>
        <Text style={[styles.cell, styles.headerCell]}>16-30pv</Text>
        <Text style={[styles.cell, styles.headerCell]}>&gt;31pv</Text>
      </View>

      {/* Datos: SOLO recorriendo la data que tú ya tienes */}
      {data.map((r, i) => {
        const rowStyle = [
          styles.row,
          {
            backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#ffffff", // Gris clarito y blanco
          },
        ];

        return (
          <View key={i} style={rowStyle}>
            <Text style={[styles.cell, { flex: 2 }]}>{r.nombre_cliente}</Text>
            <Text style={styles.cell}>{r.documento}</Text>
            <Text style={styles.cell}>{r.fecha}</Text>
            <Text style={styles.cell}>{r.fecha_vencimiento}</Text>
            <Text style={styles.cell}>{r.dias}</Text>
            <Text style={styles.cell}>{r.tipo}</Text>
            <Text style={styles.cell}>{r.tipo_documento}</Text>
            <Text style={styles.cell}>{r.moneda}</Text>
            <Text style={styles.cell}>{r.tipo_cambio}</Text>
            <Text style={styles.cell}>{r.saldo}</Text>
            <Text style={styles.cell}>{r.saldo_vencido}</Text>
            <Text style={styles.cell}>{r.rango_1_7pv}</Text>
            <Text style={styles.cell}>{r.rango_8_15v}</Text>
            <Text style={styles.cell}>{r.rango_16_30v}</Text>
            <Text style={styles.cell}>{r.mayor_31v}</Text>
            <Text style={styles.cell}>{r.saldo_por_vencer}</Text>
            <Text style={styles.cell}>{r.rango_1_7pv}</Text>
            <Text style={styles.cell}>{r.rango_8_15pv}</Text>
            <Text style={styles.cell}>{r.rango_16_30pv}</Text>
            <Text style={styles.cell}>{r.mayor_31pv}</Text>
          </View>
        );
      })}
    </Page>
  </Document>
);
