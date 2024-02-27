import {Image, SafeAreaView, Switch, Text, TextInput, View} from "react-native";
import {styles} from "./styles";

import {useRef, useState} from "react";
import {TextArea} from "../../components/TextArea";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {useNavigate} from "react-router-native";

export default function Login() {
  const InputPasswordRef = useRef<TextInput | null>(null);

  const navigate = useNavigate();

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

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={{width: "100%", marginBottom: 60}}>
          <Image
            source={require("../../../assets/logo.png")}
            style={{width: "100%", height: 70}}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Text style={{color: "#fff"}}>
            {!isSwitchSelected ? "Login Switch:" : "Desativar Switch"}{" "}
          </Text>
          <Switch
            value={isSwitchSelected}
            //onChange={(event) => setIsSwitchSelected(event.nativeEvent.value)}
            onValueChange={setIsSwitchSelected}
            thumbColor="#81c460"
            ios_backgroundColor="#e6f3df"
            trackColor={{true: "#e6f3df", false: "#e6f3df"}}
          />
        </View>

        <TextArea placeholder="Anotações" />
        <Input
          placeholder="E-mail"
          //onBlur={() => console.log("saiu")}
          //onFocus={() => console.log("entrou")}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          onSubmitEditing={() => InputPasswordRef.current!.focus()}
          returnKeyType="next"
          value={email}
          // onChange={(event) => setEmail(event.nativeEvent.text)}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Senha"
          //onBlur={() => console.log("saiu")}
          // onFocus={() => console.log("entrou")}
          keyboardType="number-pad"
          secureTextEntry
          ref={InputPasswordRef}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={() => handleSubmit()}
        />

        <Button onPress={() => navigate("/posts")}>Login</Button>
      </View>
    </SafeAreaView>
  );
}
