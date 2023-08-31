import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        value: false,
    },
    reducers: {
        setLoading: (state, action) => {
        state.value = action.payload;
        },
    },
    });

export default loadingSlice;
export const { setLoading } = loadingSlice.actions;
