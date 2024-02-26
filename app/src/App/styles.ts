import { Platform, StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#1c7b7b",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    padding: 20,
    flex: 1,
  },
  buttonsContainer: {
    gap: 16,
    margin: 3,
  },
  button: {
    backgroundColor: "#222",
    alignContent: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
