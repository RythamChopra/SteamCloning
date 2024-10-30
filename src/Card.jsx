import { useState } from "react";

const Card = ({ imageSrc, title, price , onBuy , buttonLabel }) => {


    const [ isAdded , setIsAdded ] = useState(false) ; 

    const handleClick = () => {
        if(!isAdded) {
            onBuy()
            setIsAdded(true)
        }
    };

  return (
    <>
      <div className="bg-blue-950 rounded-lg shadow-md items-center max-w-xs mt-10 gap-y-0">
        <div className="flex-shrink-0 p-2">
          <img
            className="w-[350px] h-[300px] object-cover rounded-lg"
            src={imageSrc}
            alt={title}
          />
        </div>

        <h2 className="text-xl ml-2 font-bold mt-2 text-white">{title}</h2>

        <p className="text-white ml-2">
           {isNaN(price) ? price : `Rs. ${price}`}
        </p>

        <button
        onClick={handleClick}
        className={
          `${ buttonLabel === "Added" ? "bg-gray-400 cursor-not-allowed" : 
            "bg-blue-500 hover:bg-blue-400"
          } text-white px-4 py-2 rounded-lg transition duration-200`}
          disabled={buttonLabel === "Added"}
          >
           {buttonLabel}
        </button>
      </div>
    </>
  );
};

export default Card;
