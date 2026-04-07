/*IMPORTS*/
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
//========================================================

/*STORE*/
export const useCartStore = create(
  persist(
    (set, get) => (
    {
      items: [],

      addToCart: (product, quantidade) =>
        set((state) => 
        {
          const existing = state.items.find(
            (item) => item.id === product.id
          );

          if (existing) 
          {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantidade: item.quantidade + quantidade }
                  : item
              ),
            };
          }

          return {
            items: [
              ...state.items,
              { ...product, quantidade },
            ],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => (
        {
          items: state.items.filter(
            (item) => item.id !== productId
          ),
        })),

      clearCart: () =>
        set(() => (
        {
          items: [],
        })),

      getTotal: () =>
      {
        const items = get().items;

        return items.reduce((total, item) =>
          total + item.preco * item.quantidade,
        0);
      },
    }),
    {
      name: 'cart-storage',

      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);