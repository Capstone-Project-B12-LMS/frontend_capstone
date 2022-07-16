import { useEffect, useState } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// GraphQL

import { useMutation } from "@apollo/client/react";
import { CREATE_CLASS, JOIN_CLASS } from "../../graphql/ClassQuery";

// Component

import { Header, Sidebar, Dropdown, PopUp, Button, Spinner, AlertText, NoMatch } from '../'

// Page

import Home from "../../pages/Dashboard/home";
import StudentClass from "../../pages/StudentClass";
import TeacherClass from "../../pages/TeacherClass";
import Classall from "../../pages/Dashboard/classAll";
import ClassStudent from "../../pages/Dashboard/classStudent";
import ClassTeacher from "../../pages/Dashboard/classTeacher";
import MyAccount from '../../pages/MyAccount';

// Icon

import ExpandIcon from "../../assets/icons/expand-icon.svg";
import AccountIcon from "../../assets/icons/account-icon.svg";
import LogOutIcon from "../../assets/icons/logout-icon.svg";
import AddIcon from "../../assets/icons/add-icon.svg";
import CreateIcon from "../../assets/icons/create-class-icon.svg";
import JoinIcon from "../../assets/icons/join-icon.svg";
import History from "../../pages/Dashboard/History";



const Layout = () => {

    // State

    const [showSidebar, setShowSidebar] = useState(false);
    const [createClassShow, setCreateClassShow] = useState(false);
    const [joinClassShow, setjoinClassShow] = useState(false);
    const [error, setError] = useState({
        form : "",
        text: ""
    })

    const [inputs, setInputs] = useState({
        create: [
            {
                placeholder: "Class Name",
                type: "text",
                value: "",
                pattern: /^[A-Za-z0-9\s\-&]+$/,
                form: 'create'
            },
            {
                placeholder: "Room (optional)",
                type: "text",
                value: "",
                pattern: /^[A-Za-z0-9\s\-]*$/,
                form: 'create'
            }
        ],
        join: [
            {
                placeholder: "Input Class Code",
                type: "text",
                value: "",
                pattern: /^[A-Za-z0-9]{10}$/,
                form: 'join'
            }
        ]
    })


    // Redux store , router , etc .

    const { dataLogin } = useSelector((state) => state.login);
    const location = useLocation();
    const navigate = useNavigate();
    const cookies = new Cookies();
    const MySwal = withReactContent(Swal)


    // GraphQL Fetching

    const [creating, { loading: creatingLoad }] = useMutation(CREATE_CLASS, {
        onCompleted: data => navigateToClass(`class/t/${data?.class?.save?.id}`, setCreateClassShow),
        onError: () => { },
        notifyOnNetworkStatusChange: true
    });


    const [joined, { data, loading: joinLoading }] = useMutation(JOIN_CLASS, {
        onCompleted: data => data?.class?.join ? navigateToClass(`class/${data?.class?.join?.id}`, setjoinClassShow) : setError(true),
        onError: () => { },
        notifyOnNetworkStatusChange: true
    })


    // Event handler method

    const handleSidebarShow = (e, show = !showSidebar) => setShowSidebar(show);
    const showPopupCreate = (e, show = !createClassShow) => setCreateClassShow(show);
    const showPopupJoin = (e, show = !joinClassShow) => setjoinClassShow(show);

    const handleInputChange = (value, index, form) => {
        const newInputs = [...inputs[form]]
        newInputs[index] = { ...newInputs[index], value };
        setInputs({ ...inputs, [form]: newInputs })
        setError({form:"",text:""})
    }

    const navigateToClass = (path, popupShow) => {

        const create = inputs.create.map(input => ({ ...input, value: "" }));
        const join = inputs.join.map(input => ({ ...input, value: "" }));

        setInputs({ create, join });
        popupShow(false);

        return navigate(path, { replace: true })
    }


    // Request Method


    const createClass = (e) => {

        e.preventDefault();

        const [classname, room] = inputs.create;
        const matchClassname = classname.value.trim() !== "" && classname.pattern.test(classname.value);
        const matchRoom = room.pattern.test(room.value)

        if (!classname.value.length){
            setError({
                form:"create",
                text:"Please fill the empty form"
            })
            return false
        }
        else if(!(matchClassname && matchRoom)){
            setError({
                form:"create",
                text:"Format is incorrect"
            })
            return false
        }

        return creating({ variables: { name: classname.value, room: room.value } });
    }

    const joinClass = (e) => {
        e.preventDefault();

        const { value: class_code, pattern } = inputs.join[0];
        const u_id = dataLogin.id;

        if (!class_code.length){
            setError({
                form:"join",
                text:"Please fill the empty form"
            })
            return false
        }
        else if (!pattern.test(class_code)){
            setError({
                form:"join",
                text:"Class Code Format is Incorrect"
            })
            return false
        }

        return joined({ variables: { class_code, u_id } })
    };


    const logout = () => {
        MySwal.fire({
            title: 'Logout Account',
            text: "Are you sure you want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#415A80',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    cookies.remove('token', { path: '/' })
                    window.location.href = "/"
                }
            })
    };


    const dropdownItem = {
        user: [
            {
                icon: AccountIcon,
                text: 'my account',
                type: 'list',
                path: 'account'
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
                clicked: showPopupCreate
            },
            {
                icon: JoinIcon,
                type: 'button',
                text: 'join class',
                path: null,
                clicked: showPopupJoin
            }
        ]
    }


    useEffect(() => {
        if (location.pathname === '/dashboard') navigate('home', { replace: true })
        if (!cookies.get("token")) window.location.href = ""
    }, [location.pathname])


    return (
        <>
            <PopUp
                title='Create Class'
                styling='w-[1000px] min-h-[300px] max-h-min px-[180px] py-[148px]'
                show={createClassShow}
                setShow={showPopupCreate}
            >
                <form onSubmit={createClass} className='mt-6 w-full'>
                    {
                        inputs.create.map((input, i) => (
                            <input
                                key={i}
                                {...input}
                                required
                                className="border-[1px] px-8 rounded-[10px] border-[#D9D9D9] w-full h-[62px] placeholder:text-[24px] text-[24px] my-2"
                                onChange={(e) => handleInputChange(e.target.value, i, input.form)}
                            />
                        ))
                    }
                    {
                        error.form === "create" ? 
                            <AlertText text={error.text} color="#C9161D" /> : 
                                <AlertText text="Letters and numbers , allowed symbols : & -" color="#747d8c"/>
                    }
                    <Button
                        formBtn={true}
                        styling={"rounded-[15px] w-full mt-8 h-[62px] text-[20px] font-bold flex justify-center items-center"}
                        text={"Create"}
                        icon={creatingLoad ? <Spinner styling='ml-3' /> : false}
                    />
                </form>
            </PopUp>


            <PopUp
                title='class code'
                description='Ask the admin or mentor for the class code, then enter the code here . '
                styling='w-[1000px] min-h-[300px] max-h-min px-[180px] py-[148px]'
                show={joinClassShow}
                setShow={showPopupJoin}
            >
                <form onSubmit={joinClass} className='mt-6 w-full'>
                    {
                        inputs.join.map((input, i) => (
                            <input
                                key={i}
                                {...input}
                                required
                                className="border-[1px] px-8 rounded-[10px] border-[#D9D9D9] w-full h-[62px] placeholder:text-[24px] text-[24px] my-2"
                                onChange={(e) => handleInputChange(e.target.value, i, input.form)}
                            />
                        ))
                    }
                    {
                        error.form === "join" ? <AlertText text={error.text} color="#C9161D" /> : 
                        <AlertText text="Only letter and number | Max 10 characters" color="#747d8c"/>
                    }
                    <Button
                        formBtn={true}
                        styling={"rounded-[15px] w-full mt-8 h-[62px] text-[20px] font-bold flex justify-center items-center"}
                        text={"Join"}
                        icon={joinLoading ? <Spinner styling='ml-3' /> : false}
                    />
                </form>
            </PopUp>


            <Header usingToggle={true} toggleClick={handleSidebarShow}>
                {
                    !!dataLogin ?

                        <div className="flex ml-auto">
                            <Dropdown list={dropdownItem.class}>
                                <img src={AddIcon} alt="icon" className="w-[24px] h-[24px]" />
                            </Dropdown>
                            <Dropdown list={dropdownItem.user}>
                                <div className="w-[50px] h-[50px] overflow-hidden rounded-full mr-2">
                                    <img src={`https://i.pravatar.cc/150?u=${dataLogin?.id}`} alt="avatar" />
                                </div>
                                <span className="block max-w-[150px] text-2xl text-black font-medium mr-4 overflow-hidden whitespace-nowrap text-ellipsis">{dataLogin?.fullName}</span>
                                <img src={ExpandIcon} alt="icon" className="w-[15px] h-[8px]" />
                            </Dropdown>
                        </div>

                        : false
                }
            </Header>

            <Sidebar isOpen={showSidebar} setIsOpen={handleSidebarShow} />

            {/* Content area */}

            <div className="px-10 mx-auto max-w-[1600px]">
                <Routes>
                    <Route path="home" element={<Home joinClass={showPopupJoin} createClass={showPopupCreate} />} />
                    <Route path="class/:id/*" element={<StudentClass />} />
                    <Route path="class/t/:id/*" element={<TeacherClass />} />
                    <Route path="my-class" element={<Classall />} />
                    <Route path="my-class/student" element={<ClassStudent />} />
                    <Route path="my-class/teacher" element={<ClassTeacher />} />
                    <Route path="history" element={<History />} />
                    <Route path="account" element={<MyAccount />} />
                    <Route path="*" element={
                        <NoMatch
                            text="404 - PAGE NOT FOUND"
                            description="The page you're looking not found . Please make sure you typed correct url."
                        />
                    } />
                </Routes>
            </div>

            {/* End Content Area */}
        </>
    );
};

export default Layout
