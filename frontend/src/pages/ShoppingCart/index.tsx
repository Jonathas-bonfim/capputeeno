import { useContext } from "react"
import { ButtonBackNavigation } from "../../components/ButtonBackNavigation"
import { MainContainer, ProductLeft, ProductRight, ShoppingCartContainer } from "./styles"
import { CartContext } from "../../Hooks/context/useCart"
import { formatPrice } from "../../util/format"

export function ShoppingCart() {
  const { cart, removeProduct } = useContext(CartContext)
  function handleRemoveProductToCart(productId: string) {
    removeProduct(productId)
  }

  const PriceProducts = cart.reduce((sumTotal, product) => {
    return sumTotal = sumTotal + product.price_in_cents / 100
  }, 0)
  const PriceProductsFormatted = formatPrice(PriceProducts)
  const TotalOrder = formatPrice(PriceProducts + 40)



  return (
    <ShoppingCartContainer>
      <div className="container-center">
        <header className="header-navigation">
          <ButtonBackNavigation />
        </header>
        <MainContainer>
          <ProductLeft>
            <div className="text">
              <header className="header-text">
                <h3>SEU CARRINHO</h3>
                <span>
                  Total ({cart.length} {cart.length > 1 ? 'produtos' : 'produto'}) <b>{PriceProductsFormatted}</b>
                </span>
              </header>
              <nav className="container-item">
                <ul>
                  {
                    cart.length == 0
                      ?
                      <h1>Nenhum produto foi adicionado ao carrinho</h1>
                      :
                      cart.map(product => (
                        <li key={product.id}>
                          <div>
                            <img src={product.image_url} alt={product.name} />
                          </div>
                          <section>
                            <header>
                              <h4>{product.name}</h4>
                              <button onClick={() => handleRemoveProductToCart(product.id)}>Remover</button>
                            </header>
                            <p className="description">{product.description}</p>
                            <aside>
                              <input type="number" />
                              <b>{product.priceFormatted}</b>
                            </aside>
                          </section>
                        </li>
                      ))
                  }
                </ul>
              </nav>
            </div>
          </ProductLeft>
          <ProductRight>
            <header>
              <h3>Resumo do pedido</h3>
              <div className="subtotal">
                <h5>Subtotal de produtos</h5>
                <p>{PriceProductsFormatted}</p>
              </div>
              <div className="delivery">
                <h5>Entrega</h5>
                <p>R$ 40,00</p>
              </div>
              <div className="divider"></div>
              <div className="total">
                <h4>Total</h4>
                <b className="total">{TotalOrder}</b>
              </div>
              <button>Finalizar a compra</button>
            </header>
            <footer>
              <a href="">Ajuda</a>
              <a href="">Reembolsos</a>
              <a href="">Entregas e Frete</a>
              <a href="">Trocas e Devoluções</a>
            </footer>
          </ProductRight>
        </MainContainer>
      </div>
    </ShoppingCartContainer>
  )
}