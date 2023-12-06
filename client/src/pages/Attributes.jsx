import { useMyContext } from "../ContexProvider/SearchContext";
import MessageDisplay from "../components/MessageDisplay";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Attributes({ btnText, headTitle }) {
  const {
    categor,
    selectedType,
    subcategor,
    UserEmail,
    userName,
    recieverEmail,
    title,
    setTitle,
    discription,
    setDiscription,
    brand,
    setBrand,
    categoryText,
    setCategoryText,
    price,
    setPrice,
    images,
    setImages,
    imagePreviews,
    setImagePreviews,
    message,
    setMessage,
    selectedCity,
    setSelectedCity,
  } = useMyContext();
  const [userPhone, setUserPhone] = useState("");
  const navigat = useNavigate();
  if (subcategor.lenghth > 0) {
    setCategoryText(true);
  }
  const cityList = [
    "Karachi",
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Islamabad",
    "Multan",
    "Gujranwala",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Bahawalpur",
    "Sargodha",
    "Sukkur",
    "Larkana",
    "Sheikhupura",
    "Gujrat",
    "Jhang",
    "Rahim Yar Khan",
    "Mardan",
    "Kasur",
    "Dera Ghazi Khan",
    "Mastung",
    "Abbottabad",
    "Swabi",
    "Chiniot",
    "Kohat",
    "Bhakkar",
    "Khuzdar",
    "Dera Ismail Khan",
    "Nowshera",
    "Chaman",
    "Hafizabad",
    "Kamalia",
    "Lodhran",
    "Sadiqabad",
    "Okara",
    "Jacobabad",
    "Shikarpur",
    "Muzaffargarh",
    "Nankana Sahib",
    "Mirpur Khas",
    "Tando Adam",
    "Khairpur",
    "Jamshoro",
    "Pakpattan",
    "Jhelum",
    "Narowal",
    "Tando Allahyar",
    "Kasur",
    "Rahim Yar Khan",
    "Vehari",
    "Burewala",
    "Sahiwal",
    "Attock",
    "Mianwali",
    "Bhawalnagar",
    "Toba Tek Singh",
    "Mirpur",
    "Muzaffarabad",
    "Gwadar",
    "Turbat",
    "Nushki",
    "Loralai",
    "Kharan",
    "Khuzdar",
    "Pishin",
    "Zhob",
    "Qalat",
    "Ziarat",
    "Sibi",
    "Loralai",
    "Bannu",
    "Tank",
    "Karak",
    "Mansehra",
    "Balakot",
    "Haripur",
    "Batkhela",
    "Timargara",
    "Charsadda",
    "Hangu",
    "Parachinar",
    "Kohat",
    "Peshawar",
    "Nowshera",
    "Mardan",
    "Swat",
    "Abbottabad",
    "Mingora",
    "Buner",
    "Chitral",
    "Dir",
    "Malakand",
    "Saidu Sharif",
    "Jhelum",
    "Sargodha",
    "Khushab",
    "Mianwali",
    "Layyah",
    "Rajanpur",
    "Dera Ghazi Khan",
    "Lodhran",
    "Kashmore",
    "Kandhkot",
    "Dadu",
    "Larkana",
    "Jacobabad",
    "Kandiaro",
    "Shahdadkot",
    "Ghotki",
    "Ratodero",
    "Sukkur",
    "Khairpur",
    "Tando Adam",
    "Mirpur Khas",
    "Thatta",
    "Badin",
    "Tando Muhammad Khan",
    "Umerkot",
    "Nawabshah",
    "Sanghar",
    "Hyderabad",
    "Naudero",
    "Kotri",
    "Sehwan",
    "Shikarpur",
    "Rohri",
    "Larkana",
    "Sukkur",
    "Gambat",
    "Kot Diji",
    "Khanpur",
    "Khairpur",
    "Ratodero",
    "Larkana",
    "Sukkur",
    "Pacca Chang",
    "Sanghar",
    "Thatta",
    "Badin",
    "Tando Adam",
    "Mirpur Khas",
    "Nawabshah",
    "Hyderabad",
    "Naudero",
    "Kotri",
    "Sehwan",
    "Sukkur",
    "Rohri",
    "Gambat",
    "Pir jo Goth",
    "Kot Diji",
    "Naukot",
    "Mithi",
    "Nagarparkar",
    "Islamkot",
    "Umerkot",
    "Karachi",
    "Hyderabad",
    "Sukkur",
    "Larkana",
    "Mirpur Khas",
    "Nawabshah",
    "Jacobabad",
    "Kandiaro",
    "Shikarpur",
    "Ghotki",
    "Ratodero",
    "Khairpur",
    "Pir Jo Goth",
    "Kot Diji",
    "Khanpur",
    "Naukot",
    "Mithi",
    "Nagarparkar",
    "Islamkot",
    "Umerkot",
  ];
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages(file);

    // Generate image previews for each selected image
    /* const imagePreviewList = [];
    for (let i = 0; i < selectedImages.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreviewList.push(e.target.result);
        if (imagePreviewList.length === selectedImages.length) {
          setImagePreviews(imagePreviewList);
        }
      };
      reader.readAsDataURL(selectedImages[i]);
    }*/
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recieverId", recieverEmail);
    formData.append("UserName", userName);
    formData.append("UserEmail", UserEmail);
    formData.append("category_me", categor);
    formData.append("subCategory", subcategor);
    formData.append("type", selectedType);
    formData.append("title", title);
    formData.append("description", discription);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("location", selectedCity);
    formData.append("contact", userPhone);
    formData.append("image", images);
    try {
      const response = await fetch("http://localhost:3000/upload/photo", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setMessage("Advertisement created successfully");
        navigat("/");
        setTitle("");
        setDiscription("");
        setPrice(0);
        setSelectedCity("Lahore");
        setUserPhone("");
      } else {
        setMessage("Error creating advertisement");
      }
    } catch (error) {
      setMessage("Network error");
    }
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="my-4 text-center">{headTitle}</h2>
      <MessageDisplay message={message} setMessage={setMessage} />
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="border border-gray-400"
      >
        <div className="border-b border-b-gray-900">
          <div className="mb-4  mx-4 md:mx-1">
            <h3 className="text-3xl">Selected Categories</h3>
            <h5 className="text-xl">
              {categor}/{subcategor}
              {categoryText ? <span>/{selectedType}</span> : <div></div>}
            </h5>
          </div>
        </div>
        <div className=" mb-2 ml-4 mr-2 border-b border-gray-300 pb-4">
          <h4 className="text-2xl my-2 ">Title</h4>
          <input
            type="text"
            className="border border-gray-400 outline-sky-800 rounded-md py-3 pl-2 text-xl w-full"
            placeholder="Give a Name to you add which is seened when user search"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-2 ml-4 mr-2 border-b border-gray-400 pb-4">
          <h4 className="text-2xl my-2">Discription</h4>
          <textarea
            type="text"
            className="border outline-red-400 h-auto text-start p-2 border-gray-300 w-full"
            placeholder="Add details about your add"
            value={discription}
            name="description"
            onChange={(e) => setDiscription(e.target.value)}
            rows="6"
            cols="6"
          />
        </div>
        <div className="border-b border-gray-300 pb-4">
          <div className="flex my-2 ml-4">
            <div
              className="px-4 py-2 bg-transparent  text-xl hover:bg-slate-300 focus:bg-slate-400 border relative hover:bottom-1 hover:left-1 border-gray-700 rounded-lg mx-2"
              onClick={() => setBrand("new")}
              value="new"
            >
              New
            </div>
            <div
              type="button"
              className="px-4 py-2 bg-transparent  text-xl hover:bg-slate-300 focus:bg-slate-400 border border-gray-700 rounded-lg mx-2 relative hover:bottom-1 hover:left-1"
              onClick={() => setBrand("secondHand")}
              value="secondHand"
            >
              SecondHand
            </div>
          </div>
        </div>
        <div className="border-b border-b-gray-900">
          <h4 className="text-2xl md:text-lg my-2 mx-4 mobile:mx-1">
            Add a images of your add
          </h4>
          <div className="my-4  ml-4 flex">
            <input
              type="file"
              accept="image/*"
              name="images"
              onChange={handleImageChange}
            />
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Image ${index + 1}`}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            ))}
          </div>
        </div>
        <div className="my-4 border-b border-b-gray-900 w-full flex  ">
          <div className="mx-4 w-1/2">
            <h4 className="text-xl md:text-lg mb-1">Set a price</h4>
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              className="pl-3 py-3 outline-sky-500 rounded-md w-full my-2 border border-gray-600"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center w-[45%] ">
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full py-3 px-2 border mt-7 rounded-md border-gray-400 outline-none"
            >
              <option value="">Select a city</option>
              {cityList.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-4 border-b border-b-gray-900 w-full flex  ">
          <input
            className="w-[95%] mx-4 my-2 pl-4 py-2 border border-gray-300 outline-none text-xl"
            type="tel"
            min={11}
            max={13}
            value={userPhone}
            name="contact"
            placeholder="+92"
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </div>
        <div className=" my-2 mx-4 md:mx-1">
          <button
            className="px-7 py-2 text-xl font-semibold text-white bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-600"
            type="submit"
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Attributes;
