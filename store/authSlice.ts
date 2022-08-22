import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import handler from "../utils/services/api"

export interface AuthState {
    authState: boolean;
    wallet: string;
}

const initialState: AuthState = {
    authState: false,
    wallet: ""
};

const sliceProps = {
    name: "auth",
    initialState,
    reducers: {
        setAuthState(state, action: PayloadAction<boolean>) {
            state.authState = action.payload;
        },
    },
}

export const authSlice = createSlice(sliceProps);

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;