import { useState } from "react";
import TenderData from "../../components/TenderData";
import { NavLink } from "react-router-dom";

function CurrentTSection(){
    const field=["Item Name","Quantity","Weight","Price(per unit)","Sector","Date","Time"]
    const items=["Item1","Item2","Item3","Item4","Item5"]
    const [form,showForm]=useState(false);
    const [item,setItem]=useState("tubelight");

    function setX(e){
      // e.preventDefault;
      showForm(true);
      setItem(e.target.value);
    }

    return (
      <div className="w-screen h-screen overflow-x-hidden">
        <nav className="bg-white w-screen h-[10vh] flex justify-end items-center pr-4 text-black ">
          <ul className="flex gap-6 mr-6 justify-between">
            <li className="">
              <NavLink to="/tenders/generate tenders" href="#" className="text-lg hover:text-gray-300">Raise Tender</NavLink>
            </li>
            <li className="">
              <a href="#" className="text-lg hover:text-gray-300">Current Tenders List</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-gray-300">Complaints</a>
            </li>
          </ul>
        </nav>

        <div className=" flex flex-row gap-5  mt-3 p-2 w-[100vw] h-[80vh]  bg-white">
        
          <div className=" w-full h-full flex flex-col bg-gray-200 rounded-lg "> 
            <div className=" w-[100%] h-[12%]  rounded-lg p-2 bg-gray-700">
              <ul className="flex gap-3 text-white">
                <div className=" text-black">
                   <select className="rounded-lg uppercase font-bold" defaultValue={"option1"} onChange={()=>setX}>
                     <option value="option1" className="uppercase font-bold" disabled={true}>Items</option>
                     <option value="Paint">Paint</option>
                     <option value="Tubelight">Tubelight</option>
                     <option value="Furniture">Furniture</option>
                     <option value="Desktops">Desktops</option>
                   </select>
                </div>
              </ul>

            </div>
            <TenderData item={item}/>
          </div>

        </div>

        <div className="flex flex-row gap-5  mt-3 p-2 w-[100vw] h-[50vh]  bg-white">
          <div className="w-[40vw] h-[40vh] bg-gray-400 rounded-lg">
             Bidding
          </div>
          <div className="w-[60vw] h-[40vh] bg-gray-400 rounded-lg">
          <div className="p-4">
            <ul className="">
              {items.map((item)=>{
                return (
                  <div className="w-full h-[5.5vh] m-2 rounded-md border-2 flex flex-row justify-between">
                    <div>{item}</div>
                    <div className="flex flex-row gap-2">
                    <input name="check" type="checkbox"></input>
                    <label for="check">Accept</label>
                    </div>
                    
                    <div className="flex flex-row gap-2">
                    <input name="check2" type="checkbox"></input>
                    <label for="check2">Reject</label>
                    </div>

                  </div>
                )
              })}
            </ul>
          </div>
          </div>
        </div>

        <div className="bg-teal-400 w-[100vw] h-[100vh]" >


        </div>



      </div>
    )
}
  
export default CurrentTSection;