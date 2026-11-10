import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from '../features/hooks';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = useAppSelector((state) =>
        state.products.items.find((p) => p.id === id)
    );


    const [quantity, setQuantity] = useState(1);

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

            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Trang chủ</Link></li>
                    <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">{product.category}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>

            <div className="row bg-white p-4 rounded shadow-sm">
                {/* Left Column: Image */}
                <div className="col-md-5 mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded w-100"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Right Column: Info & Checkout */}
                <div className="col-md-7">
                    <h2 className="fw-bold mb-3">{product.name}</h2>

                    <div className="d-flex align-items-center gap-3 mb-3">
                        <span className="badge bg-success">Còn hàng</span>
                        <span className="text-muted">Mã SP: {product.id}</span>
                    </div>

                    <div className="bg-light p-3 rounded mb-4">
                        <h3 className="fw-bold mb-0" style={{ color: '#2d5016' }}>
                            {product.price.toLocaleString('vi-VN')} ₫ <span className="fs-6 text-muted fw-normal">/ {product.unit}</span>
                        </h3>
                    </div>

                    <p className="mb-4"><strong>Mô tả sản phẩm:</strong> <br /> {product.description}</p>

                    {/* Quantity Selector */}
                    <div className="d-flex align-items-center mb-4">
                        <span className="me-3 fw-bold">Số lượng:</span>
                        <div className="input-group" style={{ width: '120px' }}>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            >-</button>
                            <input type="text" className="form-control text-center" value={quantity} readOnly />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                            >+</button>
                        </div>
                        <span className="ms-3 text-muted small">{product.stock} sản phẩm có sẵn</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 mt-4">
                        <button className="btn btn-outline-success btn-lg px-4">
                            Thêm vào giỏ hàng
                        </button>
                        <button className="btn btn-success btn-lg px-4 text-white" style={{ backgroundColor: '#2d5016' }}>
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}