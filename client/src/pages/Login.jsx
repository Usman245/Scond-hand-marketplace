import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import { useMyContext } from "../ContexProvider/SearchContext.jsx";
import MessageDisplay from "../components/MessageDisplay.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const {
    isLogged,
    setLogged,
    setUserEmail,
    setUserName,
    setRecieverEmail,
    setSenderEmail,
  } = useMyContext();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setUserData(response.data);

          if (response.status === 401) {
            setMessage("user not authenticated");
            console.log(response.status);
          } else if (response.status === 500) {
            setMessage("Password is incorrect");
          } else if (response.status === 200) {
            setLogged(true);
            setUserEmail(response.data.email);
            setUserName(response.data.name);
            setRecieverEmail(response.data.email);
            setSenderEmail(response.data.email);
            const ClientEmail = localStorage.setItem(
              ClientEmail,
              formData.email
            );
            localStorage.setItem(ClientPassword, formData.name);
          }
        });
    } catch (error) {
      // Registration failed, handle error logic
      console.error("Registration error:", error);
      // Display an error message to the user or handle it as needed
    }
  };
  return (
    <div>
      {isLogged ? (
        <Navigate to="/" />
      ) : (
        <div className=" flex justify-center items-center min-h-[calc(100vh-73px)] bg-slate-200">
          <div className="w-[35%] full:w-[30%] xl:w-[25%] mobile:w-full mobile:border-none rounded-md border border-black h-1/2">
            <h3 className="text-3xl text-center my-4">Welcome Back!</h3>
            <MessageDisplay message={message} setMessage={setMessage} />
            <form onSubmit={handleRegister}>
              <div className="flex flex-col">
                <label htmlFor="name" className="my-2 mx-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-[97%] mx-2 pl-3 text-xl py-3 border border-gray-300 outline-none rounded-md "
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="my-2 mx-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  className="w-[97%] mx-2 text-xl py-3 border border-gray-300 outline-none rounded-md pl-3 "
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="my-3 ">
                <button
                  type="submit"
                  className="bg-blue-500 w-[97%] text-center hover:bg-blue-700 text-white font-bold mx-2 py-3 px-4 rounded-md"
                >
                  Login
                </button>
                <div className="my-3 mx-2 flex flex-col justify-center items-center">
                  <p className="text-lg tect-center">Countinue with</p>
                  <FcGoogle className=" w-11 h-11 cursor-pointer" />
                </div>
                <p className=" text-lg my-2 mx-2 text-center">
                  Create an account
                  <Link to="/register" className="text-blue-600 cursor-pointer">
                    {" "}
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
