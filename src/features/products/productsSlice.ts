import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { localProduct, type Product } from '../../data/products';

interface ProductsState {
    items: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    activeCategory: string;
    activeSubCategory: string;
    isSaleFilterActive: boolean;
}

const initialState: ProductsState = {
    items: [],
    status: 'idle',
    activeCategory: 'Tất cả',
    activeSubCategory: '',
    isSaleFilterActive: false,
};

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return localProduct;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.activeCategory = action.payload;
            state.activeSubCategory = '';
            state.isSaleFilterActive = false;
        },
        setSubCategory: (state, action) => {
            state.activeSubCategory = action.payload;
            state.isSaleFilterActive = false;
        },
        setSaleFilter: (state, action) => {
            state.isSaleFilterActive = action.payload;
            if (action.payload) {
                state.activeCategory = 'Tất cả';
                state.activeSubCategory = '';
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => { state.status = 'failed'; });
    },
});

export const { setCategory, setSubCategory, setSaleFilter } = productsSlice.actions;
export default productsSlice.reducer;