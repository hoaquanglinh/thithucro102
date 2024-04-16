import { createAsyncThunk } from "@reduxjs/toolkit";
import { addSach } from "../reducers/sachReducer";

const url = 'http://10.0.2.2:3000/sach'

export const fetchSach = () => {
    return async dispatch => {
        try {
            const res = await fetch(url)
            const data = await res.json();

            console.log("data: " + data);

            data.forEach(row => {
                dispatch(addSach(row))
            });

        } catch (error) {
            console.log("Error fetching Sach: ", error)
        }
    }
}