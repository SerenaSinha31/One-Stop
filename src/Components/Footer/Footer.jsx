// import React from 'react'
// import './Footer.css'
// import footer_logo from '../Assests/logo_big.png'
// import instagram_icon from'../Assests/instagram_icon.png'
// import pintester_icon from'../Assests/pintester_icon.png'
// import whatsapp_icon from'../Assests/whatsapp_icon.png'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className="footer-logo">
//         <img src={footer_logo} alt=""/>
//         <p>ONE STOP</p>
//       </div>
//       <ul className="footer-links">
//         <li>Company</li>
//         <li>Products</li>
//         <li>Offices</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
//     <div className="footer-social-icon">
//         <div className="footer-icons-container">
//             <img src={instagram_icon} alt=""/>
//         </div>
//         <div className="footer-icons-container">
//             <img src={pintester_icon} alt=""/>
//         </div>
//         <div className="footer-icons-container">
//             <img src={whatsapp_icon} alt=""/>
//         </div>

//     </div>
//     <div className="footer-copyright">
//         <hr/>
//         <p>Copyright 2024 ONE STOP - All rights reserved.</p>
//     </div>
//     </div>
    
//   )
// }

// export default Footer


import React from 'react';
import './Footer.css';
import footer_logo from '../Assests/logo_big.png';
import instagram_icon from '../Assests/instagram_icon.png';
import pintester_icon from '../Assests/pintester_icon.png';
import whatsapp_icon from '../Assests/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo" />
        <p>ONE STOP</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>
          <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
        </li>
        <li>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Pinterest icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright 2024 ONE STOP - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

