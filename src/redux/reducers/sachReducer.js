import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSach: []
}

const sachSlice = createSlice({
    name: 'sach',
    initialState,
    reducers: {
        addSach(state, action){
            state.listSach.push(action.payload)
        }
    }
})

export const {addSach} = sachSlice.actions;
export default sachSlice.reducer

