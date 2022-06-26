const Loading = ({size}) => {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
        <div className={`loading rounded-full border border-solid border-white animate-spin w-[${size}px] h-[${size}px]`}></div>
    </div>
  )
}

export default Loading