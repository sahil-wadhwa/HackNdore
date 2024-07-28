import { HashLink as Link } from 'react-router-hash-link';
import './HospitalSection.css'
import DataSupplies from '../../components/DataSupplies';


const fetchSupplies = async () => {
    try {
      const response = await fetch('http://localhost:3000/supplies',{ mode: 'no-cors' });
      if (!response.ok) {
        throw new Error(`Error fetching supplies: ${response.message}`);
      }
      const data = await response.json();
      console.log('Supplies:', data);
    } catch (error) {
      console.error('Error fetching supplies:', error);
    }
  };
  
  // Call the function to fetch supplies
  fetchSupplies();

function HospitalSection(){
    return (
        <div className="flex flex-col w-screen h-full overflow-hidden scroll-smooth">
            <div className="navbar flex flex-row h-[10vh] w-screen bg-black gap-10 justify-end items-center text-white pr-[5vw] scroll-smooth">
                <Link to="#analytics"  className="hover:text-gray-600 duration-300">Analytics</Link>
                <Link to="#inventory" className="hover:text-gray-600 duration-300">Inventory</Link>
                <Link to="#danger" className="hover:text-gray-600 duration-300">Danger</Link>

            </div>
            <div id="analytics" className="flex flex-row w-screen h-screen bg-white p-10 gap-5 overflow-hidden">
                <div className='h-full w-1/3 bg-black'></div>
                <div className='h-full w-2/3  flex flex-col border-2'>
                    
                </div>

            </div>
            <div id="inventory" className="flex flex-row w-screen h-screen  p-6 overflow-hidden">
            <div className='h-full w-full flex flex-col border-2'>
            <DataSupplies/>
                </div>
            </div>
            <div id="danger" className="flex flex-row w-screen h-screen bg-slate-400 overflow-hidden"></div>

        </div>
    )
}

export default HospitalSection;