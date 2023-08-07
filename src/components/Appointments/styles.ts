import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 10,
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
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#EFEFEF",
    position: "relative",
  },
  image: {
    width: 22,
    height: 22,
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
  arrow: {
    position: "absolute",
    top: 12,
    left: -10,
  }
});