import { ButtonBackNavigation } from "../../components/ButtonBackNavigation"
import { MainContainer, ProductLeft, ProductRight, ShoppingCartContainer } from "./styles"

export function ShoppingCart() {
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
                  Total (3 produtos) <b>R$161,00</b>
                </span>
              </header>
              <nav className="container-item">
                <ul>
                  <li>
                    <div>
                      <img src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg" alt="" />
                    </div>
                    <section>
                      <header>
                        <h4>Caneca de cerâmica rústica</h4>
                        <button>Remover</button>
                      </header>
                      <p className="description">Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                      <aside>
                        <input type="number" />
                        <b>R$ 40,00</b>
                      </aside>
                    </section>
                  </li>

                  <li>
                    <div>
                      <img src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg" alt="" />
                    </div>
                    <section>
                      <header>
                        <h4>Caneca de cerâmica rústica</h4>
                        <button>Remover</button>
                      </header>
                      <p className="description">Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                      <aside>
                        <input type="number" />
                        <b>R$ 40,00</b>
                      </aside>
                    </section>
                  </li>
                </ul>
              </nav>
            </div>
          </ProductLeft>
          <ProductRight>
            <header>
              <h3>Resumo do pedido</h3>
              <div className="subtotal">
                <h5>Subtotal de produtos</h5>
                <p>R$ 161,00</p>
              </div>
              <div className="delivery">
                <h5>Entrega</h5>
                <p>R$ 40,00</p>
              </div>
              <div className="divider"></div>
              <div className="total">
                <h4>Total</h4>
                <b className="total">R$ 201,00</b>
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