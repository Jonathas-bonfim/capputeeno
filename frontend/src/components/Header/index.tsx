import cart from '../../assets/images/header/cart.svg'
import search from '../../assets/images/header/search.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container-center">
        <aside>
          <a href="/">capputeeno</a>
        </aside>
        <main>
          <article>
            <input
              type="text"
              placeholder='Procurando por algo específico?'
            />
            <a href="">
              <img src={search} alt="Pesquisar" />
            </a>
          </article>
          <a href="/" className='cart'>
            <img src={cart} alt="Carrinho de compras" />
          </a>
        </main>
      </div>
    </HeaderContainer>
  )
}