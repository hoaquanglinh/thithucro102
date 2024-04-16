import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../actions/cartAction";

const initialState = {
    listCart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action){
            state.listCart.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.listCart.push(action.payload)
        }).addCase(addToCart.rejected, (state, action) => {
            console.log('Them loi:', action.error.message);
        })
    }
})

export const {addCart} = cartSlice.actions;
export default cartSlice.reducer