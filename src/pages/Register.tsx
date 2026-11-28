import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="container py-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Đăng Ký Tài Khoản</h2>

            {success && (
                <div className="alert alert-success text-center">
                    Đăng ký thành công! Đang chuyển hướng...
                </div>
            )}

            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Họ và Tên</label>
                    <input type="text" className="form-control" placeholder="Nguyễn Văn A" required disabled={success} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email@example.com" required disabled={success} />
                </div>

                <div className="mb-4">
                    <label className="form-label">Mật khẩu</label>
                    <input type="password" className="form-control" placeholder="Nhập mật khẩu" required disabled={success} />
                </div>

                <button type="submit" className="btn btn-success w-100 fw-bold" disabled={success}>
                    Đăng Ký
                </button>
            </form>
            
            <div className="text-center mt-4">
                <small className="text-muted">
                    Đã có tài khoản? <Link to="/login" className="text-success text-decoration-none fw-bold">Đăng nhập ngay</Link>
                </small>
            </div>
        </div>
    );
}