import type { Item } from '@models/item'

let fakeItems: Item[] = []

export const itemService = {
  async getAll(): Promise<Item[]> {
    // Simula delay de rede
    await delay(500)
    return fakeItems
  },

  async create(item: Item): Promise<Item> {
    await delay(500)
    fakeItems.push(item)
    return item
  },

  async update(updatedItem: Item): Promise<Item> {
    await delay(500)
    fakeItems = fakeItems.map(item => item.id === updatedItem.id ? updatedItem : item)
    return updatedItem
  },

  async remove(id: number): Promise<void> {
    await delay(500)
    fakeItems = fakeItems.filter(item => item.id !== id)
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
