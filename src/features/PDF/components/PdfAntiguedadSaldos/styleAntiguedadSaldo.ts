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

  /// aqui lo nuevo
  titleSection: {
    backgroundColor: '#031D40',
    paddingVertical: 8,
    textAlign: 'center',
    marginTop: 10
  },
  title: {
    fontSize: 10,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
table: {
    display: "flex",
    width: "100%",
    borderWidth: 0.5,
  },
  row: {
    flexDirection: "row"
  },
  cell: {
    flex: 1,
    fontSize: 7,
    padding: 3,
    textAlign: "center"
  },
  headerCell: {
    backgroundColor: "#e2e2e2ff",
    color: "#000000ff",
    fontWeight: "bold"
  }
});
