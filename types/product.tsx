export interface ProductType {
  id: string
  name: string
  price: number
  currency: string
  description: string
  features: string
  items: ProductItems[]
}

export interface ProductItems {
  quantity: number
  name: string
}
