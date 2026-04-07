/*IMPORTS*/
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
//========================================================

/*STORE*/
export const useUserStore = create(
  persist(
    (set) => (
    {
      darkMode: false,

      setDarkMode: (value) =>
        set(() => (
        {
         darkMode: value,
        }
      )),
    }),
    {
      name: 'user-storage',
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