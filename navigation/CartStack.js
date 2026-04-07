/*IMPORTS*/
import { createStackNavigator } from '@react-navigation/stack';

/*COMPONENTES USADOS*/
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
//========================================================


const Stack = createStackNavigator();

/*STACK*/
export default function CartStack() {
  return (
    <Stack.Navigator 
     screenOptions={{
     headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: 'yellow', 
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center', 
  }}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Carrinho' }}
      />

      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ title: 'Finalizar Pedido' }}
      />
    </Stack.Navigator>
  );
}