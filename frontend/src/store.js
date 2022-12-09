import { configureStore } from "@reduxjs/toolkit";

import {
  productDetailsReducer,
  productReducer,
} from "./Reducers/productReducer";
import { userReducer } from "./Reducers/userReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
  },
});

export default store;
