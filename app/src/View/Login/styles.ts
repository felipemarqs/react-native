import {Platform, StyleSheet, StatusBar} from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#1c7b7b",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    padding: 20,
    flex: 1,
    gap: 16,
    justifyContent: "center",
  },
});
