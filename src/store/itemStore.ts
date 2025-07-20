import { create } from 'zustand';
import type { Item } from 'src/models/item';
import { itemService } from '@services/itemService'


type ItemStore = {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  deleteItem: (id: number) => void;
  getItemById: (id: number) => Item | undefined;
};

export const useItemStore = create<ItemStore>((set, get) => ({
  items: [],

  fetchItems: async () => {
    const data = await itemService.getAll()
    set({ items: data })
  },

  addItem: async (item) => {
    const newItem = await itemService.create(item)
    set((state) => ({ items: [...state.items, newItem], }));
  },

  updateItem: async (updatedItem) => {
    const updated = await itemService.update(updatedItem)
    set((state) => ({
      items: state.items.map((item) => item.id === updated.id ? updated : item
      ),
    }));
  },

  deleteItem: async (id) => {
    await itemService.remove(id)
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  getItemById: (id) => {
    return get().items.find((item) => item.id === id);
  },
}));
