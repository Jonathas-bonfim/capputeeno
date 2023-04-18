import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProductProvider } from './Hooks/context/useProductContext'
import { CartProvider } from './Hooks/context/useCart'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartProvider>
        <GlobalStyle />
      </ProductProvider>
    </ThemeProvider>
  )
}

export default App
