export default function Footer() {
    return (
        <footer className="bg-white border-top mt-5 pt-0">
            <div className="w-100 bg-light d-flex align-items-center justify-content-center border-bottom" style={{ height: '250px' }}>
                <span className="text-muted fw-bold">Bản đồ Google Maps (Placeholder)</span>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {/* Column 1 */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-4 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>SIÊU THỊ VẬT TƯ NÔNG NGHIỆP NÔNG LÂM GARDEN</h5>
                        <p className="text-muted mb-2">Khu phố 6, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh (trước đây thuộc Quận Thủ Đức).</p>
                        <p className="text-muted mb-2">phatledangtuan6@gmail.com</p>
                        <a href="#" className="text-primary text-decoration-none">Xem chỉ đường</a>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-4 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>GỌI MUA HÀNG</h5>
                        <p className="fw-bold fs-5 mb-1" style={{ color: '#e31837' }}>078 616 8080</p>
                        <p className="fw-bold fs-5 mb-4" style={{ color: '#e31837' }}>082 799 7777</p>

                        <h5 className="fw-bold mb-3 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>Thời gian mở cửa</h5>
                        <p className="text-muted mb-1">Cửa hàng: 8h – 18h từ thứ 2 – Chủ Nhật.</p>
                        <p className="text-muted mb-1">Online: 8h–17h từ thứ 2 – thứ 7</p>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-4 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>KẾT NỐI VỚI CHÚNG TÔI</h5>
                        <div className="d-flex flex-column gap-3">
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2 bg-primary">f</span>
                                <span>Nông Lâm Garden - Siêu thị vật tư nông nghiệp</span>
                            </a>
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2 bg-danger">S</span>
                                <span>nonglamgarden</span>
                            </a>
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2" style={{ backgroundColor: '#f57224' }}>L</span>
                                <span>Shop Nông Lâm Garden</span>
                            </a>
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2 bg-danger">▶</span>
                                <span>Nông Lâm Garden - làm vườn trong phố</span>
                            </a>
                        </div>
                        <div className="mt-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Logo_Cong_thuong.png/200px-Logo_Cong_thuong.png" alt="Bộ Công Thương" style={{ height: '50px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}