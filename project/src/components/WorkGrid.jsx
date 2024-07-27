import { DataGrid } from "@mui/x-data-grid";
import ChartsOverviewDemo from "./Charts";
import Data from "./DataGrid";
import InfiniteCarousel from "./Carousel";

function WorkGrid(){
    const titles=["Rain Water Harvesting Report","Economic Report 2023","Maintainence of Roads"]
    const sites=["https://cafeavecdespensees.blogspot.com/2024/07/of-desks-in-municipal-india-detailed.html ","https://cafeavecdespensees.blogspot.com/2024/07/of-desks-in-municipal-india-detailed.html ","https://cafeavecdespensees.blogspot.com/2024/07/of-desks-in-municipal-india-detailed.html "];
    return (
        <div className="flex flex-col h-full w-screen mt-[10vh]">
            {/* <div className="w-screen h-screen"><InfiniteCarousel/></div> */}
            <div className="w-screen h-screen flex flex-row mt-[10vh] gap-[1vw] p-3">
            <div className="flex flex-col gap-[1vw] relative">
                <div className="flex flex-row gap-[1vw]">
                    <div className="w-[33vw] h-[33vh] rounded-lg flex flex-col justify-center items-center border-2 border-gray-400 pt-5 text-[3vh] bg-gray-100 ">
                        <h1 className="uppercase font-extrabold">Reports</h1>
                        <div className="h-full w-full flex flex-col items-start justify-center pl-5 gap-3 mt-[-3vh]">
                            {sites.map((site,index)=>{
                                return (
                                    <a href={site}>{index+1}.{titles[index]}</a>
                                )
                            })}
                        </div>
                        
                    </div>
                    <div className="w-[33vw] h-[33vh] rounded-lg flex items-center justify-center hover:scale-[1.5] duration-500">
                        Analysis Report
                        <ChartsOverviewDemo></ChartsOverviewDemo>
                    </div>
                </div>
                <div className="w-[67vw] h-[45vh] rounded-lg">
                    <Data/>
                </div>
            </div>
            <div className="flex flex-col gap-[1vw]">
            <div className="w-[28vw] h-[60vh] bg-gray-400 rounded-lg">Notice Board</div>
            <div className="w-[28vw] h-[18vh] rounded-lg p-5">
                
            </div>
            </div>
           
        </div>

        </div>
            
    )
}

export default WorkGrid;