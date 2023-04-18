import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { ProductsMock } from "../../util/Data";

export interface ProductProps {
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
  quantity?: number | null;
}

type ProductContextData = {
  dataContext: ProductProps[];
  allProductsContext: ProductProps[];
  recordContext: ProductProps[];
  updateDataContext(value: ProductProps[]): void;
  searchProductContext(value: ProductProps[]): void;
  recordsPagination(value: ProductProps[]): void;
}

type ProductProviderProps = {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider({ children }: ProductProviderProps) {
  const [dataContext, setDataContext] = useState<ProductProps[]>([]);
  const [allProductsContext, setAllProductsContext] = useState<ProductProps[]>([]);
  const [recordContext, setRecordContext] = useState<ProductProps[]>([]);


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

  function recordsPagination(value: ProductProps[]) {
    setRecordContext(value)
  }


  return (
    <ProductContext.Provider value={{ dataContext, allProductsContext, updateDataContext, searchProductContext, recordContext, recordsPagination }}>
      {children}
    </ProductContext.Provider>
  )
}