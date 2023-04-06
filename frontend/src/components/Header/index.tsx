import cart from '../../assets/images/header/cart.svg'
import search from '../../assets/images/header/search.svg'

export function Header() {
  return (
    <header>
      <div className="container-center">
        <aside>
          <a href="/">capputeeno</a>
        </aside>
        <main>
          <article>
            <input type="text" />
            <a href="">
              <img src={search} alt="Pesquisar" />
            </a>
          </article>
          <a href="/">
            <img src={cart} alt="Carrinho de compras" />
          </a>
        </main>
      </div>
    </header>
  )
}