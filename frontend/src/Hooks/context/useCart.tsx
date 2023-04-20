import { createContext, ReactNode, useContext, useState } from 'react';
import { ProductProps, ProductContext } from './useProductContext';


interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: ProductProps[];
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
  FinalizeBuy(): void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const { allProductsContext } = useContext(ProductContext)
  const [cart, setCart] = useState<ProductProps[]>(() => {
    const storageCart = localStorage.getItem('@capputeeno:cart');

    if (storageCart) {
      return JSON.parse(storageCart);
    }
    return [];
  });

  function addProduct(productId: string) {
    try {
      const updatedCart = [...cart];
      const productExist = updatedCart.find(product => product.id === productId);

      if (productExist) {
        alert(`O produto ${productExist.name} já foi adicionado ao carrinho!`);
      } else {
        const product = allProductsContext.find(product => product.id === productId);
        if (product) {
          const newProduct = {
            id: product.id,
            name: product.name,
            description: product.description,
            image_url: product.image_url,
            category: product.category,
            price_in_cents: product.price_in_cents,
            sales: product.sales,
            created_at: product.created_at,
            formatDate: product.formatDate,
            quantity: 1
          }
          updatedCart.push(newProduct);
        }
      }
      setCart(updatedCart);
      localStorage.setItem('@capputeeno:cart', JSON.stringify(updatedCart));

    } catch {
      alert('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: string) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem('@capputeeno:cart', JSON.stringify(updatedCart));
        alert('Produto Removido com sucesso!');
      } else {
        throw Error();
      }
    } catch {
      alert('Erro na remoção do produto');
    }
  };

  function updateProductQuantity(productId: string, quantity: number) {
    try {
      if (quantity <= 0) {
        return;
      }
      const updatedCart = [...cart];
      const productExist = updatedCart.find(product => product.id === productId);

      if (productExist) {
        productExist.quantity = quantity;
        setCart(updatedCart);
        localStorage.setItem('@capputeeno:cart', JSON.stringify(updatedCart));
      } else {
        throw Error();
      }
    } catch (e) {
      alert('Erro na alteração de quantidade do produto');
    }
  };

  function FinalizeBuy() {
    setCart([]);
    localStorage.removeItem('@capputeeno:cart');
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, updateProductQuantity, FinalizeBuy }}>
      {children}
    </CartContext.Provider>
  )
}