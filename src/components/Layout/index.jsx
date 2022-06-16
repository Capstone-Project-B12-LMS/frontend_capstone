import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Component

import {Header,Sidebar,Dropdown} from '../'

// Icon

import ExpandIcon from '../../assets/icons/expand-icon.svg';
import AccountIcon from '../../assets/icons/account-icon.svg';
import LogOutIcon from '../../assets/icons/logout-icon.svg';
import AddIcon from '../../assets/icons/add-icon.svg';
import CreateIcon from '../../assets/icons/create-class-icon.svg';
import JoinIcon from '../../assets/icons/join-icon.svg';




const Layout = ({children}) => {

    const [showSidebar,setShowSidebar] = useState(false);
    const {dataLogin} = useSelector((state) => state.login)
    const handleSidebarShow = (e,show = !showSidebar)=> setShowSidebar(show);

    const location = useLocation();
    const navigate = useNavigate();

    const createClass = ()=> alert('create class');
    const joinClass = ()=> alert('join class');
    const logout = ()=> alert('are u sure to logout ?')
    
    
    const dropdownItem = {
        user : [
            {
                icon: AccountIcon,
                text: 'my account',
                type: 'list',
                path: '/myaccount'
            },
            {
                icon: LogOutIcon,
                text: 'logout',
                type: 'button',
                path: null,
                clicked : logout
            }
        ],
        class : [
            {
                icon: CreateIcon,
                type: 'button',
                text: 'create class',
                path: null,
                clicked : createClass
            },
            {
                icon: JoinIcon,
                type: 'button',
                text: 'join class',
                path: null,
                clicked: joinClass
            }
        ]
    }


    useEffect(() => {
        if(location.pathname === '/dashboard') navigate('home' , {replace : true})
    },[location.pathname])



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
                        <span className="text-2xl text-black font-medium mr-4">{dataLogin?.fullName}</span>
                        <img src={ExpandIcon} alt="icon" className="w-[15px] h-[8px]"/>
                    </Dropdown>
                </div>
            </Header>

            <Sidebar isOpen={showSidebar} setIsOpen={handleSidebarShow}/>

            {/* Content area */}

            <div className="px-10 mx-auto max-w-[1600px]">
                { children || <Outlet/> }
            </div>

            {/* End Content Area */}
        </>
    )
}

export default Layout