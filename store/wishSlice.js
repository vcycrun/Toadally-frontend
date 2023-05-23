import { createSlice } from "@reduxjs/toolkit";
export const wishSlice = createSlice({

    name: 'wish',
    initialState: {
        wishItems: [],
    },
    reducers: {
        addToWish: (state, action) => {
            const item = state.wishItems.find((p) => p.id === action.payload.id )
            if(item){
                alert("Item already present in the wishlist"); 
            } else {
                state.wishItems.push({...action.payload, quantity: 1})
            }
        },
        removeFromWish: (state, action) => {
            state.wishItems = state.wishItems.filter((p) => p.id !== action.payload.id )
        }
    },
});

export const { addToWish, removeFromWish } = wishSlice.actions

export default wishSlice.reducer 