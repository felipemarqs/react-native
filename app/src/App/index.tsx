import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { Button as CustomButton } from "../Button/index.android";

const disabled = false;

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Text
          selectable
          style={{ marginTop: 30, fontSize: 32 }}
          selectionColor="#1c7b7b"
        >
          "Hello React Native!".
        </Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="My Button"
            color="#000"
            onPress={() => alert("Clicou")}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          disabled={disabled}
          style={[styles.button, disabled && styles.buttonDisabled]}
          onPress={() => console.log("Clicou TouchableOpacity")}
          onPressIn={() => console.log("Clicou On Press In")}
          onPressOut={() => console.log("Clicou On Press Out")}
        >
          <Text style={styles.buttonLabel}>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableHighlight
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => alert("Clicou TouchableHighlight")}
          underlayColor="#f00"
        >
          <Text style={styles.buttonLabel}>TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback
          style={styles.button}
          onPress={() => alert("Clicou TouchableHighlight")}
        >
          <Text style={styles.buttonLabel}>TouchableHighlight</Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}
