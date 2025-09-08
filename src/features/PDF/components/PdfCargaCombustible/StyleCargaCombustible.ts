import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  //encabezado
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


  // informacion general de todo
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    // border: "1px solid #E0E0E0",
    padding: 10,
    width: "48%",
  },
  fullCard: {
    // border: "1px solid #E0E0E0",
    padding: 10,
  },
  title: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    color: "#fff",
    backgroundColor: "#031D40", // azul
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  label: {
    fontFamily: "Helvetica-Bold",
    color: "black",
  },
  value: {
    marginBottom: 4,
  },
  tableHeader: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    borderBottom: "1px solid #E0E0E0",
    paddingVertical: 4,
    fontFamily: "Helvetica-Bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #E0E0E0",
    paddingVertical: 4,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  total: {
    textAlign: "right",
    paddingRight: 28,
    fontFamily: "Helvetica-Bold",
    marginTop: 6,
  },
});
