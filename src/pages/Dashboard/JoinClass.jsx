import { useState } from "react";
import { Input, Button } from "../../components";

const JoinClass = () => {

    const [classCode, setClassCode] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();
        setClassCode("");
    }

    return (
        <div className="modal">
            <div className="flex items-center justify-center mt-[10%]">
                <div className="max-w-[1000px] w-4/5 max-h-[640px] h-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
                    <h2 className="text-[32px] leading-[48px] mb-[7px]">Class Code</h2>
                    <h4 className="text-[24px] font-medium mb-10 text-center">Ask the admin or mentor for the classs code, then enter the code here</h4>
                    <form onSubmit={HandleSubmit}>
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
                </div>
            </div>
        </div>
    );
}

export default JoinClass;