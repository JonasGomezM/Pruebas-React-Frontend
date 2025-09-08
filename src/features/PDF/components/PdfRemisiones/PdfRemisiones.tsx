import { View, Text, Document, Page, Image } from "@react-pdf/renderer";
import { styles } from "./stylePDfRemisiones";
import { empresaList, remisionList, mercanciasList, serviciosList, dataViaje, dataCFDI, dataGeneral} from './data';

import logo from "../../../../../public/logo.png";
import { JSX } from "react";

export const PdfRemisiones = () => {
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

        {/* Remitente - Destinatario */}
        <View style={styles.section}>
          <View style={styles.headerContainer_remitente}>
            <Text style={styles.headerText}>Remitente - Destinatario</Text>
          </View>
          <View>
            <View style={[styles.rowContainer_remitente, styles.fileblack]}>
              <Text style={styles.columnLeft}>Remitente:</Text>
              <Text style={styles.columnRight}>
                {remisionList?.nombre_cliente_remitente}
              </Text>
            </View>
            <View style={styles.rowContainer_remitente}>
              <Text style={styles.columnLeft}>Domicilio Origen:</Text>
              <Text style={styles.columnRight}>
                {remisionList?.direccion_cliente_remitente}
              </Text>
            </View>
            <View style={[styles.rowContainer_remitente, styles.fileblack]}>
              <Text style={styles.columnLeft}>Destinatario:</Text>
              <Text style={styles.columnRight}>
                {remisionList?.nombre_cliente_destinatario}
              </Text>
            </View>
            <View style={styles.rowContainer_remitente}>
              <Text style={styles.columnLeft}>Domicilio Destinatario:</Text>
              <Text style={styles.columnRight}>
                {remisionList?.direccion_cliente_destinatario}
              </Text>
            </View>
          </View>
        </View>

        {/* Mercancías */}
        {mercanciasList.length > 0 && (
          <View style={styles.serviciosSection}>
            <View style={[styles.space_br]} />

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Mercancías</Text>
            </View>

            {mercanciasList.map((mercancias, index) => (
              <View key={index} style={styles.servicioGroup}>
                <View style={styles.servicioNombreHeader}>
                  <Text style={styles.servicioNombreText}>
                    {mercancias.nombre_mercancia || "Mercancía"}
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
                        {mercancias.cantidad}
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
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave de Unidad:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombnre_clave_unidad}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Tipo Materia:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_tipo_material}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave SAT:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_clave_producto_servicio}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Material peligroso:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.material_peligroso}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave embalaje:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_clave_material_peligroso}
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
                      <Text style={styles.keyLabel}>Embalaje:</Text>
                      <Text style={styles.valueText}>
                        {mercancias.nombre_embalaje}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Servicios */}
        {serviciosList.length > 0 && (
          <View style={styles.serviciosSection}>
            <View
              style={[
                styles.sectionHeader,
                { alignItems: "center", justifyContent: "center" },
              ]}
            >
              <Text style={styles.sectionHeaderText}>Servicios</Text>
            </View>

            {serviciosList.map((servicio, index) => (
              <View key={`servicio-${index}`} style={styles.servicioGroup}>
                <View style={styles.servicioNombreHeader}>
                  <Text style={styles.servicioNombreText}>
                    {renderText(servicio.nombre_servicio)}
                  </Text>
                </View>

                <View style={styles.servicioDataGrid}>
                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Cantidad</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.cantidad)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave Unidad</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.nombre_clave_unidad)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Clave SAT</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.nombre_clave_producto_servicio)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Tasa IVA</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.nombre_tasa_iva)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>IVA</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.iva)}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.servicioDataRow}>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Retención IVA</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.nombre_retencion_iva)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Retención</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.retencion)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Subtotal</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.subtotal)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      <Text style={styles.keyLabel}>Total</Text>
                      <Text style={styles.valueText}>
                        {renderText(servicio.total)}
                      </Text>
                    </View>
                    <View style={styles.servicioDataCell}>
                      {/* Espacio vacío */}
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </Page>

      {/* // segunda pagina */}
      <Page size="A4" style={styles.page}>
        {/* Encabezado */}
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

        {/* General */}
        <View style={styles.section_general}>
          <View style={styles.headerContainer_general}>
            <Text style={styles.headerText_general}>General</Text>
          </View>

          {/* Fila de encabezados */}
          <View style={styles.row_general_header}>
            <Text style={styles.cellHeader_general}>Forma de pago</Text>
            <Text style={styles.cellHeader_general}>Método de pago</Text>
            <Text style={styles.cellHeader_general}>Uso de CFDI</Text>
            <Text style={styles.cellHeader_general}>Número de Permiso SCT</Text>
            <Text style={styles.cellHeader_general}>Tipo Permiso SCT</Text>
            <Text style={styles.cellHeader_general}>Clave Nomenclatura</Text>
            <Text style={styles.cellHeader_general}>
              Configuración Autotransporte
            </Text>
          </View>

          {/* Fila de datos */}
          {dataGeneral.map((item, index) => (
            <View key={`general-${index}`}
              style={[
                styles.row_viaje,
                { backgroundColor: index % 2 === 0 ? "#fff" : "#f5f5f5" },
              ]}
            >
              <Text style={styles.cell_general}>{item.forma_pago}</Text>
              <Text style={styles.cell_general}>{item.metodo_pago}</Text>
              <Text style={styles.cell_general}>{item.uso_cfdi}</Text>
              <Text style={styles.cell_general}>{item.num_permiso}</Text>
              <Text style={styles.cell_general}>{item.tipo_permiso}</Text>
              <Text style={styles.cell_general}>{item.clave_nomenclatura}</Text>
              <Text style={styles.cell_general}>{item.configuracion_auto}</Text>
            </View>
          ))}
        </View>

        {/* CDFDI Relacionado */}
        <View style={styles.section_cfdi}>
          <View style={styles.sectionHeader_cfdi}>
            <Text style={styles.sectionHeaderText_cfdi}>CFDI Relacionado</Text>
          </View>

          {/* Encabezado */}
          <View style={[styles.row_cfdi, { backgroundColor: "#e0e0e0" }]}>
            <Text style={styles.headerCell_cfdi_factura}>Factura</Text>
            <Text style={styles.headerCell_cfdi_fecha}>Fecha Factura</Text>
            <Text style={styles.headerCell_cfdi_uuid}>UUID</Text>
            <Text style={styles.headerCell_cfdi_tipo}>Tipo de relación</Text>
          </View>

          {/* Filas de datos */}
          {dataCFDI.map((item, index) => (
            <View
              key={`cfdi-${index}`}
              style={[
                styles.row_cfdi,
                { backgroundColor: index % 2 === 0 ? "#fff" : "#f5f5f5" },
              ]}
            >
              <Text style={styles.cell_cfdi_factura}>{item.Factura}</Text>
              <Text style={styles.cell_cfdi_fecha}>{item.fecha_factura}</Text>
              <Text style={styles.cell_cfdi_uuid}>{item.UUID}</Text>
              <Text style={styles.cell_cfdi_tipo}>{item.Tipo_relacion}</Text>
            </View>
          ))}
        </View>

        {/* Datos del viaje */}
        <View style={styles.section_viaje}>
          {/* Título azul oscuro */}
          <View style={[styles.sectionHeader_viaje]}>
            <Text style={styles.sectionHeaderText_viaje}>Datos del viaje</Text>
          </View>

          {/* Encabezado gris oscuro */}
          <View style={[styles.row_viaje, { backgroundColor: "#e0e0e0" }]}>
            <Text style={styles.headerCell_viaje}>Viaje</Text>
            <Text style={styles.headerCell_viaje}>Operador</Text>
            <Text style={styles.headerCell_viaje}>Armado</Text>
            <Text style={styles.headerCell_viaje}>Piezas</Text>
            <Text style={styles.headerCell_viaje}>Unidad</Text>
            <Text style={styles.headerCell_viaje}>Remolque</Text>
            <Text style={styles.headerCell_viaje}>Dolly</Text>
            <Text style={styles.headerCell_viaje}>Remolque2</Text>
            <Text style={styles.headerCell_viaje}>Fecha inicial</Text>
            <Text style={styles.headerCell_viaje}>Estatus</Text>
          </View>

          {/* Filas de datos (sin contornos y alternando colores) */}
          {dataViaje.map((item, index) => (
            <View
              key={`viaje-${index}`}
              style={[
                styles.row_viaje,
                { backgroundColor: index % 2 === 0 ? "#fff" : "#f5f5f5" },
              ]}
            >
              <Text style={styles.cell_viaje}>{item.viaje}</Text>
              <Text style={styles.cell_viaje}>{item.operador}</Text>
              <Text style={styles.cell_viaje}>{item.armado}</Text>
              <Text style={styles.cell_viaje}>{item.piezas}</Text>
              <Text style={styles.cell_viaje}>{item.unidad}</Text>
              <Text style={styles.cell_viaje}>{item.remolque}</Text>
              <Text style={styles.cell_viaje}>{item.dolly}</Text>
              <Text style={styles.cell_viaje}>{item.remolque2}</Text>
              <Text style={styles.cell_viaje}>{item.fecha}</Text>
              <Text style={styles.cell_viaje}>{item.estatus}</Text>
            </View>
          ))}
        </View>

        {/* Concepto 2 */}
        <View style={styles.conceptoWrapper}>
          {/* Título */}
          <View style={styles.titleRow}>
            <Text style={styles.titleText}>Concepto</Text>
          </View>

          {/* Contenido en dos columnas: izquierda etiquetas, derecha valores */}
          <View style={styles.dataContainer}>
            {/* Columna izquierda: etiquetas */}
            <View style={styles.labelColumn}>
              <Text style={styles.labelItem}>Forma de valoración</Text>
              <Text style={styles.labelItem}>Subtotal</Text>
              <Text style={styles.labelItem}>IVA</Text>
              <Text style={styles.labelItem}>Retención</Text>
              <Text style={styles.totalLabel}>Total</Text>
            </View>

            {/* Columna derecha: valores */}
            <View style={styles.valueColumn}>
              <Text style={styles.valueItem}>Tarifario</Text>
              <Text style={styles.valueItem}>
                {remisionList?.subtotal !== null &&
                remisionList?.subtotal !== undefined
                  ? `$${remisionList.subtotal}`
                  : renderText(remisionList.subtotal)}
              </Text>
              <Text style={styles.valueItem}>
                {remisionList?.subtotal !== null &&
                remisionList?.subtotal !== undefined
                  ? `$${remisionList?.subtotal}`
                  : renderText(remisionList?.subtotal)}
              </Text>
              <Text style={styles.valueItem}>
                {remisionList?.retencion !== null &&
                remisionList?.retencion !== undefined
                  ? `$${remisionList?.retencion}`
                  : renderText(remisionList?.retencion)}
              </Text>
              <Text style={styles.totalValue}>
                {remisionList?.total !== null &&
                remisionList?.total !== undefined
                  ? `$${remisionList?.total}`
                  : renderText(remisionList?.total)}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
