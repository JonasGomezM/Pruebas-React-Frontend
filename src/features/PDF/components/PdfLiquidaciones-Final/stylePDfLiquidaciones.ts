import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 9,
    fontFamily: "Helvetica",
  },
  headerContainer: {
    marginBottom: 15,
    paddingBottom: 10,
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

  // Fila 2
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  infoRow: {
    width: "55%",
  },
  rightBox: {
    width: "40%",
    textAlign: "right",
  },
  detailBold: {
    fontSize: 9,
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: 9,
    marginBottom: 2,
  },

  // conceptos de la liquidación
  conceptosWrapper: {
    width: "100%",
  },
  conceptosTitleBox: {
    backgroundColor: "#002248",
    padding: 4,
  },
  conceptosTitle: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  conceptosRowHeader: {
    flexDirection: "row",
    backgroundColor: "#e4e4e4",
    paddingVertical: 4,
  },
  conceptosCellHeader: {
    flex: 1,
    fontSize: 7,
    fontWeight: "bold",
    textAlign: "center",
  },
  conceptosRow: {
    flexDirection: "row",
    paddingVertical: 3,
  },
  conceptosRowEven: {
    backgroundColor: "#ffffff",
  },
  conceptosRowOdd: {
    backgroundColor: "#f9f9f9",
  },
  conceptosCell: {
    flex: 1,
    fontSize: 7,
    textAlign: "center",
  },

  //viajes asociados
  viajesWrapper: {
    width: "100%",
    marginTop: 12,
  },
  viajesTitleBox: {
    backgroundColor: "#002248",
    padding: 4,
  },
  viajesTitle: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  viajeItem: {
    marginBottom: 6,
  },
  viajeHeader: {
    backgroundColor: "#e4e4e4",
    padding: 4,
    fontWeight: "bold",
  },
  viajeHeaderText: {
    fontSize: 8,
    fontWeight: "bold",
  },
  viajeGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    padding: 8,
    paddingBottom: "none",
  },
  viajeColumn: {
    flexDirection: "column",
    flex: 1,
    gap: 4,
  },

  viajeCell: {
    fontSize: 8,
    color: "#2c2c2cff",
  },

  bold: {
    fontWeight: "bold",
  },

  // Resumen
  resumenWrapper: {
    width: "100%",
    marginTop: 7,
  },
  resumenTitleBox: {
    backgroundColor: "#002248",
    padding: 4,
  },
  resumenTitle: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  resumenRowHeader: {
    flexDirection: "row",
    backgroundColor: "#e4e4e4",
    color: "black",
    paddingVertical: 4,
  },
  resumenCellHeader: {
    flex: 1,
    fontSize: 7,
    fontWeight: "bold",
    textAlign: "center",
  },
  resumenRow: {
    flexDirection: "row",
    paddingVertical: 4,
  },
  resumenRowEven: {
    backgroundColor: "#ffffff",
  },
  resumenRowOdd: {
    backgroundColor: "#f9f9f9",
  },
  resumenCell: {
    flex: 1,
    fontSize: 8,
    textAlign: "center",
  },
});
