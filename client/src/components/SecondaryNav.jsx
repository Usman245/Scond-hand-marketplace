import { RxCross1 } from "react-icons/rx";
import { useMyContext } from "../ContexProvider/SearchContext";
import { Link } from "react-router-dom";

const SecondaryNav = () => {
  const { setOpened, isOpened } = useMyContext();
  const handleToggel = () => {
    setOpened(false);
  };

  return (
    <div
      className={`${
        isOpened
          ? "left-0 w-[300px] h-[400px] top-0 bg-white shadow-xl"
          : " left-[-300px]"
      } absolute`}
    >
      <div className=" w-full  h-3/5 pl-2 py-5 flex flex-col justify-between items-center">
        <RxCross1 onClick={handleToggel} />
        <Link
          to="/login"
          className="text-2xl mx-2 text-black "
          style={{ textDecoration: "underline" }}
        >
          Login
        </Link>
        <button className="rounded-2xl text-2xl py-2 px-7 mx-3 border-2 border-red-500 border-solid hover:border-blue-500 focus:border-green-500">
          Sell
        </button>
      </div>
    </div>
  );
};

export default SecondaryNav;
