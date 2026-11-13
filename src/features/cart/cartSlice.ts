import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ id: string; quantity?: number }>) => {
            const { id, quantity = 1 } = action.payload;
            const existing = state.items.find((item) => item.id === id);

            if (existing) {
                existing.quantity += quantity;
            } else {
                state.items.push({ id, quantity });
            }
        },

        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((p) => p.id === id);

            if (!item) return;

            if (quantity <= 0) {
                state.items = state.items.filter((p) => p.id !== id);
            } else {
                item.quantity = quantity;
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;