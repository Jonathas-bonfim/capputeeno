import { useContext, useEffect, useState } from 'react'
import cart from '../../assets/images/header/cart.svg'
import searchIMG from '../../assets/images/header/search.svg'
import { HeaderContainer } from './styles'
import { AuthContext } from '../../Hooks/context/ProductContext'

export function Header() {
  const { allProductsContext, searchProductContext } = useContext(AuthContext)
  const [search, setSearch] = useState('')

  function handleSearchProduct(e: any) {
    e.preventDefault()

    const eventFilter = allProductsContext.filter(product => product.name.includes(`${search}`))
    searchProductContext(eventFilter)
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

            {/* <img src={searchIMG} alt="Pesquisar" /> */}
            {/* </input> */}
          </article>
          <a href="/" className='cart'>
            <img src={cart} alt="Carrinho de compras" />
            <p>2</p>
          </a>
        </main>
      </div>
    </HeaderContainer>
  )
}