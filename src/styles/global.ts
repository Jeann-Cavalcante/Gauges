import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F4",
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
});