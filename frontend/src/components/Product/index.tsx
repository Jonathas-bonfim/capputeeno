import { NavLink } from "react-router-dom";
import { ProductContainer } from "./styles";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  price: string | undefined;
}

export function Product({ id, image, name, price }: ProductProps) {
  return (
    <ProductContainer key={id}>
      <NavLink className="link-product" to={`product/${id}`}>
        <img src={image} alt="Imagem do produto" />
        <article className='product-info'>
          <p className="product-name" title='Nome do produto'>{name}</p>
          <div className="divider"></div>
          <p className="product-value" title='Valor do produto'>{price}</p>
        </article>
      </NavLink>
    </ProductContainer>
  )
}