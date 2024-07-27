import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import WorkGrid from "../components/WorkGrid";
import LinkSection from "../components/LinksSection";
import VantaComponent from "../components/VantaComponent";
import InfiniteCarousel from "../components/Carousel";

function HomePage({ setLoginUser }) {
  return (
    <div className="App flex flex-col overflow-hidden">
      <div className ='fixed top-0 z-10'><Navbar setLoginUser={setLoginUser}/></div>
      <div className="relative"><Video/></div>
      <div className="w-screen mb-[-50vh] h-full"><InfiniteCarousel/></div>
      {/* <div className="w-screen h-screen "><InfiniteCarousel/></div> */}
      <div className="mt-[30vh] w-screen h-screen"><WorkGrid/></div>
      <div className="w-screen h-full static"><LinkSection/></div>
    <div className='align-bottom fixed bottom-0'><Footer/></div>
    

  </div>
  );
}

export default HomePage;