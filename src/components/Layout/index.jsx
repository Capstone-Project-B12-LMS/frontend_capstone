import { useState } from "react";
import { Outlet } from "react-router-dom";
import Popup from "reactjs-popup";

// Component

import { Header, Sidebar, Dropdown, PopUp, Button } from '../'

// Icon

import ExpandIcon from '../../assets/icons/expand-icon.svg';
import AccountIcon from '../../assets/icons/account-icon.svg';
import LogOutIcon from '../../assets/icons/logout-icon.svg';
import AddIcon from '../../assets/icons/add-icon.svg';
import CreateIcon from '../../assets/icons/create-class-icon.svg';
import JoinIcon from '../../assets/icons/join-icon.svg';



const Layout = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const handleSidebarShow = (e, show = !showSidebar) => setShowSidebar(show);

    const createClass = () => alert('create class');
    const joinClass = () => alert('join class');
    const logout = () => alert('are u sure to logout ?')

    const [classCode, setClassCode] = useState("");
    const HandleSubmitJoin = (e) => {
        e.preventDefault();
        setClassCode("");
    }

    const [inputs, setInputs] = useState([
        {
            placeholder: "Class Name",
            type: "text",
            value: "",
        },
        {
            placeholder: "Subject",
            type: "text",
            value: "",
        },
        {
            placeholder: "Room",
            type: "number",
            value: "",
        },
        {
            placeholder: "End Date",
            type: "date",
            value: "",
        },
    ])

    const HandleSubmitCreate = (e) => {
        e.preventDefault();
        setInputs([
            {
                placeholder: "Class Name",
                type: "text",
                value: "",
            },
            {
                placeholder: "Subject",
                type: "text",
                value: "",
            },
            {
                placeholder: "Room",
                type: "number",
                value: "",
            },
            {
                placeholder: "End Date",
                type: "date",
                value: "",
            },
        ]);
    }

    const HandleChange = (value, index) => {
        const newInput = { ...inputs[index], value };
        const newInputs = [...inputs];
        newInputs[index] = newInput;
        setInputs(newInputs);
    };

    const dropdownItem = {
        user: [
            {
                icon: AccountIcon,
                text: 'my account',
                type: 'list',
                path: '/account'
            },
            {
                icon: LogOutIcon,
                text: 'logout',
                type: 'button',
                path: null,
                clicked: logout
            }
        ],
        class: [
            {
                icon: CreateIcon,
                type: 'button',
                text: 'create class',
                path: null,
                clicked: createClass
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

    return (
        <>
            <Popup
                trigger={
                    <button
                        id="JoinClass"
                        className="text-normal font-medium px-6 py-2 rounded-[20px] mr-4 border hover:bg-transparent hover:text-[#415A80] hover:border-[#415A80] hidden"
                    >Join Class</button>
                }
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            <div className="text-black">X</div>
                        </button>
                        <PopUp
                            title={"Input Class Code"}
                            description={"Ask the admin or mentor for the class code, then enter the code here"}
                            style1={"flex items-center justify-center mt-[2rem]"}
                            style2={"flex flex-col items-center justify-center bg-[#fff] rounded-[30px]"}
                        >
                            <form onSubmit={HandleSubmitJoin} className="mt-[2rem] gap-2">
                                <input
                                    required
                                    type="text"
                                    placeholder="Input Class Code"
                                    className="border-[1px] px-4 rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[24px] text-[24px]"
                                    value={classCode}
                                    onChange={(e) => setClassCode(e.target.value)}
                                />
                                <Button
                                    formBtn={true}
                                    styling={"rounded-[15px] w-full mt-10 h-[62px] text-[20px] font-bold"}
                                    text={"JOIN"}
                                />
                            </form>
                        </PopUp>
                    </div>
                )}
            </Popup>

            <Popup
                trigger={
                    <button
                        id="CreateClass"
                        className="text-normal font-medium px-6 py-2 rounded-[20px] border border-[#415A80] text-[#415A80] bg-transparent hover:bg-[#415A80] hover:text-white hidden"
                    >Create Class</button>
                }
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            <div className="text-black">X</div>
                        </button>
                        <PopUp
                            title={"Create Class"}
                            style1={"flex items-center justify-center mt-[1rem]"}
                            style2={"w-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]"}
                        >
                            <form onSubmit={HandleSubmitCreate}>
                                {
                                    inputs.map((input, inputIdx) => (
                                        <input
                                            key={inputIdx}
                                            required
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            value={input.value}
                                            className="border-[1px] px-4 rounded-[10px] border-[#D9D9D9] w-full h-[62px] placeholder:text-[24px] text-[24px] my-2"
                                            onChange={(e) => HandleChange(e.target.value, inputIdx)}
                                        />
                                    ))
                                }
                                <Button
                                    formBtn={true}
                                    styling={"rounded-[15px] w-full mt-2 h-[62px] text-[20px] font-bold"}
                                    text={"Create"}
                                />
                            </form>
                        </PopUp>
                    </div>
                )}
            </Popup>


            <Header usingToggle={true} toggleClick={handleSidebarShow}>
                <div className="flex ml-auto">
                    <Dropdown list={dropdownItem.class}>
                        <img src={AddIcon} alt="icon" className="w-[24px] h-[24px]" />
                    </Dropdown>
                    <Dropdown list={dropdownItem.user}>
                        <div className="w-[50px] h-[50px] overflow-hidden rounded-full mr-2">
                            <img src="https://i.ibb.co/y0XWBqF/Ellipse-18.png" alt="avatar" />
                        </div>
                        <span className="text-2xl text-black font-medium mr-4">Veronica</span>
                        <img src={ExpandIcon} alt="icon" className="w-[15px] h-[8px]" />
                    </Dropdown>
                </div>
            </Header>

            <Sidebar isOpen={showSidebar} setIsOpen={handleSidebarShow} />

            {/* Content area */}

            <div className="px-10 mx-auto max-w-[1600px]">
                <Outlet />
            </div>

            {/* End Content Area */}
        </>
    )
}

export default Layout