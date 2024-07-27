import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import WorkGrid from "../components/WorkGrid";
import LinkSection from "../components/LinksSection";

function HomePage({ setLoginUser }) {
  return (
    <div className="App flex flex-col overflow-hidden">
    <div className ='fixed top-0 z-10'><Navbar setLoginUser={setLoginUser}/></div>
    <div className=""><Video/></div>
    <div className="mt-[10vh] w-screen h-screen"><WorkGrid/></div>
    <div><LinkSection/></div>
    <div className='align-bottom fixed bottom-0'><Footer/></div>
    

  </div>
  );
}

export default HomePage;