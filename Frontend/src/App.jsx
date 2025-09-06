import './App.css'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Authentication from './components/Authentication'
import { useState } from 'react'


function App() {

  const [query, setQuery] = useState("");

  return (
    <>

      <BrowserRouter>
        <Navbar query={query} setQuery={setQuery} />
        <Routes>
          <Route path='/' element={<ProductList query={query} />} />
          <Route path='/products' element={<ProductList query={query} />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/user/login' element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
