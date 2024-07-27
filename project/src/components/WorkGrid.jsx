import { DataGrid } from "@mui/x-data-grid";
import ChartsOverviewDemo from "./Charts";
import Data from "./DataGrid";

function WorkGrid(){
    const titles=["Rain Water Harvesting Report","Economic Report 2023","Maintainence of Roads"]
    const sites=["https://cafeavecdespensees.blogspot.com/2024/07/of-desks-in-municipal-india-detailed.html ","https://cafeavecdespensees.blogspot.com/2024/07/of-desks-in-municipal-india-detailed.html ","https://cafeavecdespensees.blogspot.com/2024/07/of-desks-in-municipal-india-detailed.html "];
    return (
        <div className="w-[100vw] h-screen flex flex-row mt-[10vh] gap-[1vw] p-3">
            <div className="flex flex-col gap-[1vw]">
                <div className="flex flex-row gap-[1vw]">
                    <div className="w-[33vw] h-[33vh] bg-gray-400 rounded-lg flex flex-col items-center justify-start">
                        {sites.map((site,index)=>{
                            return (
                                <a href={site}>{titles[index]}</a>
                            )
                        })}
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
                <div className="flex flex-col gap-5">
                    <input placeholder="Write an Announcement" className="w-[25vw] h-[10vh] rounded-lg text-center border-gray-400 border-2"></input>
                    <button className="w-[15vw] h-[7vh] rounded-lg bg-blue-600 text-sm text-white self-center">Post</button>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default WorkGrid;