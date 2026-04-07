/*IMPORTS*/
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useUserStore } from "../stores/userStore";
import { useAuthStore } from '../stores/authStore';
//========================================================

/*COMPONENTE*/
export default function Profile() 
{
  /*DADOS*/
  //1)
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//-------------------------------- 
  //2)
  const user = useAuthStore((state) => state.user);
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
       styles.profile,
       {
        backgroundColor: darkMode ? 
         "gray" 
          : 
         "#fff"
       }
      ]
     }
    >
     <View style={styles.card}>
        
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>{user?.nome}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.value}>{user?.email}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Endereço</Text>
        <Text style={styles.value}>{user?.endereco}</Text>

      </View>
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: 10,
  },

  card: {
    width: "100%",
    borderRadius: 20,
    padding: 20,
  },

  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
  },

  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 15,
  },
});