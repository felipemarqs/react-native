import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet, Text, View} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <Text
        selectable
        style={{marginTop: 30, fontSize: 32}}
        selectionColor="#1c7b7b"
      >
        "Hello React Native!".
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text
          selectable
          style={{marginTop: 30, fontSize: 32, width: 1000}}
          selectionColor="#1c7b7b"
        >
          "Hello React Native!".
        </Text>
      </ScrollView>
    </ScrollView>
  );
}
