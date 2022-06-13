import React, { useEffect } from "react";
import { Header, Sidebar, Dropdown } from "../components";
import MyAccountInput from "../components/MyAccountInput";
import ExpandIcon from "../assets/icons/expand-icon.svg";
import AccountIcon from "../assets/icons/account-icon.svg";
import LogOutIcon from "../assets/icons/logout-icon.svg";
import AddIcon from "../assets/icons/add-icon.svg";
import CreateIcon from "../assets/icons/create-class-icon.svg";
import JoinIcon from "../assets/icons/join-icon.svg";
import { useState } from "react";
import useGetUser from "../graphql/GetUser";
import jwtDecode from "jwt-decode";

const MyAccount = () => {
  const [userId, setUserId] = useState('')
  const getId = () =>{
    const decoded = jwtDecode(localStorage.getItem("token"));
    setUserId(decoded.userId);
  }
  useEffect(()=>{
    getId();
  }, [])
  
  const { data, loading, error } = useGetUser(userId);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarShow = (e, show = !showSidebar) => setShowSidebar(show);
  const logout = () => alert("are u sure to logout ?");
  const dropdownItem = {
    user: [
      {
        icon: AccountIcon,
        text: "my account",
        type: "list",
        path: "/account",
      },
      {
        icon: LogOutIcon,
        text: "logout",
        type: "button",
        path: null,
        clicked: logout,
      },
    ],
    class: [
      {
        icon: CreateIcon,
        type: "button",
        text: "create class",
        path: null,
      },
      {
        icon: JoinIcon,
        type: "button",
        text: "join class",
        path: null,
      },
    ],
  };
 
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data.user.findById)
  return (
    <>
      <Header usingToggle={true} toggleClick={handleSidebarShow}>
        <div className="flex ml-auto">
          <Dropdown list={dropdownItem.class}>
            <img src={AddIcon} alt="icon" className="w-[24px] h-[24px]" />
          </Dropdown>
          <Dropdown list={dropdownItem.user}>
            <div className="w-[50px] h-[50px] overflow-hidden rounded-full mr-2">
              <img src="https://i.ibb.co/y0XWBqF/Ellipse-18.png" alt="avatar" />
            </div>
            <span className="text-2xl text-black font-medium mr-4">
              Veronica
            </span>
            <img src={ExpandIcon} alt="icon" className="w-[15px] h-[8px]" />
          </Dropdown>
        </div>
      </Header>
      <Sidebar isOpen={showSidebar} setIsOpen={handleSidebarShow} />
      <div className="flex justify-center mt-10">
        <div className="w-[85%] flex justify-between p-20 rounded-[20px] shadow-[4px_2px_8px_0px_rgba(0,0,0,0.25)]">
          <form className="w-1/2">
            <h2 className="font-medium text-[32px] mb-10">My Account</h2>
            <MyAccountInput inputFor="name" />
            <MyAccountInput inputFor="email" />
            <MyAccountInput inputFor="phone number" />
            <MyAccountInput inputFor="occupation" />
          </form>
          <div className="w-1/2 flex justify-center items-center">
              <img src={require("../assets/img/myaccount.png")}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
