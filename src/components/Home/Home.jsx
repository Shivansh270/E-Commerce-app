import Banner from "./Banner/Banner";
import { useEffect, useContext } from "react";
import "./Home.css";
import Category from "./Category/Category";
import { fetchDataFromApi } from "../../utils/api";
import { StateContext } from "../../utils/StateContextProvider";
import Products from "../Products/Products";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(StateContext);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
      .then((res) => {
        console.log(res);
        setCategories(res);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
