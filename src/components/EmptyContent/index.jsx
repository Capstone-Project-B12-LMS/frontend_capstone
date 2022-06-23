const EmptyContent = ({img , title , description}) => {
    return(
        <div className="flex items-center">
            <div className="w-[237px] h-[196px] overflow-hidden flex">
                {img && <img src={img} alt="illustration" className='w-full h-full object-cover'/>}
            </div>
            <div className='ml-4'>
                {title && <h3 className='text-[32px] text-black font-medium'>{ title }</h3>}
                {description && <p className='text-xl text-black mt-4'>{description}</p>}
            </div>
        </div>
    )
}

export default EmptyContent