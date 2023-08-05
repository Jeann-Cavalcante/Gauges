import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  containerCard: {
    marginTop: 20,
    RowGap: 20,
  },
  appointmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#EFEFEF",
  },
  appointment: {
    flexDirection: "column",
    width: "80%",
  },
  badges: {
    flexDirection: "row",
    columnGap: 10,
  },
  badgesTitle: {
    color: "#FFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
  title: {
    marginTop: 8,
    
  },
  iconContainer: {
    flexDirection: "row",
    gap: 8,
  },
  icons: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
});