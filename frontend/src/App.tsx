import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthProvider } from './Hooks/context/ProductContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
