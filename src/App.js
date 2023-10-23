import React from 'react'
import MyApp from './MyApp'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import PaymentSuccess from './PaymentSuccess';
import LogIn from './components/LogIn/LogIn';


const App = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<MyApp/>}/>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/LogIn' element={<LogIn/>}/>
          <Route path='productDetail/:id' element={<ProductDetail />}/>
          <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App