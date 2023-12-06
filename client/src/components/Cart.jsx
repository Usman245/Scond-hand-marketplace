import { Link } from "react-router-dom";

function Cart({ id, price, title, time, location, image }) {
  return (
    <div>
      <Link
        to={`/add/${id}`}
        className="full:w-[280px] lg:w-[380px] full:h-[380px] xl:h-[430px] lg:h-[430px] border border-gray-400 mx-2 my-4 flex flex-col mobile:flex-row mobile:w-[96%] rounded-lg"
      >
        <img
          src={`http://localhost:3000/upload/${image}`}
          alt=""
          className="w-full h-[50%] mobile:w-[160px] mobile:h-[125px] rounded-md overflow-hidden"
        ></img>
        <div>
          <h1 className="mt-2 mobile:mt-1 text-2xl mobile:text-xl mx-3 font-semibold">
            Rs {price}
          </h1>
          <h1 className=" text-lg mobile:text-base my-1 mobile:my-1 mx-3">
            {title}
          </h1>
          <h4 className="mx-3 mt-1 text-lg font-medium ">{location}</h4>
          <h1 className=" text-base mobile:text-sm mx-3">{time}</h1>
        </div>
      </Link>
    </div>
  );
}

export default Cart;
