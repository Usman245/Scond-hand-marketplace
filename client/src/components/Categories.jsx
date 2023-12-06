import { useMyContext } from "../ContexProvider/SearchContext";
import MobileLogo from "../assets/mobile-logo.png";
import home from "../assets/home.jpg";
import camera from "../assets/camera.jpg";
import bike from "../assets/bike.png";
import car from "../assets/car-logo.png";
import books from "../assets/books.jpg";
import kids from "../assets/kids.jpg";
import business from "../assets/business.jpg";
import jobs from "../assets/jobs.jpg";
import services from "../assets/services.jpg";
import animals from "../assets/anomals.jpg";
import furniture from "../assets/furniture.jpg";
import fashons from "../assets/fashons.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const intailData = [
    {
      id: 1,
      src: MobileLogo,
      value: "mobiles",
      text: "Mobiles",
    },
    { id: 2, src: animals, value: "animals", text: "Animals" },
    { id: 3, src: fashons, value: "fashons", text: "Fashons" },
    { id: 4, src: furniture, value: "furniture", text: "Furniture" },
    { id: 5, src: home, value: "home", text: "Home" },
    { id: 6, src: camera, value: "camera", text: "Camera" },
    { id: 7, src: bike, value: "bike", text: "Bike" },
    { id: 8, src: car, value: "car", text: "Car" },
    { id: 9, src: books, value: "books", text: "Books" },
    { id: 10, src: kids, value: "kids", text: "Kids" },
    { id: 11, src: business, value: "business", text: "Business" },
    { id: 12, src: jobs, value: "jobs", text: "Jobs" },
    { id: 13, src: services, value: "services", text: "Services" },
  ];

  const navigate = useNavigate();
  const handleSearch = (e) => {
    navigate(`/category/${e}`);
  };
  return (
    <div>
      <div className=" mt-10 mx-10 md:mx-1">
        <h2 className="text-2xl font-semibold my-4 md:text-xl">
          All Categories
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {intailData.map((e) => (
            <div
              key={e.id}
              className="flex flex-col justify-center items-center my-2 mx-2 md:mx-auto cursor-pointer"
              onClick={() => {
                handleSearch(e.value);
              }}
            >
              <div className="flex justify-center items-center h-16 w-16 md:w-10 md:h-10 rounded-full bg-green-400">
                <img
                  src={e.src}
                  alt=""
                  className=" w-[100%] h-[100%] object-fill rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 md:text-lg">{e.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
