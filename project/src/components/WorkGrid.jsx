function WorkGrid(){
    return (
        <div className="w-[100vw] h-screen flex flex-row mt-[10vh] gap-[1vw] p-3">
            <div className="flex flex-col gap-[1vw]">
                <div className="flex flex-row gap-[1vw]">
                    <div className="w-[33vw] h-[33vh] bg-gray-400">Reports</div>
                    <div className="w-[33vw] h-[33vh] bg-gray-400">Analysis</div>
                </div>
                <div className="w-[67vw] h-[45vh] bg-gray-400">Complaints</div>
            </div>
            <div className="flex flex-col gap-[1vw]">
            <div className="w-[28vw] h-[60vh] bg-gray-400">Notice Board</div>
            <div className="w-[28vw] h-[18vh] bg-gray-400">Announcements</div>
            </div>
           
        </div>
    )
}

export default WorkGrid;