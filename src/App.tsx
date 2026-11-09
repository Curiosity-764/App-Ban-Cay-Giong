import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageProduct from './pages/HomePageProduct.tsx';
import AboutPage from "./pages/AboutPage.tsx";
export default function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path="/gioi-thieu" element={<AboutPage />} />
                  <Route path="/gioi-thieu" element={<AboutPage />} />
                  <Route
                      path="*"
                      element={<div className="container py-5">Không tìm thấy trang.</div>}
                  />
              </Routes>
            <div className="container py-5 text-center" style={{ minHeight: '40vh' }}>
              <HomePageProduct />
            </div>
          </Layout>
      </BrowserRouter>
  );
}