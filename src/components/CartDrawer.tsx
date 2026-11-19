import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartItems = useAppSelector((state) => state.cart.items);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            {isOpen && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100" 
                    style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1040, transition: 'opacity 0.3s' }}
                    onClick={onClose} 
                />
            )}

            <div 
                className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column"
                style={{ 
                    width: '100%', 
                    maxWidth: '400px', 
                    zIndex: 1050, 
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)', 
                    transition: 'transform 0.3s ease-in-out' 
                }}
            >
                <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-light">
                    <h5 className="mb-0 fw-bold">Giỏ hàng ({cartItems.length})</h5>
                    <button className="btn-close" onClick={onClose}></button>
                </div>

                <div className="flex-grow-1 overflow-auto p-3">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-muted mt-5">
                            <p>Giỏ hàng trống.</p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} 
                                />
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-1" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                                    <div className="text-muted small mb-2">
                                        {item.price.toLocaleString('vi-VN')} ₫
                                    </div>
                                    
                                    <div className="d-flex align-items-center gap-2">
                                        <button 
                                            className="btn btn-sm btn-outline-secondary px-2 py-0"
                                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                        >
                                            -
                                        </button>
                                        <span className="small fw-bold">{item.quantity}</span>
                                        <button 
                                            className="btn btn-sm btn-outline-secondary px-2 py-0"
                                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                            disabled={item.quantity >= item.stock}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    className="btn btn-sm btn-link text-danger text-decoration-none"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Xóa
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-3 border-top bg-light">
                        <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                            <span>Tổng cộng:</span>
                            <span style={{ color: '#2d5016' }}>{total.toLocaleString('vi-VN')} ₫</span>
                        </div>
                        <button 
                            className="btn w-100 text-white fw-bold py-2" 
                            style={{ backgroundColor: '#2d5016' }}
                            onClick={() => {
                                onClose();
                                navigate('/cart');
                            }}
                        >
                            Tiến hành thanh toán
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}