import { createContext, useState, useContext } from "react";

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [isLogged, setLogged] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [userName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [isOpened, setOpened] = useState(false);
  const [categor, setCategor] = useState("");
  const [subcategor, setSubcategor] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [categoryText, setCategoryText] = useState(false);
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("new");
  const [images, setImages] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [adId, setAdId] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [recieverEmail, setRecieverEmail] = useState("");

  return (
    <MyContext.Provider
      value={{
        isLogged,
        setLogged,
        isRegister,
        setRegister,
        userName,
        setUserName,
        userProfile,
        setUserProfile,
        UserEmail,
        setUserEmail,
        isOpened,
        setOpened,
        categor,
        setCategor,
        subcategor,
        setSubcategor,
        selectedType,
        setSelectedType,
        searchQuery,
        setQuery,
        searched,
        setSearched,
        searchResult,
        setSearchResult,
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
        adId,
        setAdId,
        senderEmail,
        setSenderEmail,
        recieverEmail,
        setRecieverEmail,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
