import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { fetchProducts, setCategory, setSubCategory } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories';
import { useSearchParams } from 'react-router-dom';

export default function HomePageProduct() {
    const dispatch = useAppDispatch();
    const { items, status, activeCategory, activeSubCategory } = useAppSelector((state) => state.products);

    const [searchParams] = useSearchParams();
    const searchTerm = (searchParams.get('q') ?? '').trim().toLocaleLowerCase('vi');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    let visibleProducts = activeCategory === 'Tất cả'
        ? items
        : items.filter(p => p.category === activeCategory);

    if (activeSubCategory) {
        visibleProducts = visibleProducts.filter(p => p.subCategory === activeSubCategory);
    }

    if (searchTerm) {
        visibleProducts = visibleProducts.filter(p =>
            p.name.toLocaleLowerCase('vi').includes(searchTerm)
        );
    }

    let title:string;
    if (searchTerm) {
        title = `Kết quả tìm kiếm cho: "${searchParams.get('q')}"`;
    } else if (activeSubCategory) {
        title = activeSubCategory;
    } else if (activeCategory === 'Tất cả') {
        title = 'SẢN PHẨM NỔI BẬT';
    } else {
        title = activeCategory;
    }

    return (
        <div className="container py-4">
            <div className="row">

                {/* SIDEBAR */}
                <div className="col-md-3 mb-4">
                    <div className="card border-0 shadow-sm rounded-0">
                        <div className="card-header text-white text-center fw-bold py-3 rounded-0" style={{ backgroundColor: '#2d5016' }}>
                            DANH MỤC SẢN PHẨM
                        </div>
                        <ul className="list-group list-group-flush">
                            <li
                                className={`list-group-item list-group-item-action border-0 py-2 ${activeCategory === 'Tất cả' ? 'fw-bold bg-light' : ''}`}
                                style={{ cursor: 'pointer', color: '#2d5016' }}
                                onClick={() => dispatch(setCategory('Tất cả'))}
                            >
                                Tất cả sản phẩm
                            </li>
                            {categories.map((cat) => (
                                <div key={cat.label}>
                                    <li
                                        className={`list-group-item list-group-item-action border-0 py-2 fw-semibold ${activeCategory === cat.label ? 'text-success bg-light' : ''}`}
                                        style={{ cursor: 'pointer', color: '#2d5016' }}
                                        onClick={() => dispatch(setCategory(cat.label))}
                                    >
                                        {cat.label}
                                    </li>

                                    {/* SUB-CATEGORIES */}
                                    {cat.children && (
                                        <ul className="list-unstyled ps-4 mb-2">
                                            {cat.children.map((sub, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() => dispatch(setSubCategory(sub))}
                                                    className={`py-1 small ${activeSubCategory === sub ? 'fw-bold text-success' : 'text-muted'}`}
                                                    style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                                                >
                                                    <span className="me-2 text-success">•</span> {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* PRODUCT GRID */}
                <div className="col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="fw-bold mb-0" style={{ color: '#2d5016' +
                                '' }}>
                            {title}
                        </h4>
                    </div>

                    {status === 'loading' && <p>Đang tải sản phẩm...</p>}

                    {status === 'succeeded' && visibleProducts.length === 0 && (
                        <p className="text-muted">
                            {searchTerm
                                ? `Không tìm thấy sản phẩm có tên "${searchParams.get('q')}".`
                                : 'Không có sản phẩm nào trong danh mục này.'}
                        </p>
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