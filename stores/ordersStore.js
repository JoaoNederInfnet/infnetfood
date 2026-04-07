/*IMPORTS*/
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
//========================================================

/*STORE*/
export const useOrdersStore = create(
  persist(
    (set) => (
    {
      orders: [],

      addOrder: (order) =>
        set((state) => (
        {
          orders: [...state.orders, order],
        })),
    }),
    {
      name: 'orders-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);