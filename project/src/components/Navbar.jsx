import { NavLink , useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [hide, setHide] = useState("hidden");
  const healthcare = ["Hospitals", "Pharmacies", "Warehouse"];
  const tenders = ["Current Tenders", "Generate Tenders", "Upcoming Tenders"];
  const transport = ["Buses", "Road", "City Vans"];
  const water = ["Leakages", "Supply", "Requests"];
  const [category, setCategory] = useState(healthcare);
  const [link,setLink]=useState("/");

  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  

  return (
    <div className="w-screen h-[10vh] hover:h-[40vh] duration-500">
      <div className="flex flex-col gap-4 bg-black pr-10 h-full text-white overflow-hidden items-end justify-start">
        <div className="flex flex-row h-full w-screen justify-between">
          <div className="ml-[5vw] mt-[4vh]">
            <Logo />
          </div>
          <div className="flex flex-row gap-10 text-white place-items-baseline pt-3">
            <div
              onMouseEnter={() => {
                setHide("flex");
                setCategory(healthcare);
                setLink('/healthcare');
              }}
              className="flex flex-row items-baseline gap-2 group"
            >
              <NavLink to="/">Healthcare</NavLink>
              <div className="rotate-[0]  group-hover:rotate-[180deg] duration-500">
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setHide("flex");
                setCategory(tenders);
                setLink('/tenders');
              }}
              className="flex flex-row items-baseline gap-2 group"
            >
              <NavLink to="/">Tenders</NavLink>
              <div className="rotate-[0] group-hover:rotate-[180deg] duration-500">
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setHide("flex");
                setCategory(transport);
                setLink('/transport');
              }}
              className="flex flex-row items-baseline gap-2 group"
            >
              <NavLink to="/">Transport</NavLink>
              <div className="rotate-[0] group-hover:rotate-[180deg] duration-500">
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setHide("flex");
                setCategory(water);
                setLink('/water');
              }}
              className="flex flex-row items-baseline gap-2 group"
            >
              <NavLink to="/">Water</NavLink>
              <div className="rotate-[0] group-hover:rotate-[180deg] duration-500">
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div onClick={handleLogout}
 className="w-[5vw] h-[5vh] bg-white text-center flex items-center justify-center rounded-md text-black hover:bg-black hover:text-white duration-500 cursor-pointer">
              Log Out
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-3">
        {category.map((name) => (
          <NavLink to={`${link}/${name}`}
            key={name}
            className="text-[3vh] text-white  font-extrabold cursor-pointer"
          >
            {name}
          </NavLink>
        
        ))}
        </div>
      </div>
      
      
    </div>
  );
}

export default Navbar;
