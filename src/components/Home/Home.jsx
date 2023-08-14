import Banner from "./Banner/Banner";
import "./Home.css";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
          <Banner/>
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
