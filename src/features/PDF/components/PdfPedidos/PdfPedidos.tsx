import { View, Text, Document, Page, Image } from "@react-pdf/renderer";
import { styles } from "./stylePDfPedidos";
import logo from "../../../../../public/logo.png";

// Nueva data
import { empresaList, pedidoList, mercanciasList, serviciosList } from "./data";

export const PdfPedidos = () => {
  const renderText = (value:any) => (
    <Text style={value ? undefined : { color: "#A9A9A9" }}>
      {value || "Sin información"}
    </Text>
  );

  const formatCurrency = (value: number | string): string => {
  const number = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(number)) return '$0.00';

  return `$${number.toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
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
              Dirección: {empresaList?.direccion}
            </Text>
          </View>
        </View>

        <View style={[styles.section, styles.rowContainer]}>
          <View style={[styles.column, styles.leftColumn]}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Cliente:</Text>{" "}
              {pedidoList?.nombre_cliente}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>RFC:</Text>{" "}
              {pedidoList?.rfc_cliente}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Armado:</Text>{" "}
              {pedidoList?.nombre_configuracion_armado}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Tasa de IVA:</Text>{" "}
              {pedidoList?.nombre_tasa_iva}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Temperatura:</Text>{" "}
              {pedidoList?.temperatura_producto}{" "}
              {pedidoList?.nombre_clf_tipo_temperatura}
            </Text>
          </View>

          <View style={[styles.column, styles.rightColumn]}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Fecha de solicitud:</Text>{" "}
              {pedidoList?.fecha_solicitud}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>División de Negocio:</Text>{" "}
              {pedidoList?.nombre_division_negocio}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Moneda:</Text>{" "}
              {pedidoList?.nombre_moneda}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Tipo de Operación:</Text>{" "}
              {pedidoList?.nombre_clf_tipo_operacion}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.headerContainer_remitente}>
            <Text style={styles.headerText}>Remitente - Destinatario</Text>
          </View>
          <View>
            <View style={[styles.rowContainer_remitente, styles.fileblack]}>
              <Text style={styles.columnLeft}>Remitente:</Text>
              <Text style={styles.columnRight}>
                {pedidoList?.nombre_cliente_remitente}
              </Text>
            </View>
            <View style={styles.rowContainer_remitente}>
              <Text style={styles.columnLeft}>Domicilio Origen:</Text>
              <Text style={styles.columnRight}>
                {pedidoList?.nombre_cliente_remitente_direccion}
              </Text>
            </View>
            <View style={[styles.rowContainer_remitente, styles.fileblack]}>
              <Text style={styles.columnLeft}>Destinatario:</Text>
              <Text style={styles.columnRight}>
                {pedidoList?.nombre_cliente_destinatario}
              </Text>
            </View>
            <View style={styles.rowContainer_remitente}>
              <Text style={styles.columnLeft}>Domicilio Destinatario:</Text>
              <Text style={styles.columnRight}>
                {pedidoList?.nombre_cliente_destinatario_direccion}
              </Text>
            </View>
          </View>
        </View>

        {/* Mercancías */}
        <View style={styles.serviciosSection}>
          {/* <View style={[styles.space_br]} /> */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Mercancías</Text>
          </View>

          {mercanciasList && mercanciasList.length > 0 ? (
            mercanciasList.map((mercancias, index) => (
              <View key={index} style={styles.servicioGroup}>
                <View style={styles.servicioNombreHeader}>
                  <Text style={styles.servicioNombreText}>
                    {mercancias.nombre_mercancia}
                  </Text>
                </View>

                <View style={styles.servicioDataGrid}>
                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Unidad de peso:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_unidad_peso}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Cantidad:</Text>
                      <Text style={styles.valueText}>
                        {renderText(mercancias.cantidad)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Piezas:</Text>
                      <Text style={styles.valueText}>{mercancias.piezas}</Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Peso:</Text>
                      <Text style={styles.valueText}>{mercancias.peso}</Text>
                    </View>
                  </View>

                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave SAT:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_clave_producto_servicio}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Material peligroso:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.material_peligroso ? "SI" : "NO"}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Embalaje:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_embalaje}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Fracc. Arancelaria:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_fraccion_arancelaria}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave de Unidad:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_unidad_peso}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noDataText}>No hay datos disponibles</Text>
          )}
        </View>

        {/* Servicios */}
        <View style={styles.serviciosSection}>
          {/* <View style={[styles.space_br]} /> */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Servicios</Text>
          </View>

          {serviciosList && serviciosList.length > 0 ? (
            serviciosList.map((servicios, index) => (
              <View key={index} style={styles.servicioGroup}>
                <View style={styles.servicioNombreHeader}>
                  <Text style={styles.servicioNombreText}>
                    {servicios.nombre_servicio}
                  </Text>
                </View>

                <View style={styles.servicioDataGrid}>
                  {/* Primera fila */}
                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Cantidad:</Text>
                      <Text style={styles.valueText}>
                        {servicios.cantidad}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Subtotal:</Text>
                      <Text style={styles.valueText}>
                        {formatCurrency(servicios.subtotal)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Iva:</Text>
                      <Text style={styles.valueText}>
                        {formatCurrency(servicios.iva)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Retencion:</Text>
                      <Text style={styles.valueText}>
                        {renderText(formatCurrency(servicios.retencion))}
                      </Text>
                    </View>
                  </View>
                  {/* Segunda fila */}
                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Total:</Text>
                      <Text style={styles.valueText}>
                        {formatCurrency(servicios.total)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave Producto Servicio:</Text>
                      <Text style={styles.valueText}>
                        {servicios.nombre_clave_producto_servicio}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave de Unidad:</Text>
                      <Text style={styles.valueText}>
                        {servicios.nombre_clave_unidad}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Tasa de Iva:</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicios.nombre_tasa_iva)}
                      </Text>
                    </View>
                  </View>
                  {/* Tercera fila */}
                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Retención de Iva:</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicios.nombre_retencion_iva)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>%IEPS:</Text>
                      <Text style={styles.valueText}>
                        {servicios.ieps}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Retención de ISR:</Text>
                      <Text style={styles.valueText}>
                        {servicios.nombre_retencion_isr}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Aplica IEPS:</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicios.ieps_check ? "SI" : "NO")}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noDataText}>No hay datos disponibles</Text>
          )}
        </View>
          <View style={styles.serviciosSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Importes</Text>
            </View>
              <View style={styles.servicioGroup}>
                <View style={styles.servicioDataGrid}>
                  <View style={styles.servicioDataRow}>
                    <Text style={styles.keyLabel}>Subtotal:</Text>
                    <Text style={styles.valueText}>
                      {renderText(formatCurrency(pedidoList.subtotal))}
                    </Text>
                    <Text style={styles.keyLabel}>IVA:</Text>
                    <Text style={styles.valueText}>
                      {renderText(formatCurrency(pedidoList.iva))}
                    </Text>
                    <Text style={styles.keyLabel}>Retención:</Text>
                    <Text style={styles.valueText}>
                      {renderText(formatCurrency(pedidoList.retencion))}
                    </Text>
                    <Text style={styles.keyLabel}>Total:</Text>
                    <Text style={styles.valueText}>
                      {renderText(formatCurrency(pedidoList.total))}
                    </Text>
                  </View>
                </View>
              </View>
          </View>

        {/* //pie de pagina */}
        {/* <View style={styles.footerFixed} fixed>
          <Text style={styles.footerTitle}>OBSERVACIONES:</Text>

          <View style={styles.footerConformidadBox}>
            <Text style={styles.footerConformidadTitle}>
              RECIBE DE CONFORMIDAD
            </Text>
            <View style={styles.footerConformidadRow}>
              <Text style={styles.footerConformidadLabel}>NOMBRE:</Text>
              <Text style={styles.footerConformidadLabel}>FIRMA:</Text>
              <Text style={styles.footerConformidadLabel}>SELLO:</Text>
            </View>
          </View>

          <Text style={styles.footerText}>
            CONDICIONES DEL CONTRATO DE TRANSPORTE QUE AMPARA ESTA CARTA DE
            PORTE REMISIÓN PRIMERA.- Para los efectos del presente contrato de
            transporte se denomina “Porteador” al transportista y “Remitente” al
            usuario que contrate el servicio. SEGUNDA.- El “Remitente” es
            responsable de que la información proporcionada al “Porteador” sea
            veraz y que la documentación que entregue para efectos del
            transporte sea la correcta. TERCERA.- El “Remitente” debe declarar
            al “Porteador” el tipo de mercancía o efectos de que se trate, peso,
            medidas y/o número de la carga que entrega para su transporte y en
            su caso, el valor de la misma. La carga que se entregue a granel
            será pesada por el “Porteador” en el primer punto donde haya báscula
            apropiada o en su defecto, aforada en metros cúbicos con la
            conformidad del “Remitente”. CUARTA.- Para efectos del transporte,
            el “Remitente” deberá entregar al “Porteador” los documentos que las
            leyes y reglamentos exijan para llevar a cabo el servicio, en caso
            de no cumplirse con estos requisitos el “Porteador” está obligado a
            rehusar el transporte de las mercancías. QUINTA.- Si por sospecha de
            falsedad en la declaración del contenido de un bulto, el “Porteador”
            deseara proceder a su reconocimiento, podrá hacerlo antes testigos y
            con asistencia del “Remitente” o del consignatario. Si este último
            no concurriere, se solicitará la presencia de un inspector de la
            Secretaría de Comunicaciones y Transportes, y se levantará el acta
            correspondiente. El “Porteador” tendrá en todo caso la obligación de
            dejar los bultos en el estado en que se encontraban antes del
            reconocimiento. SEXTA.- El “Porteador” deberá recoger y entregar la
            carga precisamente en los domicilios que señale el “Remitente”,
            ajustándose a los términos y condiciones convenidos. El “Porteador“
            sólo está obligado a llevar la carga al domicilio del consignatario
            para su entrega una sola vez. Si ésta no fuera recibida se dejará
            aviso de que la mercancía queda a disposición del interesado en las
            bodegas que indique el “Porteador”. SÉPTIMA.- Si la carga no fuere
            retirada dentro de los 30 días siguientes a aquél en que hubiere
            sido puesta a disposición del consignatario, el “Porteador” podrá
            solicitar la venta en pública subasta con arreglo a lo que dispone
            el Código de Comercio. OCTAVA.- El “Porteador” y el “Remitente”
            negociarán libremente el precio del servicio tomando en cuenta su
            tipo, características de los embarques, volumen, regularidad, clase
            de carga y sistema de pago. NOVENA.- Si el “Remitente” desea que el
            “Porteador” asuma la responsabilidad por el valor de la mercancía o
            efectos que él declare y que cubra toda clase de riesgos, inclusive
            los derivados de caso fortuito o de fuerza mayor, las partes deberán
            convenir un cargo adicional equivalente al valor de la prima del
            seguro que se contrate, el cual se deberá expresar en la Carta de
            Porte. DÉCIMA.- Cuando el importe del flete no incluya el cargo
            adicional, la responsabilidad del “Porteador” queda expresamente
            limitada a la cantidad equivalente a 15 días de salario mínimo
            vigente en el Distrito Federal por tonelada o cuando se trate de
            embarques cuyo peso sea mayor de 200kg pero menor de 1000kg y a 4
            días de salario mínimo por remesa cuando se trate de embarques con
            peso hasta de 200kg. DÉCIMA PRIMERA.- El precio del transporte
            deberá pagarse en origen, salvo convenio entre las partes de pago en
            destino. Cuando el transporte se hubiere concertado “Flete por
            Cobrar”, la entrega de las mercancías o efectos se hará contra el
            pago del flete y el “Porteador” tendrá derecho a retenerlos mientras
            no se cubra el precio convenido. DÉCIMA SEGUNDA.- Si al momento de
            la entrega resultare algún faltante o avería, el consignatario
            deberá hacerla constar en ese acto en la carta de porte y formular
            su reclamación por escrito al “Porteador” dentro de las 24 horas
            siguientes. DÉCIMA TERCERA.- El “Porteador” queda eximido de la
            obligación de recibir mercancías o efectos para su transporte, en
            los siguientes casos: a) Cuando se trate de carga que por su
            naturaleza, peso, volumen, embalaje defectuoso o cualquier otra
            circunstancia no pueda transportarse sin destruirse o sin causar
            daño a los demás artículos o al material rodante, salvo que la
            empresa de que se trate tenga el equipo adecuado. b) Las mercancías
            cuyo transporte haya sido prohibido por disposiciones legales o
            reglamentarias. Cuando tales disposiciones no prohíban precisamente
            el transporte de determinadas mercancías, pero si ordenen la
            presentación de ciertos documentos para que puedan ser
            transportadas, el “ R e m i t e n t e ” e s t a r á o b l i g a d o
            a e n t r e g a r a l “ P o r t e a d o r ” l o s d o c u m e n t o
            s c o r r e s p o n d i e n t e s . DÉCIMA CUARTA.- Los casos no
            previstos en las presentes condiciones y las quejas derivadas de su
            aplicación se someterán por la vía administrativa a la Secretaría de
            Comunicaciones y Transportes.
          </Text>
        </View> */}
      </Page>
    </Document>
  );
};
