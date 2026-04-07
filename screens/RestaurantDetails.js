/*IMPORTS*/
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { restaurantsMock } from "../data/restaurantsMock";
import { useUserStore } from "../stores/userStore";
//========================================================

/*COMPONENTE*/
export default function RestaurantDetails() 
{
  /*DADOS*/
  //1)
  const route = useRoute();
  //----------------------------------//--------------------------------
  //2) 
  const restaurantId = route.params?.restaurantId;
  //----------------------------------//--------------------------------
  //3) 
  const restaurant = restaurantsMock.find(
    (r) => r.id === restaurantId
  );
  //----------------------------------//--------------------------------
  //4) 
  const darkMode = useUserStore((state) => state.darkMode);
  //========================================================
  
  if (!restaurant) 
  {
    return (
      <View style={styles.details}>
        <Text>Restaurante não encontrado</Text>
      </View>
    );
  }
  //========================================================
  
  return (
    <View 
      style={[
        styles.details,
        {
          backgroundColor: darkMode ? "gray" : "white"
        }
      ]}
    >
      <View style={styles.box}>

        <Image 
          source={{ uri: restaurant.imagem }} 
          style={styles.img} 
        />

        <Text style={styles.nome}>
          {restaurant.nome}
        </Text>

        <Text style={styles.texto}>
          {restaurant.endereco}
        </Text>

        <Text style={styles.texto}>
          {restaurant.descricao}
        </Text>

        {/* 🔥 CARDÁPIO */}
        <Text style={styles.tituloCardapio}>
          Cardápio:
        </Text>

        {restaurant.itemCardapio.map((item, index) => (
          <Text key={index} style={styles.itemCardapio}>
            • {item}
          </Text>
        ))}

      </View>
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  details: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    backgroundColor: "#E8570E",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "yellow",
    width: 320,
    alignItems: "center",
  },

  img: {
    width: 200,
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },

  nome: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "bold",
  },

  texto: {
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },

  tituloCardapio: {
    color: "yellow",
    marginTop: 10,
    fontWeight: "bold",
  },

  itemCardapio: {
    color: "white",
    marginTop: 3,
  },
});