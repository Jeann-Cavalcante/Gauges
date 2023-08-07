import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    marginBottom: 10,
  },
  containerGauges: {
    position: "relative",
    width: "100%",
    borderRadius: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    height: 200,
  },
  contentGauges: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
  containerPie: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    height: 200,
  },
  pies: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerLegend: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  legend: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  legendText: {
    fontSize: 10,
  },
});