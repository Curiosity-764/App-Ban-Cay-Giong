import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { fetchProducts, setCategory } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories';

export default function HomePageProduct() {
    const dispatch = useAppDispatch();
    const { items, status, activeCategory } = useAppSelector((state) => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const visibleProducts = activeCategory === 'Tất cả'
        ? items
        : items.filter(p => p.category === activeCategory);

    return (
        <div className="container py-4">
            <div className="row">


                <div className="col-md-3 mb-4">
                    <div className="card border-0 shadow-sm rounded-0">
                        <div className="card-header text-white text-center fw-bold py-3 rounded-0" style={{ backgroundColor: '#2d5016' }}>
                            DANH MỤC SẢN PHẨM
                        </div>
                        <ul className="list-group list-group-flush">
                            <li
                                className={`list-group-item list-group-item-action border-0 py-2 ${activeCategory === 'Tất cả' ? 'fw-bold' : ''}`}
                                style={{ cursor: 'pointer', color: '#2d5016' }}
                                onClick={() => dispatch(setCategory('Tất cả'))}
                            >
                                Tất cả sản phẩm
                            </li>
                            {categories.map((cat) => (
                                <div key={cat.label}>
                                    <li
                                        className={`list-group-item list-group-item-action border-0 py-2 ${activeCategory === cat.label ? 'fw-bold' : ''}`}
                                        style={{ cursor: 'pointer', color: '#2d5016' }}
                                        onClick={() => dispatch(setCategory(cat.label))}
                                    >
                                        {cat.label}
                                    </li>

                                    {cat.children && (
                                        <ul className="list-unstyled ps-3 mb-2">
                                            {cat.children.map((sub, idx) => (
                                                <li key={idx} className="py-1 small text-muted" style={{ cursor: 'pointer' }}>
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="fw-bold mb-0" style={{ color: '#2d5016' }}>
                            {activeCategory === 'Tất cả' ? 'SẢN PHẨM NỔI BẬT' : activeCategory}
                        </h4>
                    </div>

                    {status === 'loading' && <p>Đang tải sản phẩm...</p>}

                    {status === 'succeeded' && visibleProducts.length === 0 && (
                        <p className="text-muted">Không có sản phẩm nào trong danh mục này.</p>
                    )}

                    {status === 'succeeded' && visibleProducts.length > 0 && (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                            {visibleProducts.map((product) => (
                                <div className="col" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}