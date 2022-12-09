import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>
);
