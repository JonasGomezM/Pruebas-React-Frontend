import { View, Text, Document, Page, Image } from "@react-pdf/renderer";
import { styles } from "./stylePdfCartaPorte";
import { empresaList, remisionList, mercanciasList, serviciosList, dataViaje, dataCFDI, dataGeneral} from './data';

import logo from "../../../../../public/logo.png";
import QR from "./QR_code.png";
import { JSX } from "react";

export const PdfCartaPorte = () => {
  function splitAddress(direccion: string): import("react").ReactNode {
    const parts = direccion?.split(',');
    return (
      <View>
        {parts?.map((part, index) => (
          <Text key={index}>{part}</Text>
        ))}
      </View>
    );
  }

  const renderText = (value: any): JSX.Element => (
  <Text style={value ? undefined : { color: "#A9A9A9" }}>
    {value || "Sin información"}
  </Text>
);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.topRow}>
          <View style={styles.logoBox}>
            <Image style={styles.logoImage} src={logo} />
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.companyName}>{empresaList?.razon_social}</Text>
            <Text style={styles.companyRFC}>{empresaList?.rfc}</Text>
            <Text style={styles.companyAddress}>
              Dirección: {splitAddress(empresaList?.direccion)}
            </Text>
          </View>
        </View>

        <View style={[styles.section, styles.rowContainer]}>
          {/* Columna Izquierda */}
          <View style={[styles.column, styles.leftColumn]}>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>Cliente:</Text>{" "}
              {remisionList?.nombre_cliente}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>RFC:</Text>{" "}
              {remisionList?.rfc_cliente}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>Armado:</Text>{" "}
              {remisionList?.nombre_configuracion_armado}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>Folio:</Text>{" "}
              {remisionList?.folio_serie_remision}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>
                Tasa de IVA:
              </Text>{" "}
              {remisionList?.nombre_tasa_iva}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>
                Temperatura del producto:
              </Text>{" "}
              {remisionList?.temperatura_producto}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>Pedido:</Text>{" "}
              {remisionList?.nombre_pedido}
            </Text>
          </View>

          {/* Columna Derecha */}
          <View style={[styles.column, styles.rightColumn]}>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>
                Fecha de solicitud:
              </Text>{" "}
              {remisionList?.fecha_solicitud}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>
                División de Negocio:
              </Text>{" "}
              {remisionList?.nombre_division_negocio}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>
                Referencia:
              </Text>{" "}
              {remisionList?.referencia}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>Moneda:</Text>{" "}
              {remisionList?.nombre_moneda}
            </Text>
            <Text style={[styles.text, styles.text_size]}>
              <Text style={[styles.boldText, styles.text_size]}>
                Tipo de Operación:
              </Text>{" "}
              {remisionList?.nombre_tipo_operacion}
            </Text>
          </View>
        </View>

        {/* Servicios */}
        <View style={styles.tableContainer}>
          {/* Título principal */}
          <Text style={styles.header}>Servicios</Text>

          {/* Cabecera 1 */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.grayHeader]}>Nombre</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Cantidad</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Subtotal</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Iva</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Retención</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Total</Text>
          </View>

          {/* Valores fila 1 */}
          <View style={styles.row}>
            <Text style={styles.cell}>Servicio de Flete</Text>
            <Text style={styles.cell}>1.00</Text>
            <Text style={styles.cell}>$150.00</Text>
            <Text style={styles.cell}>0.00</Text>
            <Text style={styles.cell}>0.00</Text>
            <Text style={styles.cell}>$150.00</Text>
          </View>

          {/* Cabecera 2 (gris) */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.grayHeader]}>ClaveSAT</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Clave Unidad</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Tasa Iva</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Retención IVA</Text>
            <Text style={[styles.cell, styles.grayHeader]}>Retención ISR</Text>
          </View>

          {/* Valores fila 2 */}
          <View style={styles.row}>
            <Text style={styles.cell}>78101800</Text>
            <Text style={styles.cell}>E48</Text>
            <Text style={styles.cell}>0.00</Text>
            <Text style={styles.cell}>0.00</Text>
            <Text style={styles.cell}>0.00</Text>
          </View>
        </View>

        {/* Resumen */}
        <View style={styles.resumenContainer}>
          {/* Columna izquierda - QR */}
          <View style={styles.resumenQR}>
            <Image
              src={QR} // reemplaza por tu ruta real
              style={styles.resumenQRImage}
            />
          </View>

          {/* Columna derecha - Totales */}
          <View style={styles.resumenTabla}>
            <Text style={styles.resumenHeader}>Concepto</Text>

            <View style={styles.resumenRow}>
              <Text style={styles.resumenColLeft}>Subtotal</Text>
              <Text style={styles.resumenColRight}>$150.00</Text>
            </View>

            <View style={styles.resumenRow}>
              <Text style={styles.resumenColLeft}>IVA</Text>
              <Text style={styles.resumenColRight}>$0.00</Text>
            </View>

            <View style={styles.resumenRow}>
              <Text style={styles.resumenColLeft}>Retención</Text>
              <Text style={styles.resumenColRight}>$0.00</Text>
            </View>

            <View style={styles.resumenRow}>
              <Text style={styles.resumenColLeft}>Total</Text>
              <Text style={styles.resumenColRight}>$150.00</Text>
            </View>
          </View>
        </View>

        {/* Mercancias */}
        <View style={styles.mercanciasContainer}>
          {/* Título */}
          <Text style={styles.mercanciasTitle}>Mercancías</Text>

          {/* Cabecera principal */}
          <View style={styles.mercanciasRow}>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Peso bruto total
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Num total de mercancías
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Unidad de peso
            </Text>
          </View>

          {/* Valores principales */}
          <View style={styles.mercanciasRow}>
            <Text style={styles.mercanciasCell}>4,500.00</Text>
            <Text style={styles.mercanciasCell}>1</Text>
            <Text style={styles.mercanciasCell}>KGM</Text>
          </View>

          {/* Subtabla bienes */}
          <View style={styles.mercanciasRow}>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Bienes Transportados
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Descripción
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Cantidad
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Clave Unidad
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasGrayHeader]}>
              Peso en Kg
            </Text>
          </View>

          {/* Valores de bienes */}
          <View style={styles.mercanciasRow}>
            <Text style={styles.mercanciasCell}>13102012</Text>
            <Text style={styles.mercanciasCell}>Plataforma elevadora</Text>
            <Text style={styles.mercanciasCell}>1.00000</Text>
            <Text style={styles.mercanciasCell}>11</Text>
            <Text style={styles.mercanciasCell}>4,500.00</Text>
          </View>

          {/* Subtítulo sección final */}
          {/* <Text style={styles.mercanciasSubTitle}>Cantidad transporta</Text>
          <View style={[styles.mercanciasRow, styles.mercanciasBeigeRow]}>
            <Text style={[styles.mercanciasCell, styles.mercanciasBold]}>
              Cantidad
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasBold]}>
              IDOrigen
            </Text>
            <Text style={[styles.mercanciasCell, styles.mercanciasBold]}>
              IDDestino
            </Text>
          </View> */}

          {/* Valores beige */}
          <View style={styles.mercanciasRow}>
            <Text style={styles.mercanciasCell}>1.00000</Text>
            <Text style={styles.mercanciasCell}>OR000001</Text>
            <Text style={styles.mercanciasCell}>DE000001</Text>
          </View>
        </View>

        {/* carta porte */}
      <Text style={styles.headerTitle}>Complemento carta porte</Text>

      {/* Fila 1 */}
      <View style={styles.rowLabels}>
        <Text style={[styles.cellLabel, styles.flexShort]}>Versión del{'\n'}complemento</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Transporte{'\n'}internacional</Text>
        <Text style={[styles.cellLabel, styles.flexLong]}>ID CCP</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Registro{'\n'}Istmo</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Régimen{'\n'}aduanero</Text>
      </View>
      <View style={styles.rowValues}>
        <Text style={[styles.cellValue, styles.flexShort]}>3.1</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>No</Text>
        <Text style={[styles.cellValue, styles.flexLong]}>
          CCC0C274-f8Aa-403B-a86F-a22d225B4A49
        </Text>
        <Text style={[styles.cellValue, styles.flexShort]}>No</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>No</Text>
      </View>

      {/* Fila 2 */}
      <View style={styles.rowLabels}>
        <Text style={[styles.cellLabel, styles.flexShort]}>Ubicación polo de origen</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Ubicación polo bde destino</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Origen</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Destino</Text>
        
      </View>
      <View style={styles.rowValues}>
        <Text style={[styles.cellValue, styles.flexShort]}>OR000001</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>DE000001</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>
          Dirección: Avenida de los Insurgentes Sur 1234 Col. Del Valle CDMX México
        </Text>
        <Text style={[styles.cellValue, styles.flexShort]}>
          Dirección: Avenida de los Insurgentes Sur 1234 Col. Del Valle CDMX México
        </Text>
      </View>

      {/* Fila 3 */}
      <View style={styles.rowLabels}>
        <Text style={[styles.cellLabel, styles.flexShort]}>PermSCT</Text>
        <Text style={[styles.cellLabel, styles.flexMedium]}>NumPermisoSCT</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Configuración Vehicular</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Peso Bruto Vehicular</Text>
      </View>
      <View style={styles.rowValues}>
        <Text style={[styles.cellValue, styles.flexShort]}>TPAF01</Text>
        <Text style={[styles.cellValue, styles.flexMedium]}>14032002050646267</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>T3S2</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>4,515.50</Text>
      </View>

      {/* Fila 4 */}
      <View style={styles.rowLabels}>
        <Text style={[styles.cellLabel, styles.flexShort]}>Placa VM</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Año Modelo VM</Text>
        <Text style={[styles.cellLabel, styles.flexMedium]}>AseguraRespCivil</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>PolizaRespCivil</Text>
        
      </View>
      <View style={styles.rowValues}>
        <Text style={[styles.cellValue, styles.flexShort]}>38AD8W</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>2012</Text>
        <Text style={[styles.cellValue, styles.flexMedium]}>QUALITAS COMPAÑÍA DE SEGUROS, SA DE CV</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>2060059000</Text>
      </View>

      {/* Fila 5 */}
      <View style={styles.rowLabels}>
        <Text style={[styles.cellLabel, styles.flexShort]}>Referencia</Text>
        <Text style={[styles.cellLabel, styles.flexMedium]}>Operador</Text>
        <Text style={[styles.cellLabel, styles.flexShort]}>Licencia</Text>
      </View>
      <View style={styles.rowValues}>
        <Text style={[styles.cellValue, styles.flexShort]}>LOAD 297-2</Text>
        <Text style={[styles.cellValue, styles.flexMedium]}>SERAFIN HERNANDEZ CHAVEZ</Text>
        <Text style={[styles.cellValue, styles.flexShort]}>TAMP222103</Text>
      </View>
      </Page>
    </Document>
  );
};
