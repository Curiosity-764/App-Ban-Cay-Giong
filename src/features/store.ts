import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import wishlistReducer from './wishlist/wishlistSlice';


export const store = configureStore({
  reducer: {
    products: productsReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
