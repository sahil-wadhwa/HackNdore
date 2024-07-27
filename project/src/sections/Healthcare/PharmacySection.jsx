import { HashLink as Link } from 'react-router-hash-link';
import './HospitalSection.css'

function PharmacySection(){
    return (
        <div className="flex flex-col w-screen h-full overflow-hidden scroll-smooth">
            <div className="navbar flex flex-row h-[10vh] w-screen bg-black gap-10 justify-end items-center text-white pr-[5vw] scroll-smooth">
                <Link to="#analytics"  className="hover:text-gray-600 duration-300">Analytics</Link>
                <Link to="#inventory" className="hover:text-gray-600 duration-300">Inventory</Link>
                <Link to="#danger" className="hover:text-gray-600 duration-300">Danger</Link>

            </div>
            <div id="analytics" className="flex flex-row w-screen h-screen bg-white p-10 gap-5 overflow-hidden">
                <div className='h-full w-1/3 bg-black'></div>
                <div className='h-full w-2/3 bg-black flex flex-col border-2'>
                    <div className='h-[10%] w-full bg-white flex-row flex justify-evenly text-lg items-center'>
                        <div className='h-full w-full border-2 text-center'>Field 1</div>
                        <div className='h-full w-full border-2 text-center'>Field 2</div>
                        <div className='h-full w-full border-2 text-center'>Field 3</div>
                        <div className='h-full w-full border-2 text-center'>Field 4</div>
                        <div className='h-full w-full border-2 text-center'>Field 5</div>

                    </div>
                </div>

            </div>
            <div id="inventory" className="flex flex-row w-screen h-screen bg-gray-600 p-6 overflow-hidden">
            <div className='h-full w-full bg-black flex flex-col border-2'>
                    <div className='h-[10%] w-full bg-white flex-row flex justify-evenly text-lg items-center'>
                        <div className='h-full w-full border-2 text-center'>Field 1</div>
                        <div className='h-full w-full border-2 text-center'>Field 2</div>
                        <div className='h-full w-full border-2 text-center'>Field 3</div>
                        <div className='h-full w-full border-2 text-center'>Field 4</div>
                        <div className='h-full w-full border-2 text-center'>Field 5</div>

                    </div>
                </div>
            </div>
            <div id="danger" className="flex flex-row w-screen h-screen bg-slate-400 overflow-hidden"></div>

        </div>
    )
}

export default PharmacySection;