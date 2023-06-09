import { MouseEvent, useContext, useState } from "react"
import { ButtonBackNavigation } from "../../components/ButtonBackNavigation"
import { CheckoutContainer, MainContainer, ProductLeft, ProductRight, ShoppingCartContainer } from "./styles"
import { CartContext } from "../../Hooks/context/useCart"
import { formatPrice } from "../../util/format"
import { NavLink, useNavigate } from "react-router-dom"

import ArrowDropdown from '../../assets/images/orderby/arrow.svg'
import remove from '../../assets/images/shoppingCart/remove.svg'

export function ShoppingCart() {
  const { cart, removeProduct, updateProductQuantity, FinalizeBuy } = useContext(CartContext)
  const [dropdownQuantity, setDropdownQuantity] = useState('')
  const [checkout, setCheckout] = useState(false)
  const navigate = useNavigate();

  function handleRemoveProductToCart(productId: string) {
    removeProduct(productId)
  }
  const PriceProducts = cart.reduce((sumTotal, product) => {
    return sumTotal = sumTotal + (product.quantity * product.price_in_cents / 100)
  }, 0)
  const PriceProductsFormatted = formatPrice(PriceProducts)
  const TotalOrder = formatPrice(PriceProducts + 40)

  function handleDropdownQuantityOpen(productId: string) {
    if (dropdownQuantity.length >= 1) {
      setDropdownQuantity('')
    }
    else {
      setDropdownQuantity(productId)
    }
  }
  function HandleSelectQuantityProduct(productId: string, value: MouseEvent) {
    const currentValue = Number((value.target as HTMLButtonElement).value)
    updateProductQuantity(productId, currentValue)
    setDropdownQuantity('')
  }

  function handleFinalizeBuy() {
    setCheckout(true)
    FinalizeBuy()
    setTimeout(() => {
      setCheckout(false)
      navigate('/')
    }, 5000);
  }

  return (
    <>
      {
        checkout
          ?
          <CheckoutContainer>
            <h1>Aguarde, estamos finalizando sua compra...</h1>
            <div className="dots-3"></div>
            <p>Agradecemos a preferência, volte sempre!</p>
          </CheckoutContainer>
          :
          <ShoppingCartContainer>
            <div className="container-center">
              <header className="header-navigation">
                <ButtonBackNavigation />
              </header>
              <MainContainer>
                <ProductLeft>
                  {
                    cart.length == 0
                      ?
                      <div className="cart-empty">
                        <h1>Seu carrinho está vazio</h1>
                        <p>PARA CONTINUAR COMPRANDO, NAVEGUE PELOS PRODUTOS DO SITE OU FAÇA UMA BUSCA PELO SEU PRODUTO.</p>
                        <NavLink to='/'>Adicionar produtos</NavLink>
                      </div>
                      :
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
                              cart.map(product => (
                                <li key={product.id}>
                                  <div>
                                    <img src={product.image_url} alt={product.name} />
                                  </div>
                                  <section>
                                    <header>
                                      <h4>{product.name}</h4>
                                      <button
                                        onClick={() => handleRemoveProductToCart(product.id)}
                                      >
                                        Remover
                                        <img src={remove} alt="Remover" />
                                      </button>
                                    </header>
                                    <p className="description">{product.description}</p>
                                    <aside>
                                      <main className={dropdownQuantity === product.id ? "dropdownQuantity dropdownQuantity--active" : "dropdownQuantity"}>
                                        <button
                                          className={dropdownQuantity === product.id ? "dropdownQuantity-toggle dropdownQuantity-toggle--active" : "dropdownQuantity-toggle"}
                                          onClick={() => handleDropdownQuantityOpen(product.id)}
                                        >
                                          {product.quantity}
                                          <img src={ArrowDropdown} alt="ArrowDropdown" />
                                        </button>
                                        <div className={dropdownQuantity === product.id ? "dropdownQuantity-content dropdownQuantity-content--active" : "dropdownQuantity-content"}>
                                          <button onClick={(value) => HandleSelectQuantityProduct(product.id, value)} value="1" className="button-quantity">1</button>
                                          <button onClick={(value) => HandleSelectQuantityProduct(product.id, value)} value="2" className="button-quantity">2</button>
                                          <button onClick={(value) => HandleSelectQuantityProduct(product.id, value)} value="3" className="button-quantity">3</button>
                                          <button onClick={(value) => HandleSelectQuantityProduct(product.id, value)} value="4" className="button-quantity">4</button>
                                          <button onClick={(value) => HandleSelectQuantityProduct(product.id, value)} value="5" className="button-quantity">5</button>
                                        </div>
                                      </main>
                                      <b>{formatPrice(product.price_in_cents / 100)}</b>
                                    </aside>
                                  </section>
                                </li>
                              ))
                            }
                          </ul>
                        </nav>
                      </div>
                  }
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
                    <button
                      onClick={handleFinalizeBuy}
                      className={cart.length === 0 ? 'disabled' : ''}
                      disabled={cart.length === 0 ? true : false}
                    >Finalizar a compra</button>
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
      }
    </>
  )
}