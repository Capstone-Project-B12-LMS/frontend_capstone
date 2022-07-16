import { useSelector } from "react-redux";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CONST from "../../utils/constant";

import useDeleteCounseling from "../../graphql/DeleteCounseling";
import useSendCounselling from "../../utils/hooks/useSendCounselling";

import Button from "../Button";
import Loading from "../Spinner/Loading";



const CounselingPopUp = ({ setIsClicked, data }) => {

  const { dataLogin } = useSelector((state) => state.login)
  const { insertCounselingID, loading } = useDeleteCounseling(data.classEntity.id);
  const [ send, loadingSending ] = useSendCounselling(CONST.EMAIL_KEY);
  
  const MySwal = withReactContent(Swal)

  const handleDeletedCounseling = async () => {

    await insertCounselingID({
      variables: {
        id: data.id,
      },
    });

    setIsClicked(false)

    MySwal.fire({
      icon: "success",
      title: <h2 className='fs-3'>Success</h2>,
      html: <p className='fs-6 lh-lg'>The request for counseling has been removed</p>,
      showConfirmButton: true
    })
  };


  const acceptCounselling = async () => {

    const field = {
      teacher_name : dataLogin?.fullName,
      student_name : data.user.fullName,
      phone_number: dataLogin?.telepon ,
      class_name: data.classEntity.name,
      to_email : data.user.email,
      topic: data.topic,
      description : data.content,
      created_at : new Date(data.createdAt).toLocaleDateString('en-GB')
    }

    const status = await send('service_6103tlf','template_aanthlf', field);
    
    if(status === 200){

      insertCounselingID({variables: { id: data.id}});
      setIsClicked(false)

      return MySwal.fire({
        icon: "success",
        title: <h2 className='fs-3'>Success</h2>,
        html: <p className='fs-6 lh-lg'>We will send an email to your student that the counseling request has been received</p>,
        showConfirmButton: true
      })
    }
    else{
      MySwal.fire({
        icon: "error",
        title: <h2 className='fs-3'>Failed</h2>,
        html: <p className='fs-6 lh-lg'>Receiving the counseling request failed, try again later</p>,
        showConfirmButton: true
      })
      
      return setIsClicked(false)
    }
  }


  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] inset-y-0 z-30 opacity-100 visible`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white w-4/5 md:w-1/2 max-w-[640px] flex flex-col items-center gap-2 py-16 rounded-[30px]">
          {loadingSending || loading ? (
            <div className="max-h-[350px] flex items-center justify-center">
              <Loading size={100} />
            </div>
          ) : (
            <>
              <img
                src={`https://i.pravatar.cc/200?u=${data.user.id}`}
                alt="/"
                className="md:w-[160px] rounded-full"
              />
              <p className="text-2xl mt-6 font-bold">{data.user.fullName}</p>
              <p className="text-base text-slate-400 text-center font-normal leading-7">
                I want to ask you for guidance <br /> "{data.topic}"
              </p>
              <div className="mt-10">
                <Button
                  text="Confirm"
                  styling={`rounded-[20px] px-[30px] py-[5px] text-xl font-bold mr-5`}
                  handleClick={acceptCounselling}
                />
                <Button
                  text="Decline"
                  styling={`text-[#415A80] bg-white border-[1px] border-[#415A80] rounded-[20px] px-[30px] py-[5px] text-xl font-bold`}
                  handleClick={handleDeletedCounseling}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounselingPopUp;
