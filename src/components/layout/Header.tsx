import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector } from '../../features/hooks';

export default function Header() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const cartCount = useAppSelector((state) =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate(`/san-pham?q=${encodeURIComponent(keyword.trim())}`);
    }

    return (
        <header className="bg-white border-bottom py-3">
            <div className="container d-flex align-items-center justify-content-between">
                <Link to="/" className="text-decoration-none d-flex align-items-center gap-2">
                    <span className="fs-4 fw-bold" style={{ color: '#2d5016' }}>Nông Lâm Garden</span>
                </Link>

                <form
                    className="d-flex flex-grow-1 mx-4"
                    style={{ maxWidth: '600px' }}
                    onSubmit={handleSearch}
                >
                    <div className="input-group">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Nhập tên sản phẩm cần tìm"
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn text-white fw-bold px-4"
                            style={{ backgroundColor: '#2d5016' }}
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </form>

                <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.1 2H4.1a2 2 0 0 1-2.1-2v-3" />
                            <path d="M5 4h14l-1 11H6L5 4z" />
                        </svg>
                        <span className="fw-bold" style={{ color: '#e31837', fontSize: '14px' }}>0786168080</span>
                    </div>

                    <Link to="/wishlist" className="position-relative text-decoration-none text-dark">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 21s-8.5-5.2-11-10.5C-.5 7 1.5 2.5 6 2.5c2.5 0 4 1.5 5 3 1-1.5 2.5-3 5-3 4.5 0 6.5 4.5 5 8C20.5 15.8 12 21 12 21z" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#2d5016' }}>0</span>
                    </Link>

                    <Link to="/cart" className="position-relative text-decoration-none text-dark">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 10.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L21 5H6"></path>
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#2d5016' }}>
              {cartCount}
            </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}