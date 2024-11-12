// import React, { createContext, useState } from "react";
// import all_product from "../Components/Assests/all_product";


// export const ShopContext = createContext(null);
// const getDefaultCart=()=>{
//     let cart={};
//     for(let index=0;index<all_product.length+1;index++){
//         cart[index]=0;
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {
//     const[cartItems,setCartItems]=useState(getDefaultCart());

  
   

    
//     const addToCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         console.log(cartItems);
//     }

    
//     const removeFromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
//     const getTotalCartAmount=()=>{
//         let totalAmount=0;
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 let itemInfo=all_product.find((product)=>product.id===Number(item))
//                 totalAmount+=itemInfo.new_price * cartItems[item];
//             }
//         }
//         return totalAmount;
//     }
//     const getTotalCartItems=()=>{
//         let totalItem=0;
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 totalItem+=cartItems[item];
//             }
//         }
//         return totalItem;
//     }

//     const contextValue = { getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart };
    
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// }

// export default ShopContextProvider;


import React, { createContext, useState } from "react";
import all_product from "../Components/Assests/all_product";

export const ShopContext = createContext(null);

// Function to initialize the cart with all products set to a quantity of 0
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
        console.log(cartItems);
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(prev[itemId] - 1, 0)
        }));
    };

    // Function to clear the cart (reset all quantities to 0)
    const clearCart = () => {
        setCartItems(getDefaultCart());
    };

    // Calculate total cart amount based on item prices and quantities
    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((totalAmount, itemId) => {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(itemId));
                totalAmount += itemInfo.new_price * quantity;
            }
            return totalAmount;
        }, 0);
    };

    // Calculate the total number of items in the cart
    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((totalItems, quantity) => totalItems + quantity, 0);
    };

    // Context value to provide to components
    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCartAmount,
        getTotalCartItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

