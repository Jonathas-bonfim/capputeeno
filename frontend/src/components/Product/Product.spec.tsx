import { render } from '@testing-library/react'
import { ProductItem } from "."

import { ProductProvider } from '../../Hooks/context/useProductContext'
import { CartProvider } from '../../Hooks/context/useCart'

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

jest.mock('react-router-dom', () => {
  return {
    useNavigate() {
      return {
        navigate: ''
      }
    },
    NavLink: ({ children, ...props }: NavLinkProps) => {
      return (
        <a {...props}>
          {children}
        </a>
      );
    }
  }
})
describe('Product Item', () => {
  it('Render correctly', () => {
    const { getByTestId } = render(
      <ProductProvider>
        <CartProvider>
          <ProductItem id="teste" image="teste" name="teste" price="1" />
        </CartProvider>
      </ProductProvider>
    )
    const element = getByTestId('container-info');
    expect(element).toHaveClass('product-info');
  })
})

