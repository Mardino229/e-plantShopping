import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      const item = state.items.find(item=>item.name===action.payload.name)
      if (!item) {
        state.items.push({...action.payload, quantity: 1});
      } else {
        item.quantity++;
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item=>item.name===action.payload.name)
      state.items.splice(index,1);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const item = state.items.find(item=>item.name===name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
