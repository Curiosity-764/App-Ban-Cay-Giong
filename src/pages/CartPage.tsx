import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { clearCart, removeFromCart, updateQuantity } from '../features/cart/cartSlice';

export default function CartPage() {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = cartItems.length > 0 ? 30000 : 0;
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="container py-5 text-center" style={{ minHeight: '60vh' }}>
                <div style={{ fontSize: '64px' }}>🛒</div>
                <h3 className="mt-3">Giỏ hàng của bạn đang trống</h3>
                <p className="text-muted">Hãy thêm sản phẩm để tiếp tục mua sắm.</p>
                <Link to="/" className="btn btn-success mt-3" style={{ backgroundColor: '#2d5016' }}>
                    Tiếp tục mua hàng
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-4" style={{ color: '#2d5016' }}>
                Giỏ hàng của bạn
            </h2>

            <div className="row g-4">
                <div className="col-lg-8">
                    {cartItems.map((product) => (
                        <div key={product.id} className="card mb-3 border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                            <div className="row g-0 align-items-center">
                                <div className="col-md-3">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="img-fluid h-100 w-100" 
                                        style={{ objectFit: 'cover', minHeight: '160px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{product.name}</h5>
                                        <p className="text-muted small mb-2">{product.category}</p>
                                        <p className="fw-bold text-success mb-0">
                                            {product.price.toLocaleString('vi-VN')} đ
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body text-end">
                                        <div className="input-group mb-3 justify-content-end">
                                            <button 
                                                className="btn btn-outline-secondary"
                                                onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity - 1 }))}
                                            >
                                                -
                                            </button>
                                            <input 
                                                type="text" 
                                                className="form-control text-center" 
                                                value={product.quantity} 
                                                readOnly 
                                                style={{ maxWidth: '60px' }} 
                                            />
                                            <button 
                                                className="btn btn-outline-secondary"
                                                onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity + 1 }))}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button 
                                            className="btn btn-link text-danger p-0 text-decoration-none"
                                            onClick={() => dispatch(removeFromCart(product.id))}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-4">Tổng đơn hàng</h5>
                            
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Tạm tính</span>
                                <strong>{subtotal.toLocaleString('vi-VN')} đ</strong>
                            </div>
                            
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Phí vận chuyển</span>
                                <strong>{shipping.toLocaleString('vi-VN')} đ</strong>
                            </div>
                            
                            <hr />
                            
                            <div className="d-flex justify-content-between mb-4">
                                <span className="fw-bold fs-5">Thành tiền</span>
                                <strong className="text-success fs-5">
                                    {total.toLocaleString('vi-VN')} đ
                                </strong>
                            </div>
                            
                            <button 
                                className="btn btn-success w-100 mb-3 py-3 fw-bold" 
                                style={{ backgroundColor: '#2d5016' }}
                                onClick={() => alert('Đặt hàng thành công!')}
                            >
                                Thanh toán
                            </button>
                            
                            <button 
                                className="btn btn-outline-danger w-100"
                                onClick={() => dispatch(clearCart())}
                            >
                                Xóa giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}