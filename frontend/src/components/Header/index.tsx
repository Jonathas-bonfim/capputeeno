import { FormEvent, useContext, useState } from 'react'
import cart from '../../assets/images/header/cart.svg'
import { HeaderContainer } from './styles'
import { ProductContext } from '../../Hooks/context/useProductContext'

import { useNavigate } from "react-router-dom";

export function Header() {
  const { allProductsContext, searchProductContext } = useContext(ProductContext)
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  function handleSearchProduct(e: FormEvent) {
    e.preventDefault()

    const searchLowerCase = search.toLowerCase()
    const eventFilter = allProductsContext.filter(product => product.name.toLocaleLowerCase().includes(`${searchLowerCase}`))
    searchProductContext(eventFilter)
    navigate(`/`)
    setSearch('')
  }
  return (
    <HeaderContainer>
      <div className="container-center">
        <aside>
          <a href="/">capputeeno</a>
        </aside>
        <main>
          <article>
            <form onSubmit={(e) => handleSearchProduct(e)}>
              <input
                className='input-search'
                type="text"
                placeholder='Procurando por algo específico?'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button
                className='button-submit'
                onClick={(e) => handleSearchProduct(e)}>
                Submit
              </button>
            </form>
          </article>
          <a href="/cart" className='cart'>
            <img src={cart} alt="Carrinho de compras" />
            <p>2</p>
          </a>
        </main>
      </div>
    </HeaderContainer>
  )
}