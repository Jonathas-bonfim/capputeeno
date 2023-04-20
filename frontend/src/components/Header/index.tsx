import { FormEvent, useContext, useState } from 'react'
import cartIMG from '../../assets/images/header/cart.svg'
import { HeaderContainer } from './styles'
import { ProductContext } from '../../Hooks/context/useProductContext'

import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from '../../Hooks/context/useCart';

export function Header() {
  const { allProductsContext, searchProductContext } = useContext(ProductContext)
  const { cart } = useContext(CartContext)
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
          <a href="/" className='logo'>capputeeno</a>

          <a href="/cart" className='cart cart-mobile'>
            <img src={cartIMG} alt="Carrinho de compras" />
            <p>{cart.length}</p>
          </a>
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
          <NavLink to="/cart" className='cart cart-desktop'>
            <img src={cartIMG} alt="Carrinho de compras" />
            <p>{cart.length}</p>
          </NavLink>
        </main>
      </div>
    </HeaderContainer>
  )
}