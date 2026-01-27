import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;

            // 🔍 Check if product already exists
            const existingItem = state.items.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                // ✅ Product exists → update field
                existingItem.quantity += 1;
            } else {
                // ✅ Product does not exist → add with new field
                state.items.push({
                    ...product,
                    quantity: 1,
                });
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        removeItem: (state, action) => {
  state.items = state.items.filter(
    (item) => item.id !== action.payload
  );
},
        clearCart: (state) => {
            state.items.length = 0
        },
    },
})
export const { addItem, updateQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;