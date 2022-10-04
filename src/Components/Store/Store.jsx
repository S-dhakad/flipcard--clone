import { configureStore } from "@reduxjs/toolkit";
import productSlicereducer from "./Createdslice"
const store = configureStore({
    reducer: {
        counter: productSlicereducer,
    },

})
export default store;