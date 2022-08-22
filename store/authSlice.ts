import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

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
        setAuthState(state, action) {
            state.authState = action.payload;
        },
    },
}

export const authSlice = createSlice(sliceProps);

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;