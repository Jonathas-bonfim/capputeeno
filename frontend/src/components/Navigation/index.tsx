import { MouseEvent } from "react";

import { NavLink } from "react-router-dom";
import { ArticleContainer, AsideContainer, ContainerCenter, NavigationContainer, ProductContainer } from "./styles";
import { useEffect, useState } from "react";
import { Product } from '../Product';
import { api } from '../../services/api';
import { formatPrice } from "../../util/format";

interface ProductProps {
  name: string;
  description: string;
  image_url: string;
  category: string;
  id: string;
  price_in_cents: number;
  sales: number;
  created_at: number;
  priceFormatted?: string;
}

export function Navigation() {
  const [data, setData] = useState<ProductProps[]>([]);
  const [filter, setFilter] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(true);

  useEffect(() => {
    // api.get<ProductProps[]>(`products`, {
    //   params: {
    //     category: `${filter}`
    //   }
    // }).then((response) => {
    //   setData(response.data);
    // });

    async function LoadProducts() {
      const response = await api.get<ProductProps[]>(`products`, {
        params: {
          category: `${filter}`
        }
      })
      const dataAPI = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price_in_cents / 100)
      }))
      console.log({ dataAPI })
      setData(dataAPI)
    }
    LoadProducts()
  }, [filter])

  function HandleDropdownOpen() {
    setDropdownOpen(!dropdownOpen)
  }

  function HandleFilterProducts(value: MouseEvent) {
    setFilter((value.target as HTMLButtonElement).value)
  }

  function HandleOrderProducts(value: any) {
    const currentValue = value.target.value
    if (currentValue == data) return

    if (currentValue == 'majorPrice') {
      const majorPrice = [...data].sort((a, b) => b.price_in_cents - a.price_in_cents);
      setData(majorPrice)
    }

    if (currentValue == 'minorPrice') {
      const minorPrice = [...data].sort((a, b) => a.price_in_cents - b.price_in_cents);
      setData(minorPrice)
    }

    if (currentValue == 'bestSellers') {
      const bestSellers = [...data].sort((a, b) => b.sales - a.sales);
      setData(bestSellers)
    }

    if (currentValue == 'news') {
      const news = [...data].sort((a, b) => a.created_at - b.created_at);
      setData(news)
    }

    console.log({ data })
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <NavigationContainer>
      <ContainerCenter>
        <AsideContainer>
          <button onClick={(value) => HandleFilterProducts(value)}>Todos os produtos</button>
          <button onClick={(value) => HandleFilterProducts(value)} value="t-shirts">Camisetas</button>
          <button onClick={(value) => HandleFilterProducts(value)} value="mugs">Canecas</button>
        </AsideContainer>
        <ArticleContainer>
          <main className={dropdownOpen ? "dropdown" : "dropdown dropdown--active"}>
            <button className={dropdownOpen ? "dropdown-toggle" : "dropdown-toggle dropdown-toggle--active"} onClick={HandleDropdownOpen}>Organizar por</button>
            <div className={dropdownOpen ? "dropdown-content" : "dropdown-content dropdown-content--active"}>
              <button onClick={(value) => HandleOrderProducts(value)} value="news" className="button-orderby">Novidades</button>
              <button onClick={(value) => HandleOrderProducts(value)} value="majorPrice" className="button-orderby">Preço: Maior - menor</button>
              <button onClick={(value) => HandleOrderProducts(value)} value="minorPrice" className="button-orderby">Preço: Menor - maior</button>
              <button onClick={(value) => HandleOrderProducts(value)} value="bestSellers" className="button-orderby">Mais vendidos</button>
            </div>
          </main>
        </ArticleContainer>
      </ContainerCenter>
      <ProductContainer>
        <div className="container-center">
          {
            data.map(data => (
              <Product key={data.id} id={data.id} name={data.name} image={data.image_url} price={data.priceFormatted} />
            ))
          }
        </div>
      </ProductContainer>
    </NavigationContainer>
  )
}