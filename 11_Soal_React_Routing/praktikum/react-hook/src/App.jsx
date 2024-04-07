import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateAccount from './Pages/CreateAccount'
import CreateProduct from './Pages/CreateProduct'
import LandingPage from './Pages/LandingPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/create-product' element={<CreateProduct />} />
    </Routes>
  )
}

export default App