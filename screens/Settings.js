/*IMPORTS*/
import { View, Text, StyleSheet, TextInput, Switch, Pressable } from "react-native";
import { useUserStore } from "../stores/userStore";
import { useAuthStore } from '../stores/authStore';
//========================================================

/*COMPONENTE*/
export default function Settings() 
{
  /*DADOS*/
  //1)
  const setDarkMode = useUserStore((state) => state.setDarkMode);
  //----------------------------------//--------------------------------
  //2)v
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//--------------------------------
  //2)
  const logout = useAuthStore((state) => state.logout);
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  //========================================================
  
  return (
    <View 
     style=
     {
      [
       styles.settings,
       {
        backgroundColor: darkMode ? 
         "gray" 
          : 
         "#fff"
       }
      ]
     }
    >
      
      <View style={styles.switchContainer}>
        <Text>Modo escuro</Text>
        <Switch
         value={darkMode}
         onValueChange={setDarkMode}
       />
      </View>
      
      <View style={styles.divider} />

      <View style={styles.logoutContainer}>
        <Text>Sair</Text>
        <Pressable 
        style={styles.botao} 
        onPress={logout}
       >
       <Text 
        style={styles.textoBotao} 
       >
         Sair
       </Text>
      </Pressable>
      </View>
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  settings: {
    flex: 1,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
  },
  logoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
  },
  botao: {
    backgroundColor: 'yellow',
    marginVertical: 10,
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
    width: "fit-content",
  },
  textoBotao: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 15,
  },
});