import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageProduct from './pages/HomePageProduct.tsx';
import AboutPage from "./pages/AboutPage.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import WishlistPage from "./pages/WishlistPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import {useCart} from "./features/hooks"
import CheckoutPage from './pages/CheckoutPage.tsx';

export default function App() {
  useCart()
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
         
          <Route path="/" element={<HomePageProduct />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/san-pham" element={<HomePageProduct />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />

          <Route
            path="*"
            element={<div className="container py-5">Không tìm thấy trang.</div>}
          />
        </Routes>
   
      </Layout>
    </BrowserRouter>
  );
}