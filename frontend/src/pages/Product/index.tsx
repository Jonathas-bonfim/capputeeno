import { ProductContainer, ContainerCenter, ProductText } from "./styles";
import mugIMG from '../../assets/images/product/mug.png'

interface ProductProps {
  category: string;
  title: string;
  price: number;
  description: string;
}

// export function Product({ category, title, price, description }: ProductProps) {
export function Product() {
  return (
    <ProductContainer>
      <ContainerCenter>
        <aside>
          <button>Voltar</button>
        </aside>
        <main>
          <img
            className="imageProduct"
            src={mugIMG}
            alt="Imagem do produto"
          />
          <ProductText>
            <article>
              <p className="category">Caneca</p>
              <h3 className="title">Caneca de cerâmica rústica</h3>
              <h4 className="price">R$ 40,00</h4>
              <p className="note">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00</p>
              <h4 className="title-description">Descrição</h4>
              <p className="description">Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
            </article>
            <button>
              ADICIONAR AO CARRINHO
            </button>
          </ProductText>
        </main>
      </ContainerCenter>
    </ProductContainer>
  )
}