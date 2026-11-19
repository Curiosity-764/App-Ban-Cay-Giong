import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { setItem } from '../utils/storage'; 


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


export const useCart = () => {
    const cartItems = useAppSelector((state) => state.cart.items);

    useEffect(() => {
        setItem('cart', cartItems);
    }, [cartItems]);
};