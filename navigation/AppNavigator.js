/*IMPORTS*/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from '../stores/authStore';
//========================================================

/*COMPONENTES USADOS*/
import HomeStack from './HomeStack';
import Login from '../screens/Login';
import Settings from '../screens/Settings';
import CartStack from './CartStack';
import Profile from '../screens/Profile';
import MapStack from './MapStack';
import Orders from '../screens/Orders';
//========================================================

/*MAIN STACK*/
// •Instâncias
const Stack = createStackNavigator();
//----------------------------------//-------------------------------- 
const Tab = createBottomTabNavigator();
//•••••••••••••••••••••••••••••••••••••••••••••••••••••••••

const defaultStackOptions = 
{
  headerStyle: { backgroundColor: 'red' },
  headerTintColor: 'yellow',
  headerTitleStyle: { fontWeight: 'bold' },
  headerTitleAlign: 'center',
};

// •SubStacks
const createSimpleStack = (name, component, pageTitle) => () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen name={name} component={component} options={{ title: pageTitle }} />
  </Stack.Navigator>
);

//1)
const SettingsStack = createSimpleStack("Settings", Settings, "Configurações");
//----------------------------------//-------------------------------- 
//2)
const ProfileStack = createSimpleStack("Profile", Profile, "Perfil");
//----------------------------------//-------------------------------- 
//3)
const OrdersStack = createSimpleStack("Orders", Orders, "Pedidos");
// •MainStack
function MainTabs() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'red' },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ title: 'Início', }}
      />
      
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{ title: 'Carrinho' }}
      />
      
      <Tab.Screen
        name="Orders"
        component={OrdersStack}
        options={{ title: 'Pedidos' }}
      />
      
      <Tab.Screen
        name="Map"
        component={MapStack}
        options={{ title: 'Mapa' }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ title: 'Perfil' }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{ title: 'Configurações' }}
      />
    </Tab.Navigator>
  );
}
//========================================================

/*COMPONENTE*/
export default function AppNavigator() 
{
  /*DADOS*/
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  //========================================================
  
  return (
   <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>

       {isAuthenticated ? 
         <Stack.Screen
          name="MainTabs"
          component={MainTabs}
        />
         : 
        <Stack.Screen
         name="Login"
         component={Login}
       />
      }
    </Stack.Navigator>
  </NavigationContainer> 
  );
}

//========================================================

