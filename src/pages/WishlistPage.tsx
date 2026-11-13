import { Link } from 'react-router-dom';
import { useAppSelector } from '../features/hooks';
import { toggleWishlist } from '../features/wishlist/wishlistSlice';
import { useAppDispatch } from '../features/hooks';

export default function WishlistPage() {
    const dispatch = useAppDispatch();
    const wishlistIds = useAppSelector((state) => state.wishlist.items);
    const products = useAppSelector((state) =>
        state.products.items.filter((product) => wishlistIds.includes(product.id))
    );

    return (
        <div className="container py-4" style={{ minHeight: '70vh' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold mb-0" style={{ color: '#2d5016' }}>
                    Sản phẩm yêu thích
                </h2>
                {products.length > 0 && (
                    <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => dispatch(toggleWishlist(''))}
                    >
                        Xóa tất cả
                    </button>
                )}
            </div>

            {products.length === 0 ? (
                <div className="text-center py-5">
                    <div className="mb-3" style={{ fontSize: '64px' }}>♡</div>
                    <h5 className="text-muted mb-3">Chưa có sản phẩm nào trong danh sách yêu thích</h5>
                    <Link to="/san-pham" className="btn btn-success">
                        Tiếp tục mua sắm
                    </Link>
                </div>
            ) : (
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-md-4 col-lg-3" key={product.id}>
                            <div className="card h-100 border-0 shadow-sm">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="card-img-top"
                                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fs-6">{product.name}</h5>
                                    <p className="text-muted small flex-grow-1">{product.description}</p>
                                    <div className="fw-bold text-success mb-3">
                                        {product.price.toLocaleString('vi-VN')} ₫
                                    </div>

                                    <div className="d-flex gap-2">
                                        <Link to={`/product/${product.id}`} className="btn btn-outline-success flex-fill">
                                            Xem chi tiết
                                        </Link>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => dispatch(toggleWishlist(product.id))}
                                            title="Bỏ yêu thích"
                                        >
                                            ♥
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}