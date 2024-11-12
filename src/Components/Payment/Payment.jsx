// import React, { useState } from 'react';
// import './Payment.css'; // Make sure to create this CSS file

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     cardNumber: '',
//     expiration: '',
//     cvv: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the payment processing
//     console.log('Payment details:', formData);
//     alert('Payment Successful!'); // Placeholder for successful payment
//     // Optionally, redirect or clear the cart after payment
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="payment-field">
//           <label htmlFor="name">Name on Card</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="payment-field">
//           <label htmlFor="cardNumber">Card Number</label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="payment-field">
//           <label htmlFor="expiration">Expiration Date (MM/YY)</label>
//           <input
//             type="text"
//             id="expiration"
//             name="expiration"
//             value={formData.expiration}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="payment-field">
//           <label htmlFor="cvv">CVV</label>
//           <input
//             type="text"
//             id="cvv"
//             name="cvv"
//             value={formData.cvv}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit Payment</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentPage;

// import React, { useState } from 'react';
// import './Payment.css'; // Make sure to create this CSS file

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     cardNumber: '',
//     expiration: '',
//     cvv: '',
//     paymentMethod: 'creditCard', // Default payment method
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the payment processing
//     console.log('Payment details:', formData);
//     alert('Payment Successful!'); // Placeholder for successful payment
//     // Optionally, redirect or clear the cart after payment
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="payment-field">
//           <label htmlFor="paymentMethod">Payment Method</label>
//           <select
//             id="paymentMethod"
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//             required
//           >
//             <option value="creditCard">Credit Card</option>
//             <option value="onlinePayment">Online Payment</option>
//           </select>
//         </div>

//         {formData.paymentMethod === 'creditCard' && (
//           <>
//             <div className="payment-field">
//               <label htmlFor="name">Name on Card</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="payment-field">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 name="cardNumber"
//                 value={formData.cardNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="payment-field">
//               <label htmlFor="expiration">Expiration Date (MM/YY)</label>
//               <input
//                 type="text"
//                 id="expiration"
//                 name="expiration"
//                 value={formData.expiration}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="payment-field">
//               <label htmlFor="cvv">CVV</label>
//               <input
//                 type="text"
//                 id="cvv"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </>
//         )}

//         {formData.paymentMethod === 'onlinePayment' && (
//           <div className="payment-field">
//             <label htmlFor="onlineDetails">Online Payment Details</label>
//             <input
//               type="text"
//               id="onlineDetails"
//               name="onlineDetails"
//               placeholder="Enter your online payment info"
//               onChange={handleChange}
//               required
//             />
//           </div>
//         )}

//         <button type="submit">Submit Payment</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState } from 'react';
import './Payment.css'; // Make sure to create this CSS file
import download from '../Assests/download.png' // Update the path to your QR code image

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    onlineDetails: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment details:', formData);
    alert('Payment Successful!'); // Placeholder for successful payment
  };

  return (
    <div className="payment-container">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-field">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="creditCard">Credit Card</option>
            <option value="onlinePayment">Online Payment</option>
          </select>
        </div>

        {formData.paymentMethod === 'creditCard' && (
          <>
            <div className="payment-field">
              <label htmlFor="name">Name on Card</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="payment-field">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="payment-field">
              <label htmlFor="expiration">Expiration Date (MM/YY)</label>
              <input
                type="text"
                id="expiration"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
                required
              />
            </div>
            <div className="payment-field">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {formData.paymentMethod === 'onlinePayment' && (
          <>
            <div className="payment-field">
              <label htmlFor="onlineDetails">Online Payment Details</label>
              <input
                type="text"
                id="onlineDetails"
                name="onlineDetails"
                placeholder="Enter your online payment info"
                onChange={handleChange}
                required
              />
            </div>
            <div className="payment-field qr-code-container">
              <img src={download} alt="QR Code for Online Payment" className="qr-code" />
            </div>
          </>
        )}

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
