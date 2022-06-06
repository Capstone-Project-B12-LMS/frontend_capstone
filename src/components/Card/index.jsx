import "./Card.css"
import pic from "../../images/Dragunov.jpg"
const Card = ({ CardTitle, CardProgress }) => {
    return (
        <div className="mt-8">
            <div className="bg-white rounded overflow-hidden shadow-md w-[300px] h-[240px]">
                <img src={pic} alt="Picture" className="CardImage" />
                <div className="m-4">
                    <span className="font-bold">{CardTitle}</span>
                    <p className="block text-gray-500 text-sm">Progress: {CardProgress}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;