import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./ProductCard";
import Metadata from "../Layout/Metadata";
import { clearErrors, getProduct } from "../../Actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/Loader";
import Swal from "sweetalert2";
const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (initialState) => initialState.products
  );

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "warning",
        title: error,
      }).then(() => {
        window.location.reload();
      });
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={"ECOMMERCE"} />

          <div className="banner d-flex align-items-center justify-content-center flex-column text-center text-white">
            <p className="m-5">Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
