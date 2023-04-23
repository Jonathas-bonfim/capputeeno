import { render } from '@testing-library/react'
import { Header } from "."

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
describe('Header', () => {
  it('Render correctly', () => {
    const { getByText } = render(
      <ProductProvider>
        <CartProvider>
          <Header />
        </CartProvider>
      </ProductProvider>
    )
    expect(getByText('capputeeno')).toBeTruthy()
  })
})