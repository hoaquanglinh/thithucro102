import { addCart } from "../reducers/cartReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = 'http://10.0.2.2:3000/cart'

export const fetchCart = () => {
    return async dispatch => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data);
            data.forEach(row => {
                dispatch(addCart(row))
            });
        } catch (error) {
            console.log("Error fetching Cart: ", error)
        }
    }
} 

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (objSach, thunk) => {
        console.log(objSach);
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objSach)
            })

            const data = await res.json();

            if(data.ok){
                return data
            }else{
                const err = await res.json();
                return thunk.rejectWithValue(err)
            }
        } catch (error) {
            return thunk.rejectWithValue(error.method)
        }
    }
)

