/*IMPORTS*/
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { useState } from "react";
import { useUserStore } from "../stores/userStore";
import { useAuthStore } from '../stores/authStore';
//========================================================

/*COMPONENTES USADOS*/
//========================================================

/*COMPONENTE*/
export default function Login() 
{
  /*DADOS*/
  //1)
  const [email, setEmail] = useState('');
  //----------------------------------//--------------------------------
  //2)
  const [password, setPassword] = useState('');
  //----------------------------------//--------------------------------
  //3)
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//--------------------------------
  //4)
  const login = useAuthStore((state) => state.login);
  //----------------------------------//--------------------------------
  const [pressed, setPressed] = useState(false);
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  //1)
  function handleLogin() 
  {
   if (!email || !password) 
   {
    alert("Preencha todos os campos!");
    return;
   }

   login(email);
  } 
  //========================================================
  
  return (
    <View 
     style=
     {
      [
       styles.login,
       {
        backgroundColor: darkMode ? 
         "gray" 
          : 
         "#fff"
       }
      ]
     }
    >
     <View style={styles.loginBox}>
      <Text 
        style={styles.textoBox} 
       >
         Login
       </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
     </View>

      <Pressable  
       style={[
       styles.botao,
       { backgroundColor: pressed ? "orange" : "yellow" }
       ]}
       onPressIn={() => setPressed(true)}
       onPressOut={() => setPressed(false)}
       onPress={handleLogin}
      >
       <Text style={styles.textoBotao}>
        Entrar
       </Text>
      </Pressable>
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "red",
    padding: 20,
    width: "fit-content",
    height: "fit-content",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "yellow",
  },
  textoBox: {
    color: "yellow",
    fontSize: 23,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    fontSize: 22,
    width: 200,
  },
  botao: {
    backgroundColor: 'yellow',
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
    width: "fit-content",
  },
  textoBotao: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});