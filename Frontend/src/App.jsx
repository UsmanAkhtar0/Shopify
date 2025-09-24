import './App.css'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Authentication from './components/Authentication'


function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/user/login' element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
