/*IMPORTS*/
import { createStackNavigator } from '@react-navigation/stack';

/*COMPONENTES USADOS*/
import Map from '../screens/Map';
import RestaurantDetails from '../screens/RestaurantDetails';
//========================================================


const Stack = createStackNavigator();

/*STACK*/
export default function MapStack() {
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
        name="Map"
        component={Map}
        options={{ title: 'Mapa' }}
      />

      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{ title: 'Finalizar Pedido' }}
      />
    </Stack.Navigator>
  );
}