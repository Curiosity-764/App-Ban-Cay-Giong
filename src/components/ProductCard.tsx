import type { Product } from '../data/products';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link to={`/product/${product.id}`} className="text-decoration-none">
            <div className="card h-100 border-0 shadow-sm product-card">
                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-dark fs-6 mb-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.name}
                    </h5>
                    <p className="card-text text-muted small flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.description}
                    </p>
                    <div className="d-flex align-items-baseline gap-1 mt-2">
                        <span className="fw-bold fs-5" style={{ color: '#2d5016' }}>
                            {product.price.toLocaleString('vi-VN')} ₫
                        </span>
                        <span className="text-muted small">/ {product.unit}</span>
                    </div>

                    <button
                        className="btn w-100 mt-3 text-white fw-bold"
                        style={{ backgroundColor: '#2d5016', borderRadius: '4px' }}
                    >
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </Link>
    );
}