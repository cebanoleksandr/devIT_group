export interface Product {
  id: number;
  sku: string;
  title: string;
  quantity: number;
  categories: Category[];
}

export interface Category {
  id: number;
  slug: string;
  title: string;
  products: Product[];
}

export interface Warehouse {
  id: number;
  uuid: string;
  title: string;
  products: Product[];
}
