import { useState, type FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { clearCart } from '../features/cart/cartSlice';

export default function CheckoutPage() {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');

    if (cartItems.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h3>Giỏ hàng của bạn đang trống</h3>
            </div>
        );
    }
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const shipping = cartItems.length > 0 ? 30000 : 0;
    const total = subtotal + shipping;

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!fullName.trim() || !address.trim() || !phone.trim()) {
            alert('Vui lòng nhập đầy đủ họ tên, địa chỉ và số điện thoại.');
            return;
        }

        alert('Đặt hàng thành công!');
        dispatch(clearCart());
    }

    return (
        <div className="container py-4">
            <div className="row g-4">
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit}>
                        <h2 className="fw-bold mb-4 text-success">
                            Thông tin thanh toán
                        </h2>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Họ và Tên <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Địa chỉ <span className="text-danger">*</span>
                            </label>
                            <textarea
                                className="form-control"
                                rows={2}
                                placeholder="Địa chỉ"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">
                                Số điện thoại <span className="text-danger">*</span>
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                required
                            />
                        </div>

                        <h2 className="fw-bold mb-3 text-success">
                            Thông tin bổ sung
                        </h2>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">
                                Ghi chú đơn hàng (tuỳ chọn)
                            </label>
                            <textarea
                                className="form-control"
                                rows={4}
                                placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng..."
                                value={note}
                                onChange={(event) => setNote(event.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-success d-lg-none w-100 py-3">
                            Đặt hàng
                        </button>
                    </form>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm rounded-0">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start border-bottom pb-3 mb-4">
                                <h5 className="fw-bold mb-0">SẢN PHẨM</h5>
                                <h5 className="fw-bold mb-0 text-end">TẠM TÍNH</h5>
                            </div>

                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="d-flex justify-content-between border-bottom pb-3 mb-3"
                                >
                  <span className="pe-3">
                    {item.name} × {item.quantity}
                  </span>
                                    <strong className="text-nowrap">
                                        {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                                    </strong>
                                </div>
                            ))}

                            <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                                <strong>Tạm tính</strong>
                                <strong className="text-danger">
                                    {subtotal.toLocaleString('vi-VN')}đ
                                </strong>
                            </div>

                            <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                                <strong className="fs-5">Tổng</strong>
                                <strong className="fs-5 text-danger">
                                    {total.toLocaleString('vi-VN')}đ
                                </strong>
                            </div>

                            <div className="form-check mb-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="payment"
                                    id="cod"
                                    defaultChecked
                                />
                                <label className="form-check-label" htmlFor="cod">
                                    Trả tiền mặt khi nhận hàng
                                </label>
                            </div>

                            <p className="small text-muted mb-4">
                                Trả tiền mặt khi giao hàng.
                            </p>

                            <button
                                type="button"
                                className="btn w-100 py-3 fw-bold text-white"
                                style={{ backgroundColor: '#2d5016' }}
                                onClick={() => {
                                    const form = document.querySelector('form');

                                    if (form?.checkValidity()) {
                                        dispatch(clearCart());
                                        alert('Đặt hàng thành công!');
                                    } else {
                                        form?.reportValidity();
                                    }
                                }}
                            >
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}