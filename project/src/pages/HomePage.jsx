import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import WorkGrid from "../components/WorkGrid";

function HomePage(){
    return (
        <div className="App flex flex-col overflow-hidden">
      <div className='fixed top-0 z-10'><Navbar/></div>
      <div className=""><Video/></div>
      <div className="mt-[10vh] w-screen h-screen"><WorkGrid/></div>
      <div className='align-bottom fixed bottom-0'><Footer/></div>
      
    </div>
    )
}
export default HomePage;