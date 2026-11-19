import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { fetchProducts, setCategory, setSubCategory, setSaleFilter } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../components/pagination/Pagination';

export default function HomePageProduct() {
    const dispatch = useAppDispatch();
    const { items, status, activeCategory, activeSubCategory, isSaleFilterActive } = useAppSelector((state) => state.products);
    
    const [searchParams] = useSearchParams();
    const searchTerm = (searchParams.get('q') ?? '').trim().toLocaleLowerCase('vi');

    const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 18, seconds: 17 });

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 8,
        _totalRows: 0,
    });

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;
                if (hours === 0 && minutes === 0 && seconds === 0) return prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                    }
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    let visibleProducts = items;

    if (isSaleFilterActive) {
        visibleProducts = visibleProducts.filter(p => p.onSale === true);
    } else {
        visibleProducts = activeCategory === 'Tất cả' ? items : items.filter(p => p.category === activeCategory);
        if (activeSubCategory) {
            visibleProducts = visibleProducts.filter(p => p.subCategory === activeSubCategory);
        }
    }

    if (searchTerm) {
        visibleProducts = visibleProducts.filter(p => 
            p.name.toLocaleLowerCase('vi').includes(searchTerm)
        );
    }

    useEffect(() => {
        setPagination(prev => ({
            ...prev,
            _totalRows: visibleProducts.length,
            _page: 1 
        }));
    }, [visibleProducts.length, activeCategory, activeSubCategory, isSaleFilterActive, searchTerm]);

    let title = "";
    if (isSaleFilterActive) {
        title = '🔥 SẢN PHẨM KHUYẾN MÃI';
    } else if (searchTerm) {
        title = `Kết quả tìm kiếm cho: "${searchParams.get('q')}"`;
    } else if (activeSubCategory) {
        title = activeSubCategory;
    } else if (activeCategory === 'Tất cả') {
        title = 'SẢN PHẨM NỔI BẬT';
    } else {
        title = activeCategory;
    }

    const indexOfLastItem = pagination._page * pagination._limit;
    const indexOfFirstItem = indexOfLastItem - pagination._limit;
    const currentItems = visibleProducts.slice(indexOfFirstItem, indexOfLastItem);

    function handlePageChange(newPage: number) {
        setPagination(prev => ({
            ...prev,
            _page: newPage
        }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
                                className={`list-group-item list-group-item-action border-0 py-2 fw-bold ${isSaleFilterActive ? 'bg-light' : ''}`}
                                style={{ cursor: 'pointer',color: "2d5016" }}
                                onClick={() => dispatch(setSaleFilter(true))}
                            >
                                🔥 KHUYẾN MÃI & VOUCHER
                            </li>
                            <li
                                className={`list-group-item list-group-item-action border-0 py-2 ${activeCategory === 'Tất cả' && !isSaleFilterActive ? 'fw-bold bg-light' : ''}`}
                                style={{ cursor: 'pointer', color: '#2d5016' }}
                                onClick={() => dispatch(setCategory('Tất cả'))}
                            >
                                Tất cả sản phẩm
                            </li>
                            {categories.map((cat) => (
                                <div key={cat.label}>
                                    <li
                                        className={`list-group-item list-group-item-action border-0 py-2 fw-semibold ${activeCategory === cat.label && !isSaleFilterActive ? 'text-success bg-light' : ''}`}
                                        style={{ cursor: 'pointer', color: '#2d5016' }}
                                        onClick={() => dispatch(setCategory(cat.label))}
                                    >
                                        {cat.label}
                                    </li>
                                    {cat.children && (
                                        <ul className="list-unstyled ps-4 mb-2">
                                            {cat.children.map((sub, idx) => (
                                                <li 
                                                    key={idx} 
                                                    onClick={() => dispatch(setSubCategory(sub))}
                                                    className={`py-1 small ${activeSubCategory === sub && !isSaleFilterActive ? 'fw-bold text-success' : 'text-muted'}`}
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

                <div className="col-md-9">
                    {isSaleFilterActive && (
                        <div className="alert alert-danger d-flex justify-content-between align-items-center mb-4 rounded-0 border-danger">
                            <span className="fw-bold">🔥 Khuyến mãi kết thúc trong:</span>
                            <span className="fw-bold fs-4 font-monospace">
                                {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
                            </span>
                        </div>
                    )}

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="fw-bold mb-0" style={{ color: '#2d5016' }}>
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

                    {status === 'succeeded' && currentItems.length > 0 && (
                        <>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                                {currentItems.map((product) => (
                                    <div className="col" key={product.id}>
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>

                            <Pagination 
                                pagination={pagination}
                                onPageChange={handlePageChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}