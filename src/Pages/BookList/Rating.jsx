import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Rating = ({ value }) => {

	return (
		<>
            {
                [...Array(value)].map((star, index) => {
				return <FaStar className="text-green-500" key={index}/>
                })
            }
		</>
	);
};

export default Rating;
