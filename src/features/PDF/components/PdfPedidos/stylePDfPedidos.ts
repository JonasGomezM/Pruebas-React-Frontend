import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  // space_br: {
  //   height: 10,
  // },

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


  //Servicios y mercancia
  serviciosSection: {
    marginTop: 15,
  },
  sectionHeader: {
    backgroundColor: "#002147",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeaderText: {
    color: "white",
    fontFamily: 'Helvetica-Bold',
    fontSize: 13, // antes 16
    textAlign: "center",
  },
  servicioGroup: {
    marginBottom: 0,
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
    width: "22%",
  },
  keyLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8, // antes 11
    color: "#000",
  },
  valueText: {
    fontWeight: "normal",
    fontSize: 8, // nuevo
    marginTop: 2,
    color: "#000",
  },

noDataText: {
  textAlign: "center",
  color: "#A9A9A9", // gris clarito
  fontSize: 12,
  fontStyle: "italic",
  marginVertical: 10,
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
    fontFamily: 'Helvetica-Bold',
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
    fontFamily: 'Helvetica-Bold',
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

  row_general: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    // paddingHorizontal: 10,
  },


// pie de pagina
footerFixed: {
  position: "absolute",
  bottom: 10, // o 0 si deseas completamente pegado al borde
  left: 20,
  right: 20,
  paddingTop: 10,
  fontSize: 5,
  lineHeight: 1.2,
  borderTop: "1pt solid #000",
  backgroundColor: "#FFF",
},

footerTitle: {
  fontFamily: "Helvetica-Bold",
  fontSize: 8,
  marginBottom: 5,
},

footerConformidadBox: {
  border: "1pt solid #000",
  padding: 8,
  marginTop: 10,
},

footerConformidadTitle: {
  fontSize: 8,
  fontFamily: "Helvetica-Bold",
  marginBottom: 4,
},

footerConformidadRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 4,
},

footerConformidadLabel: {
  fontSize: 7,
  paddingRight: 80,
  fontFamily: "Helvetica-Bold",
},


footerText: {
  fontSize: 4.7,
  textAlign: "justify",
  marginTop: 5,
},

});
