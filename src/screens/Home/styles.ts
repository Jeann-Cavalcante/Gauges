import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F3F3F4",
  },
  dp: {
    position: "relative",
    width: "100%",
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  containerGauges: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold"
  }
});