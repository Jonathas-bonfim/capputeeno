import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Index'
import { Product } from './pages/Product'
import { ShoppingCart } from './pages/ShoppingCart'


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<ShoppingCart />} />
      </Route>
    </Routes>
  )
}