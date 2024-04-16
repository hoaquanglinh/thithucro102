import { configureStore } from "@reduxjs/toolkit";
import sachReducer from "../reducers/sachReducer";
import cartReducer from "../reducers/cartReducer";

export default configureStore({
    reducer: {
        listSach: sachReducer,
        listCart: cartReducer
    }
})