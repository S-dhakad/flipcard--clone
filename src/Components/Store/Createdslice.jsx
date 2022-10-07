
import { createSlice } from "@reduxjs/toolkit";





const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        Addcard: (state, action) => {
            state.push(action.payload);
        },
        RemoveAddcard: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        Removefirst: (state, action) => {
            state.shift(action.payload);
        },
    },
});

export const { Addcard, Removefirst, RemoveAddcard } = productSlice.actions;
export default productSlice.reducer;