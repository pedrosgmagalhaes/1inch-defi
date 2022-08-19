import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export interface AuthState {
    authState: boolean;
}

const initialState: AuthState = {
    authState: false,
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