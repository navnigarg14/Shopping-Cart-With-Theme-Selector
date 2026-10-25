import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { ThemeSlice } from "./Slices/ThemeSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        theme: ThemeSlice.reducer,
    }
});












// "cart" is the name of a specific slice of state in your global Redux store, and "CartSlice" is the reducer function that manages that state.