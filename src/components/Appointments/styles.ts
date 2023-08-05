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
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#EFEFEF",
    position: "relative",
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOffset: {
      width: 3,
      height: 3,

    },
    position: "absolute",
    top: -10,
    left: -10,
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
    fontSize: 12,
  },
  title: {
    marginTop: 8,
  },
  iconContainer: {
    position: "relative",
  },
  icons: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 25,
    textAlign: "center",
  },
  iconNotify: {
    position: "absolute",
    left: -15,
  },
});