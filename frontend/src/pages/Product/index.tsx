import { useContext } from 'react'
import { ProductContainer, ContainerCenter, ProductText } from "./styles";
import mugIMG from '../../assets/images/product/mug.png'
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Hooks/context/ProductContext";

interface ProductProps {
  category: string;
  title: string;
  price: number;
  description: string;
}

// export function Product({ category, title, price, description }: ProductProps) {
export function Product() {
  const { allProductsContext } = useContext(AuthContext)
  const { productId } = useParams()
  const ProductFilter = allProductsContext.filter(product => product.id.includes(`${productId}`))
  console.log({ productId, ProductFilter })

  return (
    <ProductContainer>
      <ContainerCenter>
        <aside>
          <button>Voltar</button>
        </aside>
        <main>
          {
            ProductFilter.map(product => (
              <>
                <img
                  className="imageProduct"
                  src={product.image_url}
                  alt="Imagem do produto"
                />
                <ProductText>

                  <article>
                    <p className="category">{product.category === 't-shirts' ? 'Camisa' : 'Caneca'}</p>
                    <h3 className="title">{product.name}</h3>
                    <h4 className="price">{product.priceFormatted}</h4>
                    <p className="note">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00</p>
                    <h4 className="title-description">Descrição</h4>
                    <p className="description">{product.description}</p>
                  </article>

                  <button>
                    ADICIONAR AO CARRINHO
                  </button>
                </ProductText>
              </>
            ))
          }
        </main>
      </ContainerCenter>
    </ProductContainer>
  )
}