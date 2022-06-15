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
import { useSelector } from "react-redux";
import { Button } from "../components";
import useUpdateAccount from "../graphql/UpdateAccount";

const MyAccount = () => {
  const { insertAccountData, data, loading, error } = useUpdateAccount();
  const [accountData, setAccountData] = useState({
    fullName: "",
    email: "",
    telepon: "",
  });
  const { dataLogin } = useSelector((state) => state.login);

  useEffect(() => {
    setAccountData({
      fullName: dataLogin?.fullName,
      email: dataLogin?.email,
      telepon: dataLogin?.telepon,
    });
  }, [dataLogin]);

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

  const handleChange = (type, value) => {
    const tempObj = {};
    tempObj[type] = value;
    let newObj = Object.assign({}, accountData, tempObj);
    setAccountData(newObj);
  };

  const submitAccountChange = (e) => {
    e.preventDefault();
    insertAccountData({
      variables: {
        id: dataLogin.id,
        fullName: accountData.fullName,
        telepon: accountData.telepon,
        email: accountData.email,
      },
    });
  };
  if (error) return <pre>{error.message}</pre>;

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
              {dataLogin?.fullName}
            </span>
            <img src={ExpandIcon} alt="icon" className="w-[15px] h-[8px]" />
          </Dropdown>
        </div>
      </Header>
      <Sidebar isOpen={showSidebar} setIsOpen={handleSidebarShow} />
      <div className="flex justify-center mt-10">
        <div className="w-[85%] flex justify-between p-20 rounded-[20px] shadow-[4px_2px_8px_0px_rgba(0,0,0,0.25)]">
          <form className="w-1/2" onSubmit={submitAccountChange}>
            <h2 className="font-medium text-[32px] mb-10">My Account</h2>
            <MyAccountInput
              inputFor="name"
              value={accountData?.fullName}
              handleChange={handleChange}
            />
            <MyAccountInput
              inputFor="email"
              value={accountData?.email}
              handleChange={handleChange}
            />
            <MyAccountInput
              inputFor="telepon"
              value={accountData?.telepon}
              handleChange={handleChange}
            />
            <MyAccountInput inputFor="occupation" />
            <Button
              text="Change"
              formBtn={true}
              styling="py-4 mb-8 text-xl font-medium w-[100px] rounded-[10px]"
            />
          </form>
          <div className="w-1/2 flex justify-center items-center">
            <img src={require("../assets/img/myaccount.png")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
