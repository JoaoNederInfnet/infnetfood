/*IMPORTS*/
import { View, Text, StyleSheet, FlatList, Pressable, Image } from "react-native";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";
import { useNavigation } from "@react-navigation/native";
//========================================================

/*COMPONENTES USADOS*/
//========================================================

/*COMPONENTE*/
export default function Cart() 
{
  /*DADOS*/
  //1)
  const items = useCartStore((state) => state.items);
  //----------------------------------//--------------------------------
  //2)
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  //----------------------------------//--------------------------------
  //3)
  const clearCart = useCartStore((state) => state.clearCart);
  //----------------------------------//--------------------------------
  //4)
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//--------------------------------
  //5)
  const navigation = useNavigation();
  //----------------------------------//--------------------------------
  //6)
  const total = items.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  //1)
  function renderItem({ item }) 
  {
    return (
      <View style={styles.card}>
        <Image 
          source={{ uri: item.imagem }} 
          style={styles.img} 
        />

        <Text style={styles.nome}>{item.nome}</Text>

        <Text>Quantidade: {item.quantidade}</Text>

        <Text>Preço: R$ {item.preco}</Text>

        <Pressable 
          style={styles.botaoRemover}
          onPress={() => removeFromCart(item.id)}
        >
          <Text style={styles.textoBotao}>Remover</Text>
        </Pressable>
      </View>
    );
  }
  //========================================================
  
  return (
    <View 
      style={[
        styles.cart,
        { backgroundColor: darkMode ? "gray" : "#fff" }
      ]}
    >
      {items.length === 0 ? 
      (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>
            Seu carrinho está vazio
          </Text>
        </View>
      ) 
      : 
      (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.lista}
          />

          <Text style={styles.total}>
            Total: R$ {total.toFixed(2)}
          </Text>

          <Pressable 
            style={styles.botaoLimpar}
            onPress={clearCart}
          >
            <Text style={styles.textoBotao}>Limpar Carrinho</Text>
          </Pressable>

          <Pressable 
            style={styles.botaoCheckout}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text style={styles.textoBotao}>Finalizar Pedido</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  cart: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  lista: {
    paddingBottom: 20,
    width: "100%",
  },

  card: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#E8570E",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "yellow",
    minWidth: 310,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },

  img: {
    width: "100%",
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },

  botaoRemover: {
    width: "100%",
    backgroundColor: "red",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "yellow",
  },

  botaoLimpar: {
    width: "100%",
    backgroundColor: "yellow",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
  },

  botaoCheckout: {
    width: "100%",
    backgroundColor: "green",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue",
  },

  textoBotao: {
    color: "black",
    fontWeight: "bold",
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  emptyBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "yellow",
    width: 320,
  },

  emptyText: {
    fontSize: 16,
  },
});