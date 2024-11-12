// import React, { useContext, useState } from 'react';

// import './Navbar.css'
// import logo from '../Assests/logo.png'
// import cart_icon from'../Assests/cart_icon.png'
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';


// const Navbar = () => {
//     const[menu,setMenu] = useState("shop")
//     const{getTotalCartItems}=useContext(ShopContext);
//   return (
//     <div className='navbar'>
//          <div className='nav-logo'>
//             <img src={logo} alt=""/>
//            <p>SHOPPZ</p>
//          </div>
//       <ul className = "nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}}to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//         <li onClick={() => { setMenu("kids") }}><Link style={{textDecoration: 'none'}}to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>


//       </ul>
//       <div className="nav-login-cart">
//         <Link to='/login'><button>Login</button></Link>
//         <Link to='/cart'><img src={cart_icon} alt=""/></Link>
//         <div className='nav-cart-count'>{getTotalCartItems()}</div>

//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom'; // Removed `useNavigate`
import { ShopContext } from '../../Context/ShopContext';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>ONE STOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <Link to='/login'>
            <button>Login</button>
          </Link>
        )}
        <Link to='/cart'>
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

