/*IMPORTS*/
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useCartStore } from "../stores/cartStore";
import { useOrdersStore } from "../stores/ordersStore";
import { useUserStore } from "../stores/userStore";
import { useNavigation } from "@react-navigation/native";
import { buscarCep } from "../services/cepService";
import * as Notifications from "expo-notifications";
//========================================================

/*COMPONENTE*/
export default function Checkout() 
{
  /*DADOS*/
  //1)
  const [endereco, setEndereco] = useState('');
  //----------------------------------//--------------------------------
  //2)
  const [cartao, setCartao] = useState('');
  //----------------------------------//--------------------------------
  //3)
  const [cep, setCep] = useState('');
  //----------------------------------//--------------------------------
  //4)
  const [loadingCep, setLoadingCep] = useState(false);
  //----------------------------------//--------------------------------
  //5)
  const [erroCep, setErroCep] = useState("");
  //----------------------------------//--------------------------------
  //6)
  const [pressed, setPressed] = useState(false);
  //----------------------------------//--------------------------------
  //7)
  const items = useCartStore((state) => state.items);
  //----------------------------------//--------------------------------
  //8)
  const clearCart = useCartStore((state) => state.clearCart);
  //----------------------------------//--------------------------------
  //9)
  const addOrder = useOrdersStore((state) => state.addOrder);
  //----------------------------------//--------------------------------
  //10)
  const darkMode = useUserStore((state) => state.darkMode);
  //----------------------------------//--------------------------------
  //11)
  const navigation = useNavigation();
  //----------------------------------//--------------------------------
  //12)
  const total = items.reduce(
    (t, item) => t + item.preco * item.quantidade,
    0
  );

  //========================================================
  
  /*EFFECTS*/
  //1)
  useEffect(() => 
  {
    async function pedirPermissao() 
    {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status !== "granted") 
      {
        alert("Permissão de notificação negada!");
      }
    }

    pedirPermissao();
  }, []);
  //========================================================
  
  /*MÉTODOS*/
  //1)
  function finalizarPedido() 
  {
    if (!endereco.trim() || !cartao.trim()) 
    {
      alert("Preencha todos os campos!");
      return;
    }

    const novoPedido = 
    {
      id: Date.now().toString(),
      items,
      endereco,
      data: new Date().toLocaleString(),
    };

    addOrder(novoPedido);
    clearCart();

    enviarNotificacao();

    // limpar campos após pedido
    setEndereco("");
    setCartao("");
    setCep("");

    navigation.navigate("Orders");
  }
  //----------------------------------//-------------------------------- 
  //2)
  async function handleBuscarCep() 
  {
    try 
    {
      const cepLimpo = cep.replace(/\D/g, "");

      if (cepLimpo.length !== 8)
      {
        setErroCep("CEP deve ter 8 números");
        return;
      }

      setLoadingCep(true);
      setErroCep("");

      const data = await buscarCep(cepLimpo);

      if (!data || data.erro) 
      {
        throw new Error();
      }

      setEndereco(`${data.logradouro}, ${data.localidade}`);
    } 
    catch 
    {
      setErroCep("CEP inválido!");
    } 
    finally 
    {
      setLoadingCep(false);
    }
  }
  //----------------------------------//-------------------------------- 
  //3)
  async function enviarNotificacao()
  {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Pedido confirmado!",
        body: "Seu pedido está sendo preparado!",
      },
      trigger: null,
    });
  }
  //========================================================
  
  return (
    <View 
      style={[
        styles.checkout,
        { backgroundColor: darkMode ? "gray" : "#fff" }
      ]}
    >
      <View style={styles.checkoutBox}>

        <Text style={styles.textoBox}>
          Revisão do Pedido
        </Text>

        {items.map(item => (
          <Text key={item.id} style={styles.texto}>
            {item.nome} x{item.quantidade}
          </Text>
        ))}

        <Text style={styles.total}>
          Total: R$ {total.toFixed(2)}
        </Text>

        <TextInput
          placeholder="CEP (somente números)"
          style={styles.input}
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />

        {erroCep ? (
          <Text style={styles.erro}>{erroCep}</Text>
        ) : null}

        <Pressable 
          style={styles.botao} 
          onPress={handleBuscarCep}
          disabled={loadingCep}
        >
          <Text style={styles.textoBotao}>
            {loadingCep ? "Buscando..." : "Buscar CEP"}
          </Text>
        </Pressable>

        <TextInput
          placeholder="Endereço"
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
        />

        <TextInput
          placeholder="Cartão"
          style={styles.input}
          value={cartao}
          onChangeText={setCartao}
        />

      </View>

      <Pressable 
        style={[
          styles.botaoConfirmar,
          { opacity: pressed ? 0.7 : 1 }
        ]}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={finalizarPedido}
      >
        <Text style={styles.textoBotao}>Confirmar Pedido</Text>
      </Pressable>

    </View>
  );
}

//========================================================

/*ESTILOS*/
const styles = StyleSheet.create({
  checkout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  checkoutBox: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#E8570E",
    padding: 20,
    width: 280,
    borderWidth: 2,
    borderColor: "yellow",
  },

  textoBox: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  texto: {
    color: "#fff",
    marginTop: 3,
  },

  total: {
    color: "yellow",
    fontWeight: "bold",
    marginTop: 10,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
  },

  erro: {
    color: "red",
    marginTop: 5,
  },

  botao: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },

  botaoConfirmar: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 12,
    marginTop: 15,
    width: 280,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});