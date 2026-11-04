import Layout from './components/layout/Layout';
import HomePageProduct from './pages/HomePageProduct.tsx';
export default function App() {
  return (
      <Layout>
        <div className="container py-5 text-center" style={{ minHeight: '40vh' }}>
          <HomePageProduct />
        </div>
      </Layout>
  );
}