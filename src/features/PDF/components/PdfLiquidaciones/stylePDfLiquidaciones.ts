import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 9,
    fontFamily: "Helvetica",
  },
  wrapper: {
    width: "100%",
    marginBottom: 12,
  },
  headerBox: {
    flexDirection: "row",
    border: "1pt solid black",
    padding: 6,
  },
  logoBox: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1pt solid black",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  titleBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1pt solid black",
    paddingHorizontal: 6,
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoBox: {
    width: 200, // ampliado un poco si se requiere
    paddingLeft: 6,
    justifyContent: "center",
  },
  infoRow: {
    flexDirection: "row",
    fontSize: 8,
    marginBottom: 2,
  },
  label: {
    fontSize: 8,
    fontWeight: "bold",
  },
  value: {
    fontSize: 8,
  },
  estado: {
    fontSize: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "red",
    paddingHorizontal: 4,
    paddingVertical: 1,
  },

  // conceptos de la liquidación
  conceptosWrapper: {
    width: '100%',
    marginTop: 12,
  },
  conceptosTitleBox: {
    backgroundColor: 'black',
    padding: 4,
  },
  conceptosTitle: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conceptosRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#e4e4e4',
    paddingVertical: 4,
  },
  conceptosCellHeader: {
    flex: 1,
    fontSize: 7,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conceptosRow: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  conceptosRowEven: {
    backgroundColor: '#ffffff',
  },
  conceptosRowOdd: {
    backgroundColor: '#f9f9f9',
  },
  conceptosCell: {
    flex: 1,
    fontSize: 7,
    textAlign: 'center',
  },

  //viajes asociados
   viajesWrapper: {
    width: '100%',
    marginTop: 12,
  },
  viajesTitleBox: {
    backgroundColor: 'black',
    padding: 4,
  },
  viajesTitle: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viajeItem: {
    marginBottom: 6,
  },
  viajeHeader: {
    backgroundColor: '#e4e4e4',
    padding: 4,
  },
  viajeHeaderText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  viajeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 4,
    gap: 4,
  },
  viajeCell: {
    fontSize: 7,
    flexBasis: '30%',
  },
  viajeRowEven: {
    backgroundColor: '#f5f5f5',
  },
  viajeRowOdd: {
    backgroundColor: '#ffffff',
  },
  bold: {
    fontWeight: 'bold',
  },

  // Resumen
resumenWrapper: {
    width: '100%',
    marginTop: 12,
  },
  resumenTitleBox: {
    backgroundColor: 'black',
    padding: 4,
  },
  resumenTitle: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resumenRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#e4e4e4',
    color: 'black',
    paddingVertical: 4,
  },
  resumenCellHeader: {
    flex: 1,
    fontSize: 7,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resumenRow: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  resumenRowEven: {
    backgroundColor: '#ffffff',
  },
  resumenRowOdd: {
    backgroundColor: '#f9f9f9',
  },
  resumenCell: {
    flex: 1,
    fontSize: 8,
    textAlign: 'center',
  },
});
