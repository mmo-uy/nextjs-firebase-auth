export interface Items {
  [key: string]: any;
  name: string;
  quantity: string;
  price: string;
  amount: string;
}
export interface Item {
  name: string;
  id: string;
  number_of_products: number;
}
export interface User {
  email: string | null;
  uid: string | null;
}
export interface Product {
  id: string;
  category: string;
  price: number;
  quantity: string;
  name: string;
}
export interface ProductItem {
  price: number;
  amount: string;
  quantity: string;
  name: string;
}
export interface Sales {
  customerEmail: string;
  customerName: string;
  id: string;
  totalAmount: number;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  products: ProductItem[];
}
