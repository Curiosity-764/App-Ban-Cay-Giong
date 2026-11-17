export default function Footer() {
    return (
        <footer className="bg-white border-top mt-5 pt-0">
            
            <div className="container py-5 border-bottom">
                <div className="row align-items-center g-4">
                    
                    <div className="col-md-5">
                        <h4 className="fw-bold mb-3" style={{ color: '#2d5016' }}>
                            Ghé Thăm Nông Lâm Garden
                        </h4>
                        <p className="text-muted mb-4 small">
                            Chúng tôi luôn sẵn sàng chào đón bạn đến tham quan và mua sắm trực tiếp tại cửa hàng. 
                            Hãy ghé qua để được tư vấn kỹ thuật miễn phí!
                        </p>
                        
                        <div className="d-flex mb-3">
                            <div className="me-3 fs-5">📍</div>
                            <div>
                                <strong>Địa chỉ:</strong><br />
                                <span className="text-muted small">171 Nguyễn Văn Khối, P. Thông Tây Hội, Gò Vấp, TP. HCM</span>
                            </div>
                        </div>
                        
                        <div className="d-flex mb-3">
                            <div className="me-3 fs-5">📞</div>
                            <div>
                                <strong>Hotline:</strong><br />
                                <span className="text-muted small">0786 168 080</span>
                            </div>
                        </div>

                        <div className="d-flex mb-3">
                            <div className="me-3 fs-5">🕒</div>
                            <div>
                                <strong>Giờ mở cửa:</strong><br />
                                <span className="text-muted small">8h – 18h (Thứ 2 – Chủ Nhật)</span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-7">
                        <div className="rounded-4 shadow-sm overflow-hidden" style={{ height: '300px' }}>
                           
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5886900448977!2d106.65434049999999!3d10.8427553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529e60945008b%3A0x3e1f19cbc7573f31!2sNongLamGarden!5e0!3m2!1svi!2s!4v1794880946755!5m2!1svi!2s"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bản đồ Nông Lâm Garden"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>

          
            <div className="container py-5">
                <div className="row g-4">
                    {/* Column 1 */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-4 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>NÔNG LÂM GARDEN</h5>
                        <p className="text-muted mb-2 small">(CN1) 171 Nguyễn Văn Khối, P. Thông Tây Hội (P8, Gò Vấp) TP. HCM</p>
                        <p className="text-muted mb-2 small">(CN2) 769 Trường Chinh, Phường Tây Thạnh, TP. HCM</p>
                        <p className="text-muted mb-2 small">nonglamgarden.sales@gmail.com</p>
                        <a href="#" className="text-primary text-decoration-none small">Xem chỉ đường</a>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-4 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>GỌI MUA HÀNG</h5>
                        <p className="fw-bold fs-5 mb-1" style={{ color: '#e31837' }}>0786 168 080</p>
                        <p className="fw-bold fs-5 mb-4" style={{ color: '#e31837' }}>082 799 7777</p>
                        
                        <h5 className="fw-bold mb-3 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>Thời gian mở cửa</h5>
                        <p className="text-muted mb-1 small">Cửa hàng: 8h – 18h từ thứ 2 – Chủ Nhật.</p>
                        <p className="text-muted mb-1 small">Online: 8h–17h từ thứ 2 – thứ 7</p>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-4 text-uppercase" style={{ color: '#2d5016', fontSize: '15px' }}>KẾT NỐI VỚI CHÚNG TÔI</h5>
                        <div className="d-flex flex-column gap-3">
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2 bg-primary">f</span> 
                                <span className="small">Nông Lâm Garden</span>
                            </a>
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2 bg-danger">S</span> 
                                <span className="small">shopnonglamgarden</span>
                            </a>
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2" style={{ backgroundColor: '#f57224' }}>L</span> 
                                <span className="small">Shop Nông Lâm Garden</span>
                            </a>
                            <a href="#" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                <span className="badge rounded-circle p-2 bg-danger">▶</span> 
                                <span className="small">Nông Lâm Garden</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}