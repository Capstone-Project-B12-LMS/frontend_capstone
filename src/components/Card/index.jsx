import { Link } from "react-router-dom";


const Card = ({ title, progress, thumbnail = 'https://i.ibb.co/k6wjmXK/thumbnail-class.png', url }) => {
    return (
        <Link to={url}>
            <div className="bg-white rounded overflow-hidden shadow-md w-full h-full flex flex-col rounded-2xl">
                <img src={thumbnail} alt="thumbnail" className="w-[100%] h-[160px] object-cover" />
                <div className="p-6 h-full flex flex-col justify-between">
                    <h3 className="text-2xl font-medium text-black">{ title }</h3>
                    {/* <p className="text-base text-[#A9A9A9] font-normal">Progress: <span className="text-black font-bold">{progress}</span> </p> */}
                </div>
            </div>
        </Link>
    );
}

export default Card;