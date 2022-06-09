import { useRef } from "react";
import { useClickOutSide } from "../../customHooks/useClickOutside"


// Component

import BrandLogo from "./BrandLogo";
import ItemList from "./ItemList";

// Logo & Icon

import HomeIcon from '../../images/icons/home-icon.svg';
import BookIcon from '../../images/icons/book-icon.svg';
import HistoryIcon from '../../images/icons/history-icon.svg';
import SettingsIcon from '../../images/icons/settings-icon.svg';



const Sidebar = ({ isOpen, setIsOpen }) => {

  const ref = useRef(null);
  useClickOutSide(ref,isOpen,setIsOpen)

  const sidebarItem = [
    {
        icon:HomeIcon,
        text:'dashboard',
        path:'home',
    },
    {
        icon:BookIcon,
        text:'my class',
        path:'class',
    },
    {
        icon:HistoryIcon,
        text:'history',
        path:'history',
    },
    {
        icon:SettingsIcon,
        text:'settings',
        path:'settings',
    },
  ]

  return (
    <div className={`fixed inset-0 w-screen height-screen bg-[rgba(0,0,0,0.5)] inset-y-0 ease-[0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)] duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <aside ref={ref} className={`flex flex-col justify-items-center w-[320px] h-screen pb-10 bg-light-blue fixed ease-[0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)] duration-500 ${isOpen ? 'left-0' : 'left-[-320px]'}`} >
        <BrandLogo wrapperImgStyle='w-[200px] h-[50px]' logoClick={(e)=>setIsOpen(e,false)}/>
        <ul className="list-none w-full overflow-x-hidden mt-4">
          {
              sidebarItem.map(item => (
                  <li className="h-[80px] hover:bg-dark-blue" key={item.text} onClick={setIsOpen}>
                      <ItemList {...item} spacing='pl-8'/>
                  </li>
              ))
          }
        </ul>
      </aside>
    </div>
  );
};


export default Sidebar;
