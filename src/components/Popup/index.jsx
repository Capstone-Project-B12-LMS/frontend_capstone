const PopUp = ({ title, style1, style2, description, children }) => {
    return (
        <div className="modal">
            <div className={style1}>
                <div className={style2}>
                    <h2 className="text-[2rem]">{title}</h2>
                    <p className="text-[1.5rem] text-center">{description}</p>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;