import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="w-screen h-[10vh] ">
            <div className="flex flex-row gap-10 items-end bg-blue-300 justify-end pb-4 pr-10 h-full">
                <NavLink to='/'>XYZ</NavLink>
                <NavLink to='/'>XYZ</NavLink>
                <NavLink to='/'>XYZ</NavLink>
                <NavLink to='/'>XYZ</NavLink>
                <NavLink to='/'>XYZ</NavLink>
                <div className="w-[5vw] h-[5vh] bg-white text-center flex items-center justify-center rounded-md">Log In</div>
                <div className="w-[5vw] h-[5vh] bg-white text-center flex items-center justify-center rounded-md">Sign Up</div>

            </div>
        </div>
    )
}

export default Navbar;