/*IMPORTS*/
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useUserStore } from "../stores/userStore";
import { useNavigation } from '@react-navigation/native';
//========================================================

/*COMPONENTE*/
export default function Home() 
{
  /*DADOS*/
  //1)
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//-------------------------------- 
  //2)
  const categories = 
  [
    { id: "1", nome: "Lanches" },
    { id: "2", nome: "Bebidas" },
    { id: "3", nome: "Sobremesas" },
    { id: "4", nome: "Pratos" },
    { id: "5", nome: "Vegetariano" },
  ];
  //----------------------------------//--------------------------------
  //3) 
  const navigation = useNavigation();
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  //1)
  function renderItem({ item }) 
  {
    return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate("CategoryProducts", 
        {
         categoryId: item.id,
         categoryName: item.nome,
        }
       )
      }
    >
      <Text style={styles.texto}>{item.nome}</Text>
    </Pressable>
   );
  }
  //========================================================
  
  return (
    <View 
      style=
     {
      [
       styles.home,
       {
        backgroundColor: darkMode ? 
         "gray" 
          : 
         "#fff"
       }
      ]
     }
    >
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center"
  },
  lista: {
    padding: 20,
    alignItems: "center", 
    justifyContent: "center",
    flexGrow: 1,  

  },
  card: {
    backgroundColor: "yellow",
    padding: 20,
    width: 200,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
    display: "flex",
    alignItems: "center", 
    justifyContent: "center"
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});