import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import ProductDetails from './ProductDetails/ProductDetails';
import Cart from './Cart/Cart';
import { MyContext } from './MyContext';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [productData, setProductData] = useState([]);
  const [emailArray, setEmailArray] = useState([]);
  const [login, setLogin] = useState("Sign-in");
  const [userName, setUserName] = useState("");
  const [cartArray, setCartArray] = useState([]);

  return (
    <>
    <MyContext.Provider value={{badgeNumber, setBadgeNumber, productData, setProductData, emailArray, setEmailArray, login, setLogin, userName, setUserName, cartArray, setCartArray}} >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/sign-in' element={<SignIn />}/>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/productDetails' element={<ProductDetails />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
    </>
  );
}

export default App;
