import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        cartShow:false
    },
    reducers:{
        showCart(state,action){
            state.cartShow=!state.cartShow;
        },
        addItemToCart(state,action){
                const newItem = action.payload;
                const existingItem = state.items.find((item) => item.id === newItem.id);
                state.totalQuantity++;
                if(!existingItem){
                    state.items=state.items.push({ id: newItem.id,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                        name:newItem.title
                    })
                }else{
                    existingItem.quantity++;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;