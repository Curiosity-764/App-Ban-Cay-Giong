import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageProduct from './pages/HomePageProduct.tsx';
import AboutPage from "./pages/AboutPage.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
export default function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path="/"  element={<HomePageProduct />} />
                  <Route path="/gioi-thieu" element={<AboutPage />} />
                  <Route path="/san-pham" element={<HomePageProduct />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route
                      path="*"
                      element={<div className="container py-5">Không tìm thấy trang.</div>}

                  />
              </Routes>
            <div className="container py-5 text-center" style={{ minHeight: '40vh' }}>

            </div>
          </Layout>
      </BrowserRouter>
  );
}