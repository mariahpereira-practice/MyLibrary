import { createSlice,} from "@reduxjs/toolkit";
import { logout } from '../actions/logout';
import type { CartItem } from "../../types";

const StatusCart = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCEEDED: "succeeded",
    FAILED: "failed"
} as const;

export type StatusCart = typeof StatusCart[keyof typeof StatusCart];

interface CartState {
    itens: CartItem[];
    totalAmount: number;
    totalQuantity: number;
    status: StatusCart;
    error: string | null;
}

const initialState: CartState = {
    itens: [],
    totalAmount: 0,
    totalQuantity: 0,
    status: StatusCart.IDLE,
    error: null
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logout, () => {
            return initialState;
        });
    }
});

export const selectCart = (state: any) => state.cart;
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;