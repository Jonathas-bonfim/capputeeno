import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { ProductsMock } from "../../util/Data";

interface ProductProps {
  name: string;
  description: string;
  image_url: string;
  category: string;
  id: string;
  price_in_cents: number;
  sales: number;
  created_at: string;
  priceFormatted?: string;
  formatDate: number;
}

type AuthContextData = {
  dataContext: ProductProps[];
  allProductsContext: ProductProps[];
  updateDataContext(value: ProductProps[]): void;
  searchProductContext(value: ProductProps[]): void;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [dataContext, setDataContext] = useState<ProductProps[]>([]);
  const [allProductsContext, setAllProductsContext] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function LoadAllProducts() {
      try {
        const response = await api.get<ProductProps[]>(`products`)

        const dataAPI = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price_in_cents / 100),
          formatDate: Number(new Date(product.created_at))
        }))

        setAllProductsContext(dataAPI)
        setDataContext(dataAPI)
      } catch (e) {
        const dataAPI = ProductsMock.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price_in_cents / 100),
          formatDate: Number(new Date(product.created_at))
        }))
        setAllProductsContext(dataAPI)
        setDataContext(dataAPI)
      }
    }
    LoadAllProducts()
  }, [])

  function updateDataContext(value: ProductProps[]) {
    setDataContext(value)
  }

  function searchProductContext(value: ProductProps[]) {
    setDataContext(value)
  }


  return (
    <AuthContext.Provider value={{ dataContext, allProductsContext, updateDataContext, searchProductContext }}>
      {children}
    </AuthContext.Provider>
  )
}