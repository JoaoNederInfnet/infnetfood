/*IMPORTS*/
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { restaurantsMock } from "../data/restaurantsMock";
//========================================================

/*COMPONENTE*/
export default function Map() 
{
  /*DADOS*/
  const navigation = useNavigation();
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  function handleOpenRestaurant(id)
  {
    navigation.navigate("RestaurantDetails", {
      restaurantId: id,
    });
  }
  //========================================================
  
  return (
    <View style={styles.mapContainer}>
      <ImageBackground
        source={{
          uri: "https://www.google.com/maps/vt/data=8xbyC5ez7Cu0ZmqYRyZOnQ3Z9oFbrHeFZ0IJUqGJhqqWN93Uy5nBb6B9uf23kevQ6B50YGNd4KTWyaGac-vbrELYbHHtrcLbn1UGB7dQsu6khB1RvbhDCBqtNHOs1o9cQ2HWXlWeF0Qjai94iwpvvOV-uHKzK2O8yWNeZ40v83InMNkLBpsiNE9P15_boEBxUT_we_xzeSxUZRCB9dBGna9FIY-cfZCLdEc_2hC6XURmsNTOHkmsfQ-Myin9y7Sydk8Ydz2hBs_TffWXdAGerY0pckk" 
        }}
        style={styles.map}
        resizeMode="cover"
      >
        {restaurantsMock.map((r) => (
          <Pressable
            key={r.id}
            style={[
              styles.marker,
              { top: r.top, left: r.left }
            ]}
            onPress={() => handleOpenRestaurant(r.id)}
          >
            <Text style={styles.markerText}>📍</Text>
          </Pressable>
        ))}
      </ImageBackground>
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    position: "absolute",
    transform: [{ translateX: -15 }, { translateY: -15 }],
    backgroundColor: "red",
    borderRadius: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: "yellow",
  },
  markerText: {
    fontSize: 18,
  },
});