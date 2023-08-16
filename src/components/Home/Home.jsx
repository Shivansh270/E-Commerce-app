import Banner from "./Banner/Banner";
import { useEffect } from "react";
import "./Home.css";
import Category from "./Category/Category";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          {/* <Products
                headingText="Popular Products"
                products={products}
                /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
