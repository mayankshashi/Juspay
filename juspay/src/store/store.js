import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/orderSlice';
import ecommerceReducer from './slices/ecommerceSlice';
import sidebarReducer from './slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    ecommerce: ecommerceReducer,
    sidebar: sidebarReducer,
  },
});
