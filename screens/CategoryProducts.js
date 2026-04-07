/*IMPORTS*/
import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { productsMock } from "../data/productsMock";
import { useUserStore } from "../stores/userStore";
import { useNavigation } from "@react-navigation/native";
//========================================================

/*COMPONENTES USADOS*/
//========================================================

/*COMPONENTE*/
export default function CategoryProducts() 
{
  /*DADOS*/
  //1)
  const route = useRoute();
  //----------------------------------//--------------------------------
  //2) 
  const { categoryId, categoryName } = route.params;
  //----------------------------------//--------------------------------
  //3)
  const filteredProducts = productsMock.filter((p) => 
   p.categoryId === categoryId
  );
  //----------------------------------//--------------------------------
  //4)
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//--------------------------------
  //5)
  const navigation = useNavigation();
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  function renderItem({ item }) {
    return (
      <Pressable 
       style={styles.card}
       onPress={() =>
        navigation.navigate("ProductDetails", 
        {
         productId: item.id,
        }
       )
      }
      >
        <Image source={{ uri: item.imagem }} style={styles.img} />

        <Text style={styles.nome}>{item.nome}</Text>
        <Text>R$ {item.preco} </Text>
      </Pressable>
    );
  }
  //========================================================
  
  return (
    <View 
     style=
     {
      [
       styles.categoryProducts,
       {
        backgroundColor: darkMode ? 
         "gray" 
          : 
         "#fff"
       }
      ]
     }
    >
      <Text style={styles.titulo}>{categoryName}</Text>

      <FlatList
        data={filteredProducts}
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
  categoryProducts: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
    textAlign: "center"
  },
  lista: {
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#E8570E",
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "yellow",
    alignItems: "center",
    padding: 15,
    width: 310,
  },
  img: {
    width: 200,
    height: 120,
    borderRadius: 20,
    
  },
  nome: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
});