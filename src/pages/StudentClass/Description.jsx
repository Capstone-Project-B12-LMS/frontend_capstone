const Description = ()=>{
    return(
        <>
            {/* Introduction Class */}
            <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6">
                <h1 className="text-2xl font-bold text-black">Introduction About This Class</h1>
                <div className="w-full h-[400px] rounded-[20px] mt-6 overflow-hidden">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/emSv9TTHZVY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p className="text-black text-xl font-normal mt-6">In this course, you will learn about the process of designing the appearance of an application starting from an introduction to design, how to design and execution in making designs. This course will also give you the opportunity to learn more about application and website design to improve your skills in making a design look more effective and efficient.</p>
            </div>

            {/* Class Member */}

            <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] py-6 mt-6">
                <div className="flex justify-between px-6">
                    <h1 className="text-2xl font-bold text-black">Class Members</h1>
                    <span className="text-black font-normal text-xl">16+ Members</span>
                </div>
                <div className="flex flex-col mt-4">

                    {/* List Members */}

                    <div className="bg-white w-full mt-2 px-6 py-4 flex shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]">
                        <div className="w-[50px] h-[50px] rounded-full mr-4 overflow-hidden">
                            <img src="https://i.ibb.co/nwbqL4K/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg" 
                                alt="student-avatar" 
                                className="w-full h-full object-cover object-center"
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl text-bold font-bold">Boby Nasution</h3>
                            <span className="text-base text-[#A8A8A8] font-normal">Role</span>
                        </div>
                    </div>

                    <div className="bg-white w-full mt-2 px-6 py-4 flex shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]">
                        <div className="w-[50px] h-[50px] rounded-full mr-4 overflow-hidden">
                            <img src="https://i.ibb.co/nwbqL4K/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg" 
                                alt="student-avatar" 
                                className="w-full h-full object-cover object-center"
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl text-bold font-bold">Boby Nasution</h3>
                            <span className="text-base text-[#A8A8A8] font-normal">Role</span>
                        </div>
                    </div>

                    <div className="bg-white w-full mt-2 px-6 py-4 flex shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]">
                        <div className="w-[50px] h-[50px] rounded-full mr-4 overflow-hidden">
                            <img src="https://i.ibb.co/nwbqL4K/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg" 
                                alt="student-avatar" 
                                className="w-full h-full object-cover object-center"
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl text-bold font-bold">Boby Nasution</h3>
                            <span className="text-base text-[#A8A8A8] font-normal">Role</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Description