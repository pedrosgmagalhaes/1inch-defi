import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import handler from "../utils/services/api"
import { HYDRATE } from "next-redux-wrapper";

export interface AuthState {
    authState: boolean;
    wallet: string;
}

const initialState: AuthState = {
    authState: false,
    wallet: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState(state, action: PayloadAction<boolean>) {
            state.authState = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    }
},
);

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;