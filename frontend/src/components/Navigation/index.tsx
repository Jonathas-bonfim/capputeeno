import { MouseEvent, useContext } from "react";

import { ArticleContainer, AsideContainer, ContainerCenter, NavigationContainer, ProductContainer } from "./styles";
import { useState } from "react";
import { ProductItem } from '../Product';
import { ProductContext } from "../../Hooks/context/useProductContext";
import { Pagination } from "../Pagination";

export function Navigation() {
  const { dataContext, allProductsContext, updateDataContext } = useContext(ProductContext)
  const [filter, setFilter] = useState('all-products')
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataContext.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(dataContext.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)


  function HandleDropdownOpen() {
    setDropdownOpen(!dropdownOpen)
  }

  function HandleFilterProducts(value: MouseEvent) {
    const valueString = (value.target as HTMLButtonElement).value
    setFilter(valueString)

    if (valueString === 'all-products') {
      updateDataContext(allProductsContext)
    } else {
      const eventFilter = allProductsContext.filter(product =>
        product.category.includes(`${valueString}`)
      )
      updateDataContext(eventFilter)
    }
    setCurrentPage(1)
  }

  function HandleOrderProducts(value: MouseEvent) {
    const currentValue = (value.target as HTMLButtonElement).value as string
    setCurrentPage(1)

    if (currentValue == 'majorPrice') {
      const majorPrice = [...dataContext].sort((a, b) => b.price_in_cents - a.price_in_cents);
      updateDataContext(majorPrice)
    }
    if (currentValue == 'minorPrice') {
      const minorPrice = [...dataContext].sort((a, b) => a.price_in_cents - b.price_in_cents);
      updateDataContext(minorPrice)
    }
    if (currentValue == 'bestSellers') {
      const bestSellers = [...dataContext].sort((a, b) => b.sales - a.sales);
      updateDataContext(bestSellers)
    }
    if (currentValue == 'news') {
      const news = [...dataContext].sort((a, b) => a.formatDate - b.formatDate);
      updateDataContext(news)
    }
    setDropdownOpen(!dropdownOpen)
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id: number) {
    setCurrentPage(id)
  }

  function nextPage() {
    console.log({ currentPage, lastIndex })
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

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
        <section className="pagination-top">
          <Pagination prePage={prePage}
            nextPage={nextPage}
            numbers={numbers}
            currentPage={currentPage}
            changeCPage={changeCPage}
          />
        </section>
        <div className="container-center">
          {
            records.map(data => (
              <ProductItem key={data.id} id={data.id} name={data.name} image={data.image_url} price={data.priceFormatted} />
            ))
          }
        </div>
        <section className="pagination-bottom">
          <Pagination prePage={prePage}
            nextPage={nextPage}
            numbers={numbers}
            currentPage={currentPage}
            changeCPage={changeCPage}
          />
        </section>
      </ProductContainer>
    </NavigationContainer>
  )
} 