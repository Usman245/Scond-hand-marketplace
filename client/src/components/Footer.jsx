import { RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-gray-300 relative bottom-0 w-full">
      <div className="grid grid-cols-4 mx-10 my-5 mobile:mx-1 mobile:grid-cols-1">
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl font-medium mobile:text-lg ">
              Popular Categories
            </h1>
          </div>
          <Link to="/category/cars">Cars</Link>
          <Link to="/category/flat for rent">Flat for Rent</Link>
          <Link to="/category/mobiles">Mobile Phone</Link>
          <Link to="/category/jobs">Jobs</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium mobile:text-lg ">
            Trendings Searches
          </h1>
          <Link to="/category/bikes">Bikes</Link>
          <Link to="/category/watches">Watches</Link>
          <Link to="/category/books">Books</Link>
          <Link to="/category/dogs">Dogs</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium mobile:text-lg ">About Us</h1>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/for group">Group</Link>
          <Link to="/for business">For Business</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium mobile:text-lg ">Follow Us</h1>
          <div className="flex my-3">
            <RxTwitterLogo className="w-8 h-8 mr-2 cursor-pointer" />
            <RxLinkedinLogo className="w-8 h-8 mx-2 cursor-pointer" />
            <RxInstagramLogo className="w-8 h-8 mx-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
