import React from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

const Qr = () => {
  const itemName = 'Item1';
  const apiUrl = `http://localhost:3001/decrease-quantity-by-name/${itemName}`;

  const handleScan = async () => {
    console.log(`API URL: ${apiUrl}`);
    try {
      const response = await axios.post(apiUrl);
      console.log('Response data:', response.data);
      alert(`Quantity decreased. New Quantity: ${response.data.newQuantity}`);
    } catch (error) {
      console.error('Error decreasing quantity:', error);
      alert('Error decreasing quantity. Check console for details.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Scan QR Code to Buy Quantity</h1>
    
      <div className=''><QRCode value={apiUrl} size={256} /></div>
      <p>Scan this QR code with your mobile device or click the button to simulate a scan.</p>
      <button onClick={handleScan} className='border-2 border-black bg-white rounded-md p-6'>Simulate Scan</button>
    </div>
  );
};

export default Qr;
