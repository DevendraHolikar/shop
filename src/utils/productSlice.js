import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
         allProductsData: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.allProductsData = action.payload
        },
    },
})
export const { addProducts } = productSlice.actions;
export default productSlice.reducer;