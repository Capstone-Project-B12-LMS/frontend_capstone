import { useState } from "react";
import { Outlet } from "react-router-dom";

// Component

import Header from '../Header/Header.jsx';
import Sidebar from "../Sidebar";
import Dropdown from "../Dropdown";

// Icon

import ExpandIcon from '../../images/icons/expand-icon.svg';
import AccountIcon from '../../images/icons/account-icon.svg';
import LogOutIcon from '../../images/icons/logout-icon.svg';
import AddIcon from '../../images/icons/add-icon.svg';
import CreateIcon from '../../images/icons/create-class-icon.svg';
import JoinIcon from '../../images/icons/join-icon.svg';



const Layout = () => {

    const [showSidebar,setShowSidebar] = useState(false);
    const handleSidebarShow = (e,show = !showSidebar)=> setShowSidebar(show);
    
    const dropdownItem = {
        user : [
            {
                icon: AccountIcon,
                text: 'my account',
                path: '/account'
            },
            {
                icon: LogOutIcon,
                text: 'logout',
                path: null
            }
        ],
        class : [
            {
                icon: CreateIcon,
                text: 'create class',
                path: null
            },
            {
                icon: JoinIcon,
                text: 'join class',
                path: null
            }
        ]
    }

    return(
        <>
            <Header usingToggle={true} toggleClick={handleSidebarShow}>
                <div className="flex ml-auto">
                    <Dropdown list={dropdownItem.class}>
                        <img src={AddIcon} alt="icon" className="w-[24px] h-[24px]"/>
                    </Dropdown>
                    <Dropdown list={dropdownItem.user}>
                        <div className="w-[50px] h-[50px] overflow-hidden rounded-full mr-2">
                            <img src="https://i.ibb.co/y0XWBqF/Ellipse-18.png" alt="avatar" />
                        </div>
                        <span className="text-2xl text-black font-medium mr-4">Veronica</span>
                        <img src={ExpandIcon} alt="icon" className="w-[15px] h-[8px]"/>
                    </Dropdown>
                </div>
            </Header>

            <Sidebar isOpen={showSidebar} setIsOpen={handleSidebarShow}/>

            <div className="px-10">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout