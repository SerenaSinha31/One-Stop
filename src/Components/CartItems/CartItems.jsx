// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from '../Assests/cart_cross_icon.png'

// const CartItems = () => {
//     const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
//   return (
//     <div className='cartItems'>
//          <div className="cartitems-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>
//         </div>
//         <hr/>
//         {all_product.map((e)=>{
//             if(cartItems[e.id]>0){
//                 return <div>
//                 <div className="cartitems-format cartitems-format-main">
//                     <img src={e.image} alt="" className="cartitems-product-icon"/>
//                     <p>{e.name}</p>
//                     <p>Rs.{e.new_price}</p>
//                     <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                     <p>Rs.{e.new_price*cartItems[e.id]}</p>
//                     <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
//                 </div>
//                 <hr/>
//             </div>
//             }
//             return null;
//         })}
//         <div className="cartitems-down">
//             <div className="cartitems-total">
//                 <h1>cart Totals</h1>
//                 <div>
//                     <div className="cartitems-total-item">
//                         <p>Subtotal</p>
//                         <p>Rs.{getTotalCartAmount()}</p>
//                     </div>
//                     <hr/>
//                     <div className="cartitems-total-item">
//                         <p>Shipping Fee</p>
//                         <p>Free</p>
//                     </div>
//                     <hr/>
//                     <div className="cartitems-total-item">
//                         <h3>Total</h3>
//                         <h3>Rs.{getTotalCartAmount()}</h3>
//                     </div>
//                 </div>
//                 <button>PROCEED TO CHECKOUT</button>
//             </div>
//             <div className="cartitems-promocode">
//                 <p>If you have a promo code, Enter it here</p>
//                 <div className="cartitems-promobox">
//                     <input type="text" placeholder='promo code'/>
//                     <button>Submit</button>
//                 </div>
//         </div>
//     </div>
       
//     </div>
//   )
// }

// export default CartItems

// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assests/cart_cross_icon.png';

// const CartItems = () => {
//     const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
//     const navigate = useNavigate(); // Initialize navigate

//     const handlePromoCodeSubmit = () => {
//         const promoCode = document.querySelector('.cartitems-promobox input').value;
//         console.log(`Promo code entered: ${promoCode}`);
//         // Add any promo code validation or application logic here
//     };

//     const handleCheckout = () => {
//         // Navigate to the homepage
//         navigate('/'); // Change this to your homepage route
//     };

//     return (
//         <div className='cartItems'>
//             <div className="cartitems-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {all_product.map((e) => {
//                 if (cartItems[e.id] > 0) {
//                     return (
//                         <div key={e.id}> {/* Unique key added here */}
//                             <div className="cartitems-format cartitems-format-main">
//                                 <img src={e.image} alt="" className="cartitems-product-icon" />
//                                 <p>{e.name}</p>
//                                 <p>Rs.{e.new_price}</p>
//                                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                                 <p>Rs.{e.new_price * cartItems[e.id]}</p>
//                                 <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>Rs.{getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>Rs.{getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button> {/* Updated */}
//                 </div>
//                 <div className="cartitems-promocode">
//                     <p>If you have a promo code, enter it here</p>
//                     <div className="cartitems-promobox">
//                         <input type="text" placeholder='promo code' />
//                         <button onClick={handlePromoCodeSubmit}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartItems;

// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assests/cart_cross_icon.png';

// const CartItems = () => {
//     const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
//     const navigate = useNavigate();

//     const handlePromoCodeSubmit = () => {
//         const promoCode = document.querySelector('.cartitems-promobox input').value;
//         console.log(`Promo code entered: ${promoCode}`);
//     };

//     const handleCheckout = () => {
//         clearCart(); // Clear the cart
//         navigate('/'); // Navigate to the homepage
//     };

//     return (
//         <div className='cartItems'>
//             <div className="cartitems-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {all_product.map((e) => {
//                 if (cartItems[e.id] > 0) {
//                     return (
//                         <div key={e.id}>
//                             <div className="cartitems-format cartitems-format-main">
//                                 <img src={e.image} alt="" className="cartitems-product-icon" />
//                                 <p>{e.name}</p>
//                                 <p>Rs.{e.new_price}</p>
//                                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                                 <p>Rs.{e.new_price * cartItems[e.id]}</p>
//                                 <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>Rs.{getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>Rs.{getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cartitems-promocode">
//                     <p>If you have a promo code, enter it here</p>
//                     <div className="cartitems-promobox">
//                         <input type="text" placeholder='promo code' />
//                         <button onClick={handlePromoCodeSubmit}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartItems;

// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assests/cart_cross_icon.png';

// const CartItems = () => {
//     const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
//     const navigate = useNavigate();

//     const handlePromoCodeSubmit = () => {
//         const promoCode = document.querySelector('.cartitems-promobox input').value;
//         console.log(`Promo code entered: ${promoCode}`);
//         // Add functionality to apply the promo code if needed
//     };

//     const handleCheckout = () => {
//         // Clear the cart only if you want to reset it after proceeding to checkout
//          clearCart(); // Uncomment if you want to clear the cart after checkout
//         navigate('/payment'); // Navigate to the payment page
//     };

//     return (
//         <div className='cartItems'>
//             <div className="cartitems-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {all_product.map((e) => {
//                 if (cartItems[e.id] > 0) {
//                     return (
//                         <div key={e.id}>
//                             <div className="cartitems-format cartitems-format-main">
//                                 <img src={e.image} alt="" className="cartitems-product-icon" />
//                                 <p>{e.name}</p>
//                                 <p>Rs.{e.new_price}</p>
//                                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                                 <p>Rs.{e.new_price * cartItems[e.id]}</p>
//                                 <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>Rs.{getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>Rs.{getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cartitems-promocode">
//                     <p>If you have a promo code, enter it here</p>
//                     <div className="cartitems-promobox">
//                         <input type="text" placeholder='promo code' />
//                         <button onClick={handlePromoCodeSubmit}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartItems;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png';
import Delivery from '../Delivery/Delivery';
 // Updated import

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
    const navigate = useNavigate();
    const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);

    const handlePromoCodeSubmit = () => {
        const promoCode = document.querySelector('.cartitems-promobox input').value;
        console.log(`Promo code entered: ${promoCode}`);
    };

    const handleCheckout = () => {
        setShowDeliveryOptions(true);
    };

    const handleProceedToPayment = () => {
        clearCart();
        navigate('/payment'); // Navigate to the payment page
    };

    const handleCancel = () => {
        setShowDeliveryOptions(false); // Close the delivery options
    };

    return (
        <div className='cartItems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="cartitems-product-icon" />
                                <p>{e.name}</p>
                                <p>Rs.{e.new_price}</p>
                                <span className="cartitems-quantity">{cartItems[e.id]}</span>
                                <p>Rs.{e.new_price * cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs.{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button onClick={handlePromoCodeSubmit}>Submit</button>
                    </div>
                </div>
            </div>

            {/* Render Delivery options if they are visible */}
            {showDeliveryOptions && (
                <Delivery onProceed={handleProceedToPayment} onCancel={handleCancel} />
            )}
        </div>
    );
};

export default CartItems;
