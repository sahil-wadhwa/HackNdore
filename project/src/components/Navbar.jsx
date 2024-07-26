import { NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import { useState } from "react";
import Logo from "./Logo";

 
function Navbar(){
    const[hide,setHide]=useState("hidden");
    const healthcare=["Hospitals","Pharmacies","Warehouse"]
    const tenders=["Current Tenders","Generate Tenders","Upcoming Tenders"];
    const transport=["Buses","Road","City Vans"];
    const water=["Leakages","Supply","Requests"];
    const[category,setcategory]=useState(healthcare);

    return(
        <div className="w-screen h-[10vh] ">
            <div className="flex flex-row gap-10 items-end bg-black justify-between pb-4 pr-10 h-full text-white">
                <div className="ml-4"><Logo/></div>
                <div className="flex flex-row gap-10 items-end text-white">
                    <div onMouseEnter={()=>{setHide("flex");setcategory(healthcare)}}  className="flex flex-row items-baseline gap-2 group"><NavLink to='/'>Healthcare</NavLink><div className="rotate-[90deg] group-hover:rotate-[270deg] duration-500"><FaGreaterThan size={10}/></div></div>
                    <div onMouseEnter={()=>{setHide("flex");setcategory(tenders)}} className="flex flex-row items-baseline gap-2 group"><NavLink to='/'>Tenders</NavLink><div className="rotate-[90deg] group-hover:rotate-[270deg] duration-500"><FaGreaterThan size={10}/></div></div>
                    <div onMouseEnter={()=>{setHide("flex");setcategory(transport)}} className="flex flex-row items-baseline gap-2 group"><NavLink to='/'>Transport</NavLink><div className="rotate-[90deg] group-hover:rotate-[270deg] duration-500"><FaGreaterThan size={10}/></div></div>
                    <div onMouseEnter={()=>{setHide("flex");setcategory(water)}} className="flex flex-row items-baseline gap-2 group"><NavLink to='/'>Water</NavLink><div className="rotate-[90deg] group-hover:rotate-[270deg] duration-500"><FaGreaterThan size={10}/></div></div>
                    <div className="w-[5vw] h-[5vh] bg-white text-center flex items-center justify-center rounded-md text-black hover:bg-black hover:text-white duration-500 cursor-pointer">Log Out</div>
                </div>
            </div>
            <div onMouseLeave={()=>{setHide("hidden")}} className={`w-screen h-[20vh] group bg-white border-2 ${hide} duration-500 transition-all flex-row justify-stretch items-center`}>
                {category.map((name)=>{
                    return <div className="text-[3.5vh] text-black w-1/3 text-start h-full duration-500 hover:scale-90 cursor-pointer">{name}</div>
                })}
                
            </div>
        </div>
    )
}

export default Navbar;