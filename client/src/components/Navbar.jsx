import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useMyContext } from "../ContexProvider/SearchContext";
import user from "../assets/default user.jpg";

const Navbar = () => {
  const {
    setOpened,
    searchQuery,
    setQuery,
    setSearched,
    setSearchResult,
    isLogged,
  } = useMyContext();

  const handleToggel = () => {
    setOpened(true);
  };
  const handleSearch = async () => {
    try {
      fetch(`http://localhost:3000/search?query=${searchQuery}`)
        .then((res) => res.json())
        .then((res) => setSearchResult(res))
        .then((res) => {
          setSearched(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between py-5 px-5 mobile:px-1 bg-slate-100 shadow-xl sticky">
      <div className="hidden mobile:flex items-center">
        <HiMenu onClick={handleToggel} className=" w-8 h-8" />
      </div>
      <div className="">
        <h3 className="text-3xl ">
          O<span className="text-4xl">L</span>X
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          className="rounded-lg py-4 mobile:py-2 pl-4 mobile:pl-2 md:py-2 border border-gray-400 outline-none"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="rounded-lg px-3 py-4 mobile:py-2 mobile:px-2 mx-2 bg-black text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex justify-between items-center mobile:hidden">
        {isLogged ? (
          <Link
            className=" w-20 h-20 mx-2 rounded-full border border-gray-300 cursor-pointer"
            to="/user"
          >
            <img
              src={user}
              className="w-full h-full object-contain"
              alt="img"
            />
          </Link>
        ) : (
          <Link
            to="/login"
            className="text-2xl mx-2 text-black "
            style={{ textDecoration: "underline" }}
          >
            Login
          </Link>
        )}
        <Link
          className="rounded-md text-2xl mx-3 border-2 border-red-500 border-solid hover:border-blue-500 px-4 font-medium py-2 focus:border-green-500"
          to={isLogged ? "/sell-item" : "/login"}
        >
          Sell
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
