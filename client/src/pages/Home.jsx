import { useMyContext } from "../ContexProvider/SearchContext";
import AllAds from "../components/AllAds";
import Categories from "../components/Categories";
import SearchResults from "../components/SearchResults";

const Home = () => {
  const { searched } = useMyContext();
  return (
    <div className="">
      <Categories />
      {searched ? <SearchResults /> : <AllAds />}
    </div>
  );
};

export default Home;
