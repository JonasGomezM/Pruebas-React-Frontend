import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 9,
    fontFamily: "Helvetica",
  },
  headerTable: {
    flexDirection: "row",
    border: "1pt solid black",
    width: "100%",
    // marginBottom: 8,
  },
  colLogo: {
    borderRight: "1pt solid black",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  logoImage: {
    width: 130,
  },
  colCenter: {
    flex: 1,
    borderRight: "1pt solid black",
  },
  colCenterHalf: {
    borderBottom: "1pt solid black",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },

  colCenterBottom: {
    borderBottom: "none", // para evitar doble línea abajo
  },
  centerText: {
    fontSize: 9,
    textAlign: "center",
  },

  colEnd: {
    width: 140,
    flexDirection: "column",
  },

  colEndTop: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4.55,
  },

  colEndBottom: {
    borderTop: "1pt solid black", // separación clara con el top
    padding: 0,
  },

  bottomItem: {
    borderBottom: "1pt solid black",
    paddingVertical: 2,
    paddingHorizontal: 4,
    width: "100%",
  },

  bottomItemLast: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    width: "100%",
  },

  rightText: {
    fontSize: 8,
  },
  rightTextBold: {
    fontSize: 8,
    fontWeight: "bold",
  },

  colEndArea: {
    border: "1pt solid black",
    borderTop: "none",
    flexDirection: "column",
    width: "100%",
    marginBottom: 8,
  },

  areaRow: {
    flexDirection: "row",
    width: "100%",
  },

  areaCellLeft: {
    flex: 1,
    borderRight: "1pt solid black",
    padding: 4,
  },

  areaCellRight: {
    flex: 2,
    padding: 4,
  },

  colEndAreaText: {
    fontSize: 9,
  },

  sectionTitle: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 4,
    fontWeight: "bold",
    fontSize: 9,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 2,
    textAlign: "center",
  },
  rowLast: {
    marginBottom: 20,
  },
  cell: {
    flex: 1,
    paddingHorizontal: 4,
  },
  cellBold: {
    flex: 1,
    paddingHorizontal: 20,
    fontWeight: "bold",
    backgroundColor: "#f2f2f2",
    paddingVertical: 4,
  },
  movimientoWrapper: {
    width: "100%",
    marginTop: 8,
  },
  movimientoTitleBox: {
    backgroundColor: "black",
    padding: 4,
  },
  movimientoTitle: {
    color: "white",
    fontSize: 9,
    textAlign: "center",
    fontWeight: "bold",
  },
  movimientoRowHeader: {
    flexDirection: "row",
  },
  movimientoHeaderCell: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    fontSize: 8,
    padding: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
  movimientoCellNumber: {
    fontWeight: "bold",
  },
  movimientoRow: {
    flexDirection: "row",
  },
  movimientoRowEven: {
    backgroundColor: "white",
  },
  movimientoRowOdd: {
    backgroundColor: "#f5f5f5",
  },
  movimientoCell: {
    flex: 1,
    fontSize: 8,
    padding: 4,
    textAlign: "center",
  },

  evidenciasWrapper: {
    width: "100%",
    marginTop: 16,
  },
  evidenciasTitleBox: {
    backgroundColor: "black",
    padding: 4,
  },
  evidenciasTitle: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  evidenciasContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 4,
  },
  evidenciasItem: {
    flex: 1,
    alignItems: "center",
  },
  evidenciasNumber: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 2,
  },
  evidenciasLabel: {
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  evidenciasImage: {
    width: 150,
    paddingTop: 10,
    objectFit: "cover",
  },
  evidenciasPage: {
    fontSize: 9,
    textAlign: "right",
    marginTop: 55,
    color: "#003366",
    fontWeight: "bold",
  },
});
