
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import{BrowserRouter,Routes,Route} from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
// import Shop from './Pages/Shop';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assests/banner_mens.png'
// import women_banner from './Components/Assests/banner_women.png'
// import kids_banner from './Components/Assests/banner_kids.png'


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
        
//           <Route path='/' element={<Shop/>}/>
//           <Route path='/mens' element={<ShopCategory banner={men_banner}category="men"/>}/>
//           <Route path='/womens' element={<ShopCategory banner={women_banner}category="women"/>}/>
//           <Route path='/kids' element={<ShopCategory banner={kids_banner}category="kid"/>}/>
//           <Route path="product" element={<Product/>}>
//           <Route path=':productId' element={<Product/>}/>
//            </Route>
//            <Route path='/cart' element={<Cart/>}/>
//            <Route path='/login' element={<LoginSignup/>}/>
        
//       </Routes>
//       <Footer/>
//       </BrowserRouter>
    
     
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
// import Shop from './Pages/Shop';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assests/banner_mens.png';
// import women_banner from './Components/Assests/banner_women.png';
// import kids_banner from './Components/Assests/banner_kids.png';
// import { useState } from 'react';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     navigate('/');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Shop />} />
//           <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
//           <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
//           <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// App.js
import './App.css';


import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kids_banner from './Components/Assests/banner_kids.png';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PaymentPage from './Components/Payment/Payment';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<PaymentPage/>} />
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
