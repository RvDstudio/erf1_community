import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  status: 'Available' | 'Out Of Stock';
  date: string;
}

interface CartState {
  items: CartItem[];
  add: (item: Omit<CartItem, 'quantity'>) => void;
  remove: (id: string) => void;
  clear: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  isInCart: (id: string) => boolean;
  getItemCount: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: 1 }],
          }));
        }
      },
      remove: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },
      clear: () => set(() => ({ items: [] })),
      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }));
      },
      isInCart: (id) => {
        return !!get().items.find((i) => i.id === id);
      },
      getItemCount: () => {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },
      getTotal: () => {
        return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
