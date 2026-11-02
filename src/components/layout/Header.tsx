export default function Header() {
    return (
        <header className="bg-white border-bottom py-3">
            <div className="container d-flex align-items-center justify-content-between">
                {/* Logo */}
                <a href="/" className="text-decoration-none d-flex align-items-center gap-2">
                    <span className="fs-4 fw-bold" style={{ color: '#2d5016' }}>Nông Lâm Garden</span>
                </a>

                {/* Search Bar */}
                <div className="d-flex flex-grow-1 mx-4" style={{ maxWidth: '600px' }}>
                    <div className="input-group">
                        <select className="form-select flex-grow-0 w-auto bg-light text-muted border-end-0" style={{ maxWidth: '120px' }}>
                            <option>Sản phẩm</option>
                        </select>
                        <input type="text" className="form-control border-start-0" placeholder="Nhập từ khóa cần tìm" />
                        <button className="btn text-white fw-bold px-4" style={{ backgroundColor: '#2d5016' }}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span className="fw-bold" style={{ color: '#e31837', fontSize: '14px' }}>0786168080</span>
                    </div>

                    <a href="/wishlist" className="position-relative text-decoration-none text-dark">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#2d5016' }}>0</span>
                    </a>

                    <a href="/cart" className="position-relative text-decoration-none text-dark">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#2d5016' }}>0</span>
                    </a>
                </div>
            </div>
        </header>
    );
}