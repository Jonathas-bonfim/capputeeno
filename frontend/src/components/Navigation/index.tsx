import { MouseEvent, useMemo } from "react";

import { ArticleContainer, AsideContainer, ContainerCenter, NavigationContainer, ProductContainer } from "./styles";
import { useEffect, useState } from "react";
import { Product } from '../Product';
import { api } from '../../services/api';
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

export function Navigation() {
  const [data, setData] = useState<ProductProps[]>([]);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [filter, setFilter] = useState('all-products')
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const [search, setSearch] = useState('')

  useEffect(() => {
    async function LoadAllProducts() {
      try {
        const response = await api.get<ProductProps[]>(`productss`)

        const dataAPI = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price_in_cents / 100),
          formatDate: Number(new Date(product.created_at))
        }))

        setAllProducts(dataAPI)
        setData(dataAPI)
      } catch (e) {
        const dataAPI = ProductsMock.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price_in_cents / 100),
          formatDate: Number(new Date(product.created_at))
        }))
        setAllProducts(dataAPI)
        setData(dataAPI)
      }
    }
    LoadAllProducts()
  }, [])

  function HandleDropdownOpen() {
    setDropdownOpen(!dropdownOpen)
  }

  function HandleFilterProducts(value: MouseEvent) {
    const valueString = (value.target as HTMLButtonElement).value
    setFilter(valueString)

    if (valueString === 'all-products') {
      setData(allProducts)
    } else {
      const eventFilter = allProducts.filter(product =>
        product.category.includes(`${valueString}`)
      )
      setData(eventFilter)
    }
  }

  function HandleOrderProducts(value: MouseEvent) {
    const currentValue = (value.target as HTMLButtonElement).value as string

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
      const news = [...data].sort((a, b) => a.formatDate - b.formatDate);
      setData(news)
    }
    setDropdownOpen(!dropdownOpen)
  }

  const searchItensInput = useMemo(() => {
    return data.filter(data => data.description.includes(`${search}`))
  }, [search])
  console.log(searchItensInput)

  return (
    <NavigationContainer>
      <ContainerCenter>
        <AsideContainer>
          <button
            onClick={(value) => HandleFilterProducts(value)}
            value="all-products"
            className={filter === 'all-products' ? 'active' : ``}
          >
            Todos os produtos
          </button>
          <button
            onClick={(value) => HandleFilterProducts(value)}
            value="t-shirts"
            className={filter === 't-shirts' ? 'active' : ``}
          >
            Camisetas
          </button>
          <button onClick={(value) => HandleFilterProducts(value)}
            value="mugs"
            className={filter === 'mugs' ? 'active' : ``}
          >
            Canecas
          </button>

          <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
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