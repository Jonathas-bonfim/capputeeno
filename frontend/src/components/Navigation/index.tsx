import productImage from '../../assets/images/product/mug.png'

import { NavLink } from "react-router-dom";
import { ArticleContainer, AsideContainer, ContainerCenter, NavigationContainer, Product, ProductContainer } from "./styles";
import { useState } from "react";

export function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  function HandleDropdownOpen() {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <NavigationContainer>
      <ContainerCenter>
        <AsideContainer>
          <NavLink to="/" title="Todos os produtos">Todos os produtos</NavLink>
          <NavLink to="/camisetas" title="Camisetas">Camisetas</NavLink>
          <NavLink to="/canecas" title="Canecas">Canecas</NavLink>
        </AsideContainer>
        <ArticleContainer>
          <main className={dropdownOpen ? "dropdown" : "dropdown dropdown--active"}>
            <button className={dropdownOpen ? "dropdown-toggle" : "dropdown-toggle dropdown-toggle--active"} onClick={HandleDropdownOpen}>Organizar por</button>
            <div className={dropdownOpen ? "dropdown-content" : "dropdown-content dropdown-content--active"}>
              <button className="button-orderby">Novidades</button>
              <button className="button-orderby">Preço: Maior - menor</button>
              <button className="button-orderby">Preço: Menor - maior</button>
              <button className="button-orderby">Mais vendidos</button>
            </div>
          </main>
        </ArticleContainer>
      </ContainerCenter>

      <ProductContainer>
        <div className="container-center">
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
          <Product>
            <img src={productImage} alt="Imagem do produto" />
            <article className='product-info'>
              <p className="product-description" title='Descrição do produto'>
                Caneca de cerâmica Rústica revevrefvfe gverfervbece
              </p>
              <div className="divider"></div>
              <p className="product-value" title='Valor do produto'>R$ 78,00</p>
            </article>
          </Product>
        </div>
      </ProductContainer>
    </NavigationContainer>
  )
}