import React, { useState } from 'react';

function GenerateTSection() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadFiles = () => {
    if (file) {
      // Open system file uploader
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.click();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-white py-4">
        <div className="container mx-auto p-4 flex justify-between">
          <h1 className="text-lg font-bold">Generate Tender </h1>
          <ul className="flex md-5">
            <li>
              <a href="/" className="text-black hover:text-gray-600  border-2 bg-white transition duration-300 ease-in-out">
                Back
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex-1 overflow-y-auto p-4">
        <form className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-gray-300 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Generate T Section</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item">
              Choose Item
            </label>
            <select
              id="item"
              className="block w-full pl-10  border-2 text-sm text-gray-700"
              required
            >
              <option value="">Select an option</option>
              <option value="rocks">Rocks</option>
              <option value="mud">Mud</option>
              <option value="stone">Stone</option>
              <option value="iron">Iron</option>
              <option value="plastic">Plastic</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pricePerUnit">
              Price per Unit
            </label>
            <input
              type="number"
              id="pricePerUnit"
              className="block w-full pl-10  border-2 text-sm text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Weight
            </label>
            <input
              type="number"
              id="weight"
              className="block w-full pl-10 border-2 text-sm  text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm   font-bold mb-2" htmlFor="numUnits">
              Number of Units
            </label>
            <input
              type="number"
              id="numUnits"
              className="block w-full pl-10 text-sm border-2 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm  font-bold mb-2" htmlFor="basePrice">
              Base Price to be Sold
            </label>
            <input 
              type="number"
              id="basePrice"
              className="block w-full pl-10 border-2 text-sm text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="biddingTime">
              Time of Bidding
            </label>
            <input
              type="datetime-local"
              id="biddingTime"
              className="block w-full pl-10 text-sm text-gray-700"
              required
            />
          </div>
          <div className="flex justify-between mb-4 gap-4">
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className="bg-gray-400 hover:bg-black text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleUploadFiles}
            >
              Upload Files
            </label>
            <button
              type="save"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py2 px-4 rounded w-full"
            >
              Save
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Submit
            </button>
            
          </div>  
          <div className='text-black'>Uploaded File: {file!=null?file.name:null}</div>
  
        </form> 
      </div>

    </div>
  );
}

export default GenerateTSection;