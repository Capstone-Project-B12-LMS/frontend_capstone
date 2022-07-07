import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, Loading, MyAccountInput } from "../components";
import useUpdateAccount from "../graphql/UpdateAccount";

const MyAccount = () => {
  const MySwal = withReactContent(Swal);
  const { dataLogin } = useSelector((state) => state.login);
  const { insertAccountData, error, loading,data } = useUpdateAccount(dataLogin?.id);
  const [accountData, setAccountData] = useState({
    fullName: "",
    email: "",
    telepon: "",
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
        title: "Update Error",
        icon: "error",
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: "#d33",
      });
    }
    if(data?.user?.updateById?.id){
      MySwal.fire({
        title: "Update Success",
        icon: "success",
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: "#d33",
      });
    }
  }, [error,data]);
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
      <div className="flex justify-center my-10">
        {loading ? (
          <Loading size="100" />
        ) : (
          <div className="w-[85%] flex justify-between p-16 rounded-[20px] shadow-[4px_2px_8px_0px_rgba(0,0,0,0.25)]">
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
              <img src={require("../assets/img/myaccount.png")} alt="avatar" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyAccount;
