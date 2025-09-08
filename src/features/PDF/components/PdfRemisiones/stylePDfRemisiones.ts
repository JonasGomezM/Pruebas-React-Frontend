import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  space_br: {
    height: 10,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribuye las columnas
  },
  rowContainer_remitente: {
    flexDirection: "row",
    paddingVertical: 2, // Menos espacio arriba/abajo
    justifyContent: "space-between", // Distribuye las columnas
  },

  // Fila 1
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logoBox: {
    width: "27%",
    // padding: 5,
  },
  logoImage: {
    width: 120,
  },
  titleBox: {
    width: "50%",
    textAlign: "center",
  },
  companyName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  companyRFC: {
    fontSize: 10,
  },
  companyAddress: {
    fontSize: 10,
  },

  column: {
    flex: 1,
  },

  leftColumn: {
    alignItems: "flex-start",
  },

  rightColumn: {
    alignItems: "flex-end", // ✅ Alinea la segunda columna a la derecha
  },

  boldText: {
    fontFamily: "Helvetica-Bold", // 🔥 Asegurar que usa una fuente en negrita
  },

  page: { padding: 15, fontSize: 8 }, // Reducimos el padding general
  section: { marginBottom: 5 }, // Menos espacio entre secciones

  text: { marginBottom: 2 },

  text_size: { fontSize: 10 },

  // Estilos para la cabecera "Mercancías"

  headerContainer_remitente: {
    backgroundColor: "#031D40",
    paddingVertical: 4, // Menos espacio arriba/abajo
    borderRadius: 2,
    textAlign: "center",
  },

  headerText: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold", // 🔥 Asegurar que usa una fuente en negrita
    color: "white",
    textAlign: "center",
  },

  ////////////////////////

  fileblack: { backgroundColor: "#D3D3D3" },

  columnLeft: {
    width: "40%",
    fontSize: 10,
    paddingRight: 5,
    fontFamily: "Helvetica-Bold",
  },

  columnRight: {
    width: "60%",
    fontSize: 10,
    textAlign: "left",
  },

  //General
  section_general: {
    marginTop: 20,
    width: "100%",
  },
  headerContainer_general: {
    backgroundColor: "#002147",
    padding: 8,
  },
  headerText_general: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  row_general_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
  },
  row_general_data: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    paddingVertical: 8,
  },
  cellHeader_general: {
    flex: 1,
    fontSize: 8,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 2,
  },
  cell_general: {
    flex: 1,
    fontSize: 8,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 8,
  },

  //CDFDI
  section_cfdi: {
    marginTop: 20,
  },

  sectionHeader_cfdi: {
    backgroundColor: "#002147",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  sectionHeaderText_cfdi: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },

  row_cfdi: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  headerCell_cfdi_factura: {
    width: 70,
    fontSize: 8,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  headerCell_cfdi_fecha: {
    width: 85,
    fontSize: 8,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  headerCell_cfdi_uuid: {
    width: 160,
    fontSize: 8,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  headerCell_cfdi_tipo: {
    width: 100,
    fontSize: 8,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  cell_cfdi_factura: {
    width: 70,
    fontSize: 8,
    color: "#333",
    textAlign: "center",
  },

  cell_cfdi_fecha: {
    width: 85,
    fontSize: 8,
    color: "#333",
    textAlign: "center",
  },

  cell_cfdi_uuid: {
    width: 160,
    fontSize: 8,
    color: "#333",
    textAlign: "center",
  },

  cell_cfdi_tipo: {
    width: 100,
    fontSize: 8,
    color: "#333",
    textAlign: "center",
  },

  //viajes
  section_viaje: {
    marginTop: 20,
  },

  sectionHeader_viaje: {
    backgroundColor: "#002147",
    paddingVertical: 8,
    // paddingHorizontal: 12,
  },

  sectionHeaderText_viaje: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },

  row_viaje: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    // paddingHorizontal: 10,
  },

  headerCell_viaje: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#333",
    width: "10%",
    textAlign: "center",
  },

  cell_viaje: {
    fontSize: 8,
    justifyContent: "center",
    color: "#333",
    width: "10%",
    textAlign: "center",
  },

  // Concepto
  conceptoWrapper: {
    width: "50%",
    alignSelf: "flex-end",
    border: "1px solid #e4e4e4",
    marginTop: 90,
    fontSize: 10,
  },
  titleRow: {
    backgroundColor: "#002147",
    padding: 4,
  },
  titleText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  dataContainer: {
    flexDirection: "row",
  },
  labelColumn: {
    width: "50%",
    backgroundColor: "#e4e4e4",
    padding: 4,
    color: "black",
    fontFamily: "Helvetica-Bold",
  },
  labelItem: {
    color: "black",
    paddingVertical: 2,
    fontWeight: "normal",
  },
  totalLabel: {
    color: "black",
    paddingVertical: 2,
    fontWeight: "700",
  },
  valueColumn: {
    width: "50%",
    backgroundColor: "white",
    textAlign: "right",
    padding: 4,
  },
  valueItem: {
    color: "black",
    paddingVertical: 2,
  },
  totalValue: {
    fontFamily: "Helvetica-Bold",
    paddingVertical: 2,
  },

  //Servicios y mercancia
  serviciosSection: {
    marginTop: 20,
  },
  sectionHeader: {
    backgroundColor: "#002147",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13, // antes 16
    textAlign: "center",
  },
  servicioGroup: {
    marginBottom: 12,
  },
  servicioNombreHeader: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  servicioNombreText: {
    fontSize: 8, // antes 13
    fontWeight: "600",
    color: "#000",
  },
  servicioDataGrid: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  servicioDataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    flexWrap: "wrap",
  },
  servicioDataCell: {
    width: "19%",
  },
  keyLabel: {
    fontWeight: "bold",
    fontSize: 8, // antes 11
    color: "#000",
  },
  valueText: {
    fontWeight: "normal",
    fontSize: 8, // nuevo
    color: "#000",
  },
});
