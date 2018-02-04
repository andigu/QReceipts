export type Item = { id: number, name: string, total: number, img: string, quantity: string, tag: string }

export type Receipt = {
  id: number,
  date: number,
  vendor: {
    name: string,
    id: number,
    img: string,
    location: {
      lat: number,
      lng: number
    }
  },
  items: Item[],
  subtotal: number,
  tax: number,
  tip?: number,
  total: number
}
