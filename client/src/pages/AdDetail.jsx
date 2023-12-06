import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userPic from "../assets/default user.jpg";
import { IoMdCall } from "react-icons/io";

const AdDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3000/upload/addDetails/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        // Process the data received from the server
        setData(res);
        return;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);
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
  const handleClassChange = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const handleCall = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    window.open(url);
  };

  return (
    <div className="flex mobile:flex-col">
      <div className="w-3/5 mobile:w-full mx-20 mobile:mx-auto flex flex-col mobile:overflow-x-hidden">
        <img
          className="w-[72%] mobile:w-[97%] mobile:h-[340px] h-auto"
          src={`http://localhost:3000/upload/${data.image}`}
          alt="images"
        />
        <div className=" w-[72%] mobile:w-[97%] mt-4 border border-gray-400 flex justify-between rounded-md">
          <div>
            <h1 className="text-3xl mobile:text-xl font-bold ml-8 mt-4">
              RS {data.price}
            </h1>
            <h2 className="text-2xl font-semibold ml-8 mt-2">{data.title}</h2>
            <p className="text-lg ml-8 my-2 flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.25}
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="ml-1">{data.location}</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <p className="mb-2 mr-4">
              {getCurrentTimeDifference(data.created_at)}
            </p>
          </div>
        </div>
        <div className=" w-[72%] mobile:w-[97%] mt-4 border border-gray-400 rounded-md">
          <h2 className="ml-8 text-2xl font-bold my-2">Description</h2>
          <p className="text-base font-medium mx-8">{data.description}</p>
        </div>
        <div className="w-[72%] mobile:w-[97%] rounded-md border border-gray-400 mt-4">
          <h2 className="ml-8 text-2xl font-bold my-2">Details</h2>
          <div className="flex mx-8 w-full my-3">
            <span className=" text-base font-semibold">
              Brand <span className=" font-normal">{data.brand}</span>
            </span>
            <span className="ml-6 text-base font-semibold">
              Price <span className=" font-normal">{data.price}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-2/5 mt-10 rounded-md h-[100%] mobile:w-[97%] mobile:mx-1 border border-gray-400 mr-4">
        <div className=" mx-4 items-center flex my-3 ">
          <img src={userPic} alt="user" className="h-14 rounded-full w-14" />
          <h2 className="mx-2 uppercase text-2xl font-medium ">
            {data.UserName}
          </h2>
        </div>
        <button
          onClick={handleClassChange}
          className="w-[95%] mx-2 my-2 border border-gray-400 rounded-md text-2xl py-3"
        >
          Show phone No
        </button>
        <h3
          className={
            isOpen
              ? "flex my-2 text-xl mx-2 font-medium justify-between"
              : " hidden"
          }
        >
          <span>{data.contact}</span>
          <button onClick={handleCall(data.contact)}>
            <IoMdCall className=" w-[50px] h-[40px] text-blue-600 mr-5 mobile:mr-2" />
          </button>
        </h3>
      </div>
    </div>
  );
};

export default AdDetail;
