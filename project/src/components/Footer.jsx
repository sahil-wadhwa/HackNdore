import Triangle from "./Triangle";

function Footer(){
    return (
        <div className="w-screen h-[5vh] bg-black flex flex-row self-end">
            <div className="bg-orange-600 w-[5vw] h-full"></div>
            <Triangle/>
        </div>
    )
}
export default Footer;