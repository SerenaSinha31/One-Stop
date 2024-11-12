// import React, { useContext } from 'react'
// import './ProductDisplay.css'; // This works if the CSS file is in the same directory
// import star_icon from "../Assests/star_icon.png";
// import star_dull_icon from"../Assests/star_dull_icon.png";
// import { ShopContext } from '../../Context/ShopContext';



// const ProductDisplay = (props) => {
//     const{product} = props;
//     const{addToCart} = useContext(ShopContext);

//   return (
//     <div className='productdisplay'>
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//             <img src={product.image} alt=""/>
//             <img src={product.image} alt=""/>
//             <img src={product.image} alt=""/>
//             <img src={product.image} alt=""/>

//         </div>
//         <div className="productdisplay-img">
//             <img className = 'productdisplay-main-img'src = {product.image} alt=""/>
//         </div>

//       </div>
//       <div className="productdisplayright">
//         <h1>{product.name}</h1>
//         <div className="productdisplay-right-star">
//             <img src={star_icon}alt=""/>
//             <img src={star_icon} alt=""/>
//             <img src={star_icon} alt=""/>
//             <img src={star_icon} alt=""/>
//             <img src={star_dull_icon} alt=""/>
//             <p>(234)</p>
//         </div>
//         <div className="productdisplay-right-prices">
//             <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
//             <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
//         </div>
//         <div className="productdisplay-right-description">
//         The Casual Crewneck T-Shirt is a must-have for any wardrobe, offering both comfort and versatility. Crafted from a premium, breathable cotton blend, this tee is lightweight and soft, perfect for everyday wear. Its classic crew neckline and relaxed fit make it a timeless choice, whether paired with jeans for a casual look or dressed up with a jacket.
//         </div>
//         <div className="productdisplay-right-size">
//             <h1>Select Size</h1>
//             <div className="productdisplay-right-sizes">
//                 <div >S</div>
//                 <div >M</div>
//                 <div >L</div>
//                 <div >XL</div>
//                 <div >XXL</div>
//             </div>
//         </div>
//         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
//         <p className='productdisplay-right-category'><span>Category :</span>Women,Men,Kids T-Shirt, Crop Top, Pants</p>
//         <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest, Trendy</p>


//       </div>
//     </div>
//   )
// }

// export default ProductDisplay

import React, { useContext, useState } from 'react';
import './ProductDisplay.css'; 
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplayright">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(234)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
                    <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    The Casual Crewneck T-Shirt is a must-have for any wardrobe, offering both comfort and versatility.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div
                                key={size}
                                onClick={() => handleSizeClick(size)}
                                className={selectedSize === size ? 'selected' : ''}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women, Men, Kids T-Shirt, Crop Top, Pants</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest, Trendy</p>
            </div>
        </div>
    )
}

export default ProductDisplay;



