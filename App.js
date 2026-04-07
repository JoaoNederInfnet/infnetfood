/*IMPORTS*/
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as Notifications from "expo-notifications";
//========================================================

/*CONFIGURAÇÃO GLOBAL DE NOTIFICAÇÕES*/
//1)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
//========================================================

/*COMPONENTES USADOS*/
import AppNavigator from './navigation/AppNavigator';
//========================================================

/*COMPONENTE*/
export default function App() 
{
  /*DADOS*/
  //========================================================
  
  /*EFFECTS*/
  //========================================================
  
  /*MÉTODOS*/
  //========================================================
  
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}

//========================================================

