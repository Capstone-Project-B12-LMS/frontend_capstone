import close from "../../assets/icons/close-icon.svg";

const ViewPopUp = ({ dataCounseling, setIsViewClicked }) => {
  
  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-30 opacity-100 visible`}
    >
      <div className="w-[650px] max-h-[500px] bg-white p-10 rounded-[20px] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center">
            <h3 className="text-2xl">Notification</h3>
            <img src={close} alt="/" className="w-8 cursor-pointer" onClick={() => setIsViewClicked(false)} />
        </div>
        <div className="w-full mt-8 overflow-auto">
        {
          dataCounseling.map(counselling => (
            <div className="w-full flex border-b-[1px] py-6" key={counselling.id}>
              <img 
                src={`https://i.pravatar.cc/150?u=${counselling.user.id}`} 
                alt="avatar" 
                className="mr-5 w-[50px] h-[50px] rounded-full" 
              />
              <div>
                <p className="text-xl font-semibold mb-1">
                  {counselling.user.fullName}
                </p>
                <span className="text-[#A8A8A8] leading-7 mt-3">{counselling.content}</span>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};


export default ViewPopUp;
