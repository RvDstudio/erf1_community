import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  status: 'Available' | 'Out Of Stock';
  date: string;
}

interface WishlistState {
  items: WishlistItem[];
  add: (item: WishlistItem) => void;
  remove: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item: WishlistItem) => {
        if (!get().items.find((i: WishlistItem) => i.id === item.id)) {
          set(
            (state: WishlistState) =>
              ({ items: [...state.items, item] }) as Partial<WishlistState>
          );
        }
      },
      remove: (id: string) => {
        set(
          (state: WishlistState) =>
            ({
              items: state.items.filter((i: WishlistItem) => i.id !== id),
            }) as Partial<WishlistState>
        );
      },
      isInWishlist: (id: string) => {
        return !!get().items.find((i: WishlistItem) => i.id === id);
      },
      clear: () => set(() => ({ items: [] }) as Partial<WishlistState>),
    }),
    {
      name: 'wishlist-storage', // key in localStorage
    }
  )
);
