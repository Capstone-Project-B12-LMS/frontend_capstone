const UserList = ({avatar , name})=>{
    return(
        <div className="bg-white w-full mt-2 px-6 py-4 flex shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]">
            <div className="w-[50px] h-[50px] rounded-full mr-4 overflow-hidden">
                <img src={avatar} 
                    alt="student-avatar" 
                    className="w-full h-full object-cover object-center"
                    draggable="false"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-xl text-bold font-bold capitalize">{name}</h3>
                <span className="text-base text-[#A8A8A8] font-normal">Role</span>
            </div>
        </div>
    )
}

export default UserList