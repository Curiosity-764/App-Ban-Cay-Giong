import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../features/hooks';
import { addToCart } from '../features/cart/cartSlice';
import { toggleWishlist } from '../features/wishlist/wishlistSlice';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const product = useAppSelector((state) => state.products.items.find((p) => p.id === id));
    const wishlistIds = useAppSelector((state) => state.wishlist.items);
    const isWishlisted = id ? wishlistIds.includes(id) : false;

    const [quantity, setQuantity] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ product, quantity }));
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
        }
    };

    if (!product) {
        return (
            <div className="container py-5 text-center" style={{ minHeight: '60vh' }}>
                <h3>Không tìm thấy sản phẩm.</h3>
                <Link to="/" className="btn btn-success mt-3">Quay lại trang chủ</Link>
            </div>
        );
    }

    return (
        <div className="container py-4" style={{ minHeight: '80vh' }}>
            
            <button 
                onClick={() => navigate(-1)} 
                className="btn btn-light border mb-4 d-flex align-items-center gap-2"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Quay lại
            </button>

            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Trang chủ</Link></li>
                    <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">{product.category}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>

            <div className="row bg-white p-4 p-md-5 rounded-4 shadow-sm">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="position-relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded-3 w-100 shadow-sm"
                            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
                        />
                        {product.stock < 10 && (
                            <span className="position-absolute top-0 start-0 m-3 badge bg-danger fs-6">
                                Sắp hết hàng
                            </span>
                        )}
                    </div>
                </div>

                <div className="col-md-6 ps-md-5 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="text-uppercase text-muted fw-bold" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>
                            {product.category}
                        </span>
                        <button 
                            className="btn btn-light rounded-circle shadow-sm"
                            onClick={() => dispatch(toggleWishlist(product.id))}
                            title={isWishlisted ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={isWishlisted ? "#d32f2f" : "none"} stroke={isWishlisted ? "#d32f2f" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>

                    <h1 className="fw-bold mb-3 display-5">{product.name}</h1>

                    <div className="d-flex align-items-center gap-3 mb-4">
                        <span className="badge bg-success bg-opacity-25 text-success border border-success px-3 py-2 rounded-pill">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="me-1 mb-1">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Còn hàng
                        </span>
                        <span className="text-muted small">Mã SP: {product.id}</span>
                    </div>

                    <h2 className="fw-bold mb-4" style={{ color: '#2d5016', fontSize: '2.5rem' }}>
                        {product.price.toLocaleString('vi-VN')} ₫ <span className="fs-6 text-muted fw-normal ms-2">/ {product.unit}</span>
                    </h2>

                    <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                        {product.description}
                    </p>

                    <hr className="my-4 text-muted" />

                    <div className="d-flex align-items-center mb-4">
                        <span className="me-3 fw-bold text-muted">Số lượng:</span>
                        <div className="input-group border rounded" style={{ width: '130px', overflow: 'hidden' }}>
                            <button
                                className="btn btn-light border-0"
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            >-</button>
                            <input type="text" className="form-control text-center border-0 bg-white fw-bold" value={quantity} readOnly />
                            <button
                                className="btn btn-light border-0"
                                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                            >+</button>
                        </div>
                        <span className="ms-3 text-muted small">{product.stock} sản phẩm có sẵn</span>
                    </div>

                    <div className="d-flex flex-column flex-sm-row gap-3 mt-auto pt-3">
                        <button 
                            className="btn btn-outline-success btn-lg flex-grow-1 py-3 fw-bold rounded-3"
                            onClick={handleAddToCart} 
                        >
                            Thêm vào giỏ hàng
                        </button>
                        <button 
                            className="btn btn-success btn-lg flex-grow-1 py-3 fw-bold rounded-3 text-white" 
                            style={{ backgroundColor: '#2d5016' }}
                            onClick={() => {
                                handleAddToCart();
                                setTimeout(() => navigate('/cart'), 1500);
                            }}
                        >
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, cursor: 'pointer' }}
                    onClick={() => setShowPopup(false)}
                >
                    <div className="bg-white p-4 rounded-4 shadow-lg text-center" style={{ maxWidth: '350px', animation: 'fadeIn 0.3s' }}>
                        <div className="text-success mb-3 d-flex justify-content-center">
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                        </div>
                        <h4 className="fw-bold mb-2">Thành công!</h4>
                        <p className="text-muted mb-0">Đã thêm <strong>{quantity}</strong> sản phẩm vào giỏ hàng.</p>
                    </div>
                </div>
            )}
        </div>
    );
}