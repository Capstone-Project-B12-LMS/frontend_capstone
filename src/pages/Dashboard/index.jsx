import { useState } from "react";

import Sidebar from "../../components/Sidebar";


const Dashboard = () => {

    const [showSidebar,setShowSidebar] = useState(true);
    const handleSidebarShow = ()=> setShowSidebar(!showSidebar);
    
    return(
        <Sidebar isOpen={showSidebar} setIsOpen={handleSidebarShow}/>
    )
}

export default Dashboard