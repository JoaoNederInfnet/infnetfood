/*IMPORTS*/
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { productsMock } from "../data/productsMock";
import { useUserStore } from "../stores/userStore";
import { useCartStore } from "../stores/cartStore";
import { useNavigation } from "@react-navigation/native";
//========================================================

/*COMPONENTES USADOS*/
//========================================================

/*COMPONENTE*/
export default function ProductDetails() 
{
  /*DADOS*/
  //1)
  const route = useRoute();
  //----------------------------------//--------------------------------
  //2)
  const { productId } = route.params;
  //----------------------------------//--------------------------------
  //3) 
  const product = productsMock.find((p) => p.id === productId);
  //----------------------------------//--------------------------------
  //4) 
  const [quantidade, setQuantidade] = useState(1);
  //----------------------------------//--------------------------------
  //5)
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//--------------------------------
  //6)
  const addToCart = useCartStore((state) => state.addToCart);
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  //1)
  function aumentar() 
  {
    setQuantidade((q) => q + 1);
  }
  //----------------------------------//--------------------------------
  //2)
  function diminuir() 
  {
    setQuantidade((q) => (q > 1 ? q - 1 : 1));
  }
  //----------------------------------//--------------------------------
  //3)
  function adicionarAoCarrinho() 
  {
    addToCart(product, quantidade);
    
    alert("Produto adicionado ao carrinho!");
    
    navigation.navigate("Cart");
  }
  //----------------------------------//--------------------------------
  //4)
  const navigation = useNavigation();
  //========================================================
  
  return (
    <View 
     style=
     {
      [
       styles.productDetails,
       {
        backgroundColor: darkMode ? 
         "gray" 
          : 
         "#fff"
       }
      ]
     }
    >
      <Image 
        source={{ uri: product.imagem }} 
        style={styles.img} 
      />

      <Text 
        style={styles.nome}
      >
       {product.nome}
      </Text>

      <Text 
        style={styles.preco}
      >
        R$ {product.preco}
      </Text>

      <Text 
        style={styles.descricao}
      >
       {product.descricao}
      </Text>

      <View 
        style={styles.quantidadeContainer}
      >
        <Pressable 
          style={styles.botaoQtd}
          onPress={diminuir}
        >
          <Text style={styles.textoQtd}>
           -
          </Text>
        </Pressable>

        <Text style={styles.quantidade}>
         {quantidade}
        </Text>

        <Pressable 
          style={styles.botaoQtd}
          onPress={aumentar}
        >
          <Text style={styles.textoQtd}>
           +
          </Text>
        </Pressable>
      </View>

      <Pressable 
        style={styles.botao} 
        onPress={adicionarAoCarrinho}
      >
        <Text style={styles.textoBotao}>
          Adicionar ao carrinho
        </Text>
      </Pressable>
    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  productDetails: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 270,
    height: 200,
    borderRadius: 20,
    marginBottom: 15,
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
  },
  preco: {
    fontSize: 18,
    marginVertical: 5,
    color: "green",
  },
  descricao: {
    textAlign: "center",
    marginVertical: 10,
  },
  quantidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  botaoQtd: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  textoQtd: {
    color: "#fff",
    fontSize: 18,
  },
  quantidade: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "yellow",
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "red",
  },
  textoBotao: {
    color: "red",
    fontWeight: "bold",
  },
});