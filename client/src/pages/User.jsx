import { useEffect, useState } from "react";
import { useMyContext } from "../ContexProvider/SearchContext";
import { Navigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  const [isEmpty, setEmpty] = useState(false);
  const {
    setTitle,
    setDiscription,
    setBrand,
    setCategoryText,
    setPrice,
    setImages,
    setSelectedCity,
    setCategor,
    setSelectedType,
    setSubcategor,
    UserEmail,
    userName,
  } = useMyContext();
  const [isMoved, setMoved] = useState(false);
  const [id, setId] = useState("");

  const fetchData = async () => {
    fetch(`http://localhost:3000/upload/userAds?email=${UserEmail}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        if (data.length < 0) {
          setEmpty(true);
        }
      })
      .catch((error) => console.error("Error fetching ads: ", error));
  };
  const userData = async () => {
    fetch(``);
  };
  useEffect(() => {
    fetchData();
  }, [UserEmail]);
  const handleLogout = () => {
    // Perform the logout process here
    fetch("http://localhost:3000/logout", {
      method: "POST", // Use the appropriate HTTP method
    })
      .then((response) => {
        if (response.ok) {
          console.log("Logout successful");
          // You can perform additional client-side cleanup here
        } else {
          console.log("There was an error");
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  const getCurrentTimeDifference = (createdDate) => {
    const currentTime = new Date();
    const differenceInMilliseconds = currentTime - new Date(createdDate);
    const minutes = Math.floor(differenceInMilliseconds / 60000); // 1 minute = 60,000 milliseconds

    if (minutes < 1) {
      return "a moment ago";
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (minutes < 1440) {
      const hours = Math.floor(minutes / 60);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (minutes < 10080) {
      const days = Math.floor(minutes / 1440);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else {
      const weeks = Math.floor(minutes / 10080);
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    }
  };
  const handleDelete = async (id) => {
    try {
      fetch(`http://localhost:3000/upload/delete/${id}`, {
        method: "DELETE",
      }).then((res) => {
        res.json();
        setData(res);
        console.log(data.length);
        if (data.length === 0) {
          setEmpty(true);
          setData([]);
        } else {
          setEmpty(false);
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleModify = (e) => {
    setId(e);
    setMoved(true);
  };

  return (
    <div>
      {isMoved ? (
        <Navigate to={`/edit/${id}`} />
      ) : (
        <div>
          <div className="flex items-center mx-5 my-4">
            <h2 className="tetx-2xl font-bold mx-2">{userName}</h2>
            <h2 className="tetx-2xl font-bold mx-2">{UserEmail}</h2>
            <button
              className=" mx-2 text-xl text-white py-2 px-3 bg-red-500 rounded-md cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="mx-4 my-2 mobile:mx-1 flex ">
            <input
              type="number"
              className="py-3 w-52 mobile:w-1/2 px-2 tetx-xl font-medium border border-black"
              placeholder="+92"
            />
            <button className="py-3 px-5 mx-2 bg-green-500 text-xl text-white rounded-md">
              Add
            </button>
          </div>
          <div className="ad_section mx-5 mobile:mx-1">
            <h1 className=" text-2xl font-normal my-2 mx-1 mobile:mx-0">
              Your ads
            </h1>
            <div className=" full:mx-4 w-full grid mobile:grid-cols-1 lg:grid-cols-2 full:grid-cols-4 xl:grid-cols-5   gap-2 justify-center items-center">
              {isEmpty ? (
                <div className="text-xl text-orange-500 font-mono">
                  There is no add
                </div>
              ) : (
                <div>
                  {data.map((e) => (
                    <div
                      key={e._id}
                      to={`/add/${e._id}`}
                      className="full:w-[280px] lg:w-[380px] full:h-[380px] xl:h-[430px] lg:h-[430px] border border-gray-400 mx-2 my-4 flex flex-col mobile:flex-row mobile:w-[96%] rounded-lg"
                    >
                      <img
                        src={`http://localhost:3000/upload/${e.image}`}
                        alt=""
                        className="w-full h-[50%] mobile:w-[160px] mobile:h-[125px] rounded-md overflow-hidden"
                      ></img>
                      <div>
                        <h1 className="mt-2 mobile:mt-1 text-2xl mobile:text-xl mx-3 font-semibold">
                          Rs {e.price}
                        </h1>
                        <h1 className=" text-lg mobile:text-base my-1 mobile:my-1 mx-3">
                          {e.title}
                        </h1>
                        <h4 className="mx-3 mt-1 text-lg font-medium ">
                          {e.location}
                        </h4>
                        <h1 className=" text-base mobile:text-sm mx-3">
                          {getCurrentTimeDifference(e.created_at)}
                        </h1>
                        <div className="flex justify-between mx-3 mt-2">
                          <button
                            className=" p-3 bg-red-600 text-white text-2xl rounded-md"
                            onClick={() => {
                              handleDelete(e._id);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className=" p-3 bg-green-600 text-white text-2xl rounded-md"
                            onClick={() => {
                              setTitle(e.title);
                              setDiscription(e.description);
                              setPrice(e.price);
                              setBrand(e.brand);
                              setCategoryText(e.category_me);
                              setSelectedCity(e.location), setImages(e.image);
                              handleModify(e._id);
                              setCategor(e.category_me);
                              setSubcategor(e.subCategory);
                              setSelectedType(e.type);
                            }}
                          >
                            Modify
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
