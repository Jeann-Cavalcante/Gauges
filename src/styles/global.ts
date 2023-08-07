import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004589",
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
});