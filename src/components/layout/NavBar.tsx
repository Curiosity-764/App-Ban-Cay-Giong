export default function NavBar() {
    return (
        <nav className="bg-white border-bottom shadow-sm mb-4">
            <div className="container d-flex align-items-center">
                <div className="py-3 pe-4 fw-bold d-flex align-items-center gap-2 border-end" style={{ color: '#2d5016', cursor: 'pointer' }}>
                    DANH MỤC SẢN PHẨM
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </div>

                <ul className="nav py-2 ms-3 gap-4">
                    <li className="nav-item"><a href="/gioi-thieu" className="nav-link fw-bold text-uppercase" style={{ color: '#2d5016' }}>GIỚI THIỆU</a></li>
                    <li className="nav-item"><a href="/san-pham" className="nav-link fw-bold text-uppercase" style={{ color: '#2d5016' }}>SẢN PHẨM</a></li>
                    <li className="nav-item"><a href="/video" className="nav-link fw-bold text-uppercase" style={{ color: '#2d5016' }}>VIDEO</a></li>
                    <li className="nav-item"><a href="/blog" className="nav-link fw-bold text-uppercase d-flex align-items-center gap-1" style={{ color: '#2d5016' }}>BLOG <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></a></li>
                    <li className="nav-item"><a href="/lien-he" className="nav-link fw-bold text-uppercase" style={{ color: '#2d5016' }}>LIÊN HỆ</a></li>
                </ul>
            </div>
        </nav>
    );
}