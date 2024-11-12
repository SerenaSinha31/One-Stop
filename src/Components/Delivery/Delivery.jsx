// import React from 'react';
// import './Delivery.css'; // Create this CSS file for styling

// const Delivery = ({ onProceed, onCancel }) => {
//   const deliveryOptions = [
//     { id: 1, method: 'Standard Delivery', cost: 'Free (3-5 days)' },
//     { id: 2, method: 'Express Delivery', cost: 'Rs. 100 (1-2 days)' },
//     { id: 3, method: 'Same Day Delivery', cost: 'Rs. 250 (within 24 hours)' },
//   ];

//   return (
//     <div className="delivery-options-modal">
//       <h2>Select Delivery Option</h2>
//       <ul>
//         {deliveryOptions.map(option => (
//           <li key={option.id}>
//             <label>
//               <input type="radio" name="delivery" value={option.method} />
//               {option.method} - {option.cost}
//             </label>
//           </li>
//         ))}
//       </ul>
//       <div className="delivery-options-buttons">
//         <button onClick={onProceed}>Proceed to Payment</button>
//         <button onClick={onCancel}>Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default Delivery;

import React, { useState } from 'react';
import './Delivery.css'; // Make sure to style this in your CSS file

const Delivery = ({ onProceed, onCancel }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [address, setAddress] = useState('');

  const deliveryOptions = [
    { id: 1, method: 'Standard Delivery', cost: 'Free (3-5 days)' },
    { id: 2, method: 'Express Delivery', cost: 'Rs. 100 (1-2 days)' },
    { id: 3, method: 'Same Day Delivery', cost: 'Rs. 250 (within 24 hours)' },
  ];

  const handleProceed = () => {
    if (!selectedOption || !address) {
      alert("Please select a delivery option and enter your address.");
      return;
    }
    onProceed(); // Call the function passed in from props
  };

  return (
    <div className="delivery-options-modal">
      <h2>Select Delivery Option</h2>
      <ul>
        {deliveryOptions.map(option => (
          <li key={option.id}>
            <label>
              <input 
                type="radio" 
                name="delivery" 
                value={option.method} 
                onChange={(e) => setSelectedOption(e.target.value)} 
              />
              {option.method} - {option.cost}
            </label>
          </li>
        ))}
      </ul>
      <div className="address-input">
        <label>
          Delivery Address:
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Enter your address here"
            required
          />
        </label>
      </div>
      <div className="delivery-options-buttons">
        <button onClick={handleProceed}>Proceed to Payment</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Delivery;

