/*IMPORTS*/
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
//========================================================

/*STORE*/
export const useAuthStore = create(
  persist(
    (set) => (
      {
       isAuthenticated: false,
       user: null,

      login: (email) =>
        set(() => (
        {
         isAuthenticated: true,
         user: 
         { 
           endereco: "Disney",
           nome: "Hanana Banana",
           email, 
         },
        }
      )),

      logout: () =>
        set(() => (
        {
         isAuthenticated: false,
         user: null,
        }
      )),
    }),
    {
      name: 'auth-storage',
      storage: {
        getItem: async (name) => 
        {
          const value = await AsyncStorage.getItem(name);
          return value ?? null;
        },

        setItem: async (name, value) => 
        {
         await AsyncStorage.setItem(name, value);
        },

        removeItem: async (name) => 
        {
         await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);