import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import { useMyContext } from "../ContexProvider/SearchContext";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQXL7Dm3N3WcRkFLIqoTCpkkN7vihjHPo",
  authDomain: "final-year-project-2f5ed.firebaseapp.com",
  projectId: "final-year-project-2f5ed",
  storageBucket: "final-year-project-2f5ed.appspot.com",
  messagingSenderId: "947288134212",
  appId: "1:947288134212:web:6d77c978572a80d59ae211",
  measurementId: "G-F16FQ2254L",
};
const firebaseApp = initializeApp(firebaseConfig);

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userForm, setUserForm] = useState({
    userName: "",
    UserEmail: "",
    userProfile: "",
  });
  const [reapetPassword, setReapetPassword] = useState("");
  const { isRegister, setRegister, isLogged, setLogged } = useMyContext();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if ((formData.name, formData.email, formData.password, reapetPassword)) {
      if (formData.password !== reapetPassword) {
        alert("Please enter same password");
      } else {
        try {
          const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.status === 200) {
            setRegister(true);
          }
        } catch (error) {
          // Registration failed, handle error logic
          console.error("Registration error:", error);
          alert("Registration failed");
          // Display an error message to the user or handle it as needed
        }
      }
    } else {
      alert("fill all fields");
    }
  };
  const auth = getAuth(firebaseApp);

  // Create a GoogleAuthProvider instance
  const googleAuthProvider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      // Create a new user account
      const result = await signInWithPopup(auth, googleAuthProvider);
      setUserForm({
        ...userForm,
        userName: result.user.displayName,
        UserEmail: result.user.email,
        userProfile: result.user.photoURL,
      });

      if (userForm.UserEmail) {
        const response = await fetch("http://localhost:3000/register/google", {
          method: "POST",
          body: JSON.stringify(userForm),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          setLogged(true);
        }
        if (response.status === 200) {
          setRegister(true);
        } else {
          alert("there was an error");
        }
      } else {
        alert("Please try again later");
      }
    } catch (error) {
      alert("Google login error:", error);
    }
  };
  return (
    <div>
      {isRegister ? (
        <Navigate to="/login" />
      ) : (
        <div>
          {isLogged ? (
            <Navigate to="/" />
          ) : (
            <div className=" flex justify-center items-center min-h-[calc(100vh-73px)] bg-slate-200">
              <div className="w-1/2 mobile:w-full rounded-md border border-black mobile:border-none h-1/2">
                <h3 className="text-3xl text-center my-4">Create an account</h3>
                <form onSubmit={handleRegister}>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="my-2 mx-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      className="w-[97%] mx-2 text-xl py-3 border border-gray-300 outline-none rounded-md pl-3 "
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="my-2 mx-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      className="w-[97%] mx-2 text-xl py-3 border border-gray-300 outline-none rounded-md pl-3 "
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
                  <div className="flex flex-col ">
                    <label htmlFor="name" className="my-2 mx-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="reapetPassword"
                      value={reapetPassword}
                      className="w-[97%] mx-2 text-xl py-3 border border-gray-300 outline-none rounded-md pl-3 "
                      onChange={(e) => setReapetPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-3 ">
                    <button
                      type="submit"
                      className="bg-blue-500 w-[97%] text-center hover:bg-blue-700 text-white font-bold mx-2 py-3 px-4 rounded-md"
                    >
                      Register
                    </button>
                    <div className="my-3 mx-2 flex flex-col justify-center items-center">
                      <p className="text-lg font-normal tect-center">
                        Countinue with
                      </p>
                      <FcGoogle
                        className=" w-11 h-11 cursor-pointer"
                        onClick={handleGoogleLogin}
                      />
                    </div>
                    <p className=" text-lg my-2 mx-2 text-center">
                      Already have an account
                      <Link
                        to="/login"
                        className="text-blue-600 text-xl font-meduim cursor-pointer"
                      >
                        {" "}
                        login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Register;
