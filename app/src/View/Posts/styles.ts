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
    gap: 16,
    justifyContent: "center",
  },
  headingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  postTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  postsWrapper: {
    gap: 16,
    paddingHorizontal: 16,
  },
  postContainer: {
    backgroundColor: "#F1F3F5",
    padding: 16,
    marginVertical: 12,
    borderRadius: 8,
  },
  postAuthor: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 12,
  },
  postTitle: {
    color: "#1c7b7b",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 18,
    marginBottom: 10,
  },
  postContent: {
    gap: 4,
  },
});
