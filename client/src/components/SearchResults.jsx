import { useMyContext } from "../ContexProvider/SearchContext";
import Cart from "./Cart";

const SearchResults = () => {
  const { searchResult, searchQuery } = useMyContext();

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
  return (
    <div className="searchResults">
      <h1>Ads related {searchQuery}</h1>
      {searchResult.map((e) => (
        <Cart
          key={e._id}
          id={e._id}
          price={e.price}
          title={e.title}
          location={e.location}
          image={e.image}
          time={getCurrentTimeDifference(e.created_at)}
        />
      ))}
    </div>
  );
};

export default SearchResults;
