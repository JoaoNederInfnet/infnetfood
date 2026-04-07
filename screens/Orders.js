/*IMPORTS*/
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useOrdersStore } from "../stores/ordersStore";
import { useUserStore } from "../stores/userStore";
//========================================================

/*COMPONENTE*/
export default function Orders() 
{
  /*DADOS*/
  const orders = useOrdersStore((state) => state.orders);
  //----------------------------------//-------------------------------- 
  const darkMode = useUserStore((state) => state.darkMode);
  //========================================================
  
  /*MÉTODOS*/
  function renderItem({ item }) 
  {
    return (
      <View style={styles.card}>
        <Text style={styles.id}>Pedido #{item.id}</Text>
        <Text style={styles.texto}>{item.data}</Text>
        <Text style={styles.texto}>
          Itens: {item.items.length}
        </Text>
        <Text style={styles.texto}>
          Endereço: {item.endereco}
        </Text>
      </View>
    );
  }
  //========================================================
  
  return (
    <View 
      style=
      {
        [
          styles.orders,
          {
            backgroundColor: darkMode ? "gray" : "white"
          }
        ]
      }
    >
        {orders.length === 0 ? 
        ( 
          <View style={styles.box}>
           <Text style={styles.vazio}>
            Você ainda não fez nenhum pedido
           </Text>
          </View> 
        ) 
        : 
        (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.lista}
          />
        )}
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  orders: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "yellow",
    width: 320,
    maxHeight: "80%",
  },

  lista: {
    paddingBottom: 10,
  },

  card: {
    backgroundColor: "#E8570E",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "yellow",
  },

  id: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },

  texto: {
    color: "white",
    fontSize: 17,
  },

  vazio: {
    color: "white",
    textAlign: "center",
  },
});