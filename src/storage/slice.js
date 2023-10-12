import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isTransformed: false,

};

const sliceReducer = createSlice ({
    name:"rootReducer",
    initialState,
    reducers: {
        HandleTransformed: (state, action) => {
            state.isTransformed = !state.isTransformed;
        }
    }
})

export const { HandleTransformed } = sliceReducer.actions;

export default sliceReducer.reducer;