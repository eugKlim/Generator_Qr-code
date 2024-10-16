import { configureStore } from "@reduxjs/toolkit";
import QrSliceReducer from "./QrSlice";

const Store = configureStore({
  reducer: {
    qrSlice: QrSliceReducer
  }
})

export default Store;