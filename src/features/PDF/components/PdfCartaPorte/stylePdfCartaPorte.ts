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

  //Servicios
  tableContainer: {
    fontSize: 9,
    marginTop: 20,
  },
  header: {
    backgroundColor: '#001F4D',
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  cell: {
    flex: 1,
    padding: 3,
    textAlign: 'center',
  },
  grayHeader: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },

  //resumen
  resumenContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  resumenQR: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resumenQRImage: {
    width: 100,
    height: 100,
  },
  resumenTabla: {
    width: '50%',
    fontSize: 9,
  },
  resumenHeader: {
    backgroundColor: '#001F4D',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center',
  },
  resumenRow: {
    flexDirection: 'row',
  },
  resumenColLeft: {
    width: '60%',
    backgroundColor: '#e6e6e6',
    padding: 3,
    fontSize: 10,
    paddingLeft: 25,
    fontWeight: 'bold',
  },
  resumenColRight: {
    width: '40%',
    backgroundColor: '#fff',
    padding: 4,
    textAlign: 'right',
  },

  //Mercancias
  mercanciasContainer: {
    fontSize: 9,
    marginTop: 20,
  },
  mercanciasTitle: {
    backgroundColor: '#001F4D',
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  mercanciasRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  mercanciasCell: {
    flex: 1,
    padding: 3,
    textAlign: 'center',
  },
  mercanciasBold: {
    fontWeight: 'bold',
  },
  mercanciasGrayHeader: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
  },
  mercanciasBeigeRow: {
    backgroundColor: '#fdf4dc',
  },
  mercanciasSubTitle: {
    fontSize: 8,
    backgroundColor: '#ccc',
    color: '#000',
    marginTop: 6,
    padding: 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  //cartaporte
headerTitle: {
    backgroundColor: '#001F4D',
    color: 'white',
    fontSize: 12,
    padding: 6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rowLabels: {
    flexDirection: 'row',
    marginBottom: 1,
    textAlign: 'center',
  },
  rowValues: {
    flexDirection: 'row',
    marginBottom: 6,
    textAlign: 'center',
  },
  cellLabel: {
    padding: 4,
    backgroundColor: '#e0e0e0',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 9,
  },
  cellValue: {
    padding: 4,
    color: 'black',
  },

  // Anchos personalizados
  flexShort: {
    flex: 1,
  },
  flexMedium: {
    flex: 1.5,
  },
  flexLong: {
    flex: 3,
  },
});
