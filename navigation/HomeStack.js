/*IMPORTS*/
import { createStackNavigator } from '@react-navigation/stack';

/*COMPONENTES USADOS*/
import Home from '../screens/Home';
import CategoryProducts from '../screens/CategoryProducts';
import ProductDetails from '../screens/ProductDetails'; 
//========================================================


const Stack = createStackNavigator();

/*STACK*/
export default function HomeStack() {
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
        name="Home"
        component={Home}
        options={{ title: 'Início' }}
      />

      <Stack.Screen
        name="CategoryProducts"
        component={CategoryProducts}
        options={{ title: 'Produtos' }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: 'Detalhes' }}
      />
    </Stack.Navigator>
  );
}