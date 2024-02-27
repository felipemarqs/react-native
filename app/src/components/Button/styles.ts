import {Platform, StyleSheet, StatusBar} from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#053e3f",
    alignContent: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 8,
  },
  buttonActive: {
    opacity: Platform.OS === "ios" ? 0.7 : 1,
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonLabelDisabled: {
    color: "#888",
  },
});
