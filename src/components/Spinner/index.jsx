const Spinner = ({styling})=>{
    return(
        <div className={`rounded-full border border-solid border-[4px] border-[#7B8595] border-r-white animate-spin w-[25px] h-[25px] ${styling}`}></div>
    )
}

export default Spinner