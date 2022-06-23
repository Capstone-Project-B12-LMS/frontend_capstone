import WARNING_ICON from '../../assets/icons/warning-icon.svg.svg'

const ErrorAlert = ({ text }) => {
    return(
        <div className="flex items-center mt-3.5">
            <img src={WARNING_ICON} className="w-[25px] h-[22px] mr-3.5" alt="error-icon"/>
            <p className='font-medium text-lg text-[#C9161D]'>{ text }</p>
        </div>
    )
}

export default ErrorAlert