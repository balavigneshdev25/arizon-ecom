'use client'
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
