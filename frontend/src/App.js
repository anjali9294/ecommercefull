// import Loader from "./Components/Layout/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import React from "react";
import ProductDetails from "./Components/Product/ProductDetails.js";
import "./App.css";
import Home from "./Components/Home/Home";
import Products from "./Components/Product/Products.js";
import Search from "./Components/Product/Search.js";
import LoginSignup from "./Components/User/LoginSignup";
import store from "./store";
import { loadUser } from "./Actions/userAction";

function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/login" element={<LoginSignup />} />

        <Route exact path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
