import {Image, SafeAreaView, Switch, Text, TextInput, View} from "react-native";
import {styles} from "./styles";

import {useEffect, useRef, useState} from "react";
import {TextArea} from "../../components/TextArea";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {useNavigate} from "react-router-native";

export default function Posts() {
  const InputPasswordRef = useRef<TextInput | null>(null);

  useEffect(() => {
    // Check if InputPasswordRef.current is not null before accessing its properties
    if (InputPasswordRef.current !== null) {
      // TypeScript knows that ref is not null here
      InputPasswordRef.current.focus();
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSwitchSelected, setIsSwitchSelected] = useState(false);

  const handleSubmit = () => {
    console.log("📧 %c" + email, "color: #007bff; font-weight: bold;");
    console.log("🔒 %c" + password, "color: #28a745; font-weight: bold;");
    alert(`
    🔒📧 Email & Senha Capturados 📧🔑
    
    🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
      Email: ${email}
      Senha: ${password}
    🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸
    `);
  };

  const navigate = useNavigate();

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={{color: "#fff", fontWeight: "bold", fontSize: 24}}>
        Posts
      </Text>

      <Button onPress={() => navigate("/")}>Voltar</Button>
    </SafeAreaView>
  );
}
