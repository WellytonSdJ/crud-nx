import type { Item } from 'src/models/item';
import { create } from 'zustand';

type ItemStore = {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  deleteItem: (id: number) => void;
  getItemById: (id: number) => Item | undefined;
};

export const useItemStore = create<ItemStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    set((state) => ({
      items: [...state.items, item],
    }));
  },

  updateItem: (updatedItem) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    }));
  },

  deleteItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  getItemById: (id) => {
    return get().items.find((item) => item.id === id);
  },
}));
