import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, Loading, MyAccountInput, Spinner } from "../components";
import useUpdateAccount from "../graphql/UpdateAccount";

const MyAccount = () => {

  const MySwal = withReactContent(Swal);
  const { dataLogin } = useSelector((state) => state.login);
  const { insertAccountData, error, loading } = useUpdateAccount(dataLogin?.id);

  const [accountData, setAccountData] = useState({
    fullName: dataLogin?.fullName,
    email: dataLogin?.email,
    telepon: dataLogin?.telepon,
  });


  useEffect(() => {
    setAccountData({
      fullName: dataLogin?.fullName,
      email: dataLogin?.email,
      telepon: dataLogin?.telepon,
    });
  }, [dataLogin]);


  useEffect(() => {
    if (error) {
      MySwal.fire({
        title: "Update Account Failed",
        text: "Email is already taken, try using another email and make sure your network is stable",
        icon: "error",
        showConfirmButton: true
      })
    }
  },[error]);



  const handleChange = (type, value) => {
    const tempObj = {};
    tempObj[type] = value;
    let newObj = Object.assign({}, accountData, tempObj);
    setAccountData(newObj);
  };

  const submitAccountChange = (e) => {
   
    e.preventDefault();

    const fullNameRegex = /^([A-Za-z]+|([A-Za-z]+\s{1}[A-Za-z]+)*)$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^\d{10,13}$/;

    const { fullName, email, telepon } = accountData

    if (fullNameRegex.test(fullName) && emailRegex.test(email) && phoneRegex.test(telepon)) {

      const telp = telepon[0] === "0" ? telepon.replace("08","628") : telepon;

      MySwal.fire({
        title: "Class Data Changes",
        text: "Are you sure you want to change the data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#415A80",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await insertAccountData({
            variables: {
              id: dataLogin.id,
              fullName: accountData.fullName,
              telepon: telp,
              email: accountData.email,
            },
          });
          MySwal.fire({
            title: "Update Success",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: true,
            cancelButtonColor: "#d33",
          });
        }
      });
    } 
    else {
      MySwal.fire({
        title: "Update Account Failed",
        text: "Please fill empty form and using corret format",
        icon: "warning",
        showConfirmButton: true
      });
    }
  };



  return (
    <div className="flex justify-center my-10">
      {
        !dataLogin ? ( <Loading size="100" />) : 
        (
          <div className="w-[85%] flex justify-between p-16 rounded-[20px] shadow-[4px_2px_8px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
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
              <Button
                text={loading ? <Spinner /> : "Save"}
                formBtn={true}
                styling="py-4 mb-8 text-xl font-medium w-[100px] rounded-[10px] flex justify-center"
              />
            </form>
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={`https://i.pravatar.cc/300?u=${dataLogin?.id}`}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div className="bg-[#9EC9E2] h-[20px] absolute bottom-0 w-full left-0"></div>
          </div>
        )
      }
    </div>
  );
};

export default MyAccount;