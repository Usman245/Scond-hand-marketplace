import "./App.css";
import { MyContextProvider } from "./ContexProvider/SearchContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SellItems from "./pages/SellItems";
import Attributes from "./pages/Attributes";
import Navbar from "./components/Navbar";
import SecondaryNav from "./components/SecondaryNav";
import User from "./pages/User";
import AdDetail from "./pages/AdDetail";
import CategoryPage from "./pages/CategoryPage.jsx";
import Footer from "./components/Footer.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Business from "./pages/Business.jsx";
import ChatComponent from "./pages/Chat.jsx";
function App() {
  const mail = localStorage.getItem("ClientEmail");
  console.log(mail);
  return (
    <div className="">
      <MyContextProvider>
        <BrowserRouter>
          <Navbar />
          <SecondaryNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell-item" element={<SellItems />} />
            <Route
              path="/sell-item/attributes"
              element={
                <Attributes headTitle="Create ad" btnText="Post your ad" />
              }
            />
            <Route
              path="/edit/:id"
              element={<Attributes headTitle="Edit ad" btnText="Update ad" />}
            />
            <Route path="/user" element={<User />} />
            <Route path="/add/:id" element={<AdDetail />} />
            <Route path="/category/:subcategory" element={<CategoryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/for business" element={<Business />} />
            <Route path="/chat/user/:userMail" element={<ChatComponent />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
