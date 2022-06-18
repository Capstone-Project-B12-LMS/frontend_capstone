import { useState } from "react";
import { Button } from "../../components";

const CreateClass = () => {

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

    const HandleSubmit = (e) => {
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


    return (

        <div className="modal">
            <div className="flex items-center justify-center mt-[5%]">
                <div className="max-w-[1000px] w-4/5 max-h-[800px] h-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
                    <h2 className="text-[32px] leading-[48px] mb-[7px]">Create Class</h2>
                    <form onSubmit={HandleSubmit}>
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
                </div>
            </div>
        </div>

    );
}

export default CreateClass;