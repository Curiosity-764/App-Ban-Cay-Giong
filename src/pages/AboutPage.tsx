import { Link } from 'react-router-dom';

const values = [
    {
        icon: '🌱',
        title: 'Cây khỏe, nguồn gốc rõ ràng',
        description:
            'Chúng tôi lựa chọn cây giống và vật tư phù hợp, đồng thời tư vấn cách chăm sóc để cây phát triển tốt.',
    },
    {
        icon: '🪴',
        title: 'Đa dạng sản phẩm',
        description:
            'Nhiều lựa chọn cây giống, cây ăn trái và vật tư làm vườn cho gia đình, nhà vườn và người yêu cây.',
    },
    {
        icon: '🤝',
        title: 'Tư vấn tận tình',
        description:
            'Đội ngũ luôn sẵn sàng hỗ trợ chọn cây, hướng dẫn trồng và giải đáp các vấn đề chăm sóc.',
    },
];

export default function AboutPage() {
    return (
        <>
            <section
                className="text-white d-flex align-items-center"
                style={{
                    minHeight: '320px',
                    backgroundImage:
                        'linear-gradient(90deg, rgba(20, 50, 20, .8), rgba(20, 50, 20, .2)), url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1800&q=80)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="container py-5">
                    <p className="text-uppercase fw-bold mb-2">Nông Lâm Garden</p>
                    <h1 className="display-4 fw-bold">Giới thiệu</h1>
                    <p className="lead mb-0">
                        Cùng bạn vun trồng không gian xanh và chăm sóc những mùa cây khỏe.
                    </p>
                </div>
            </section>

            <main className="container py-5">
                <div className="row align-items-center g-4 g-lg-5 mb-5">
                    <div className="col-lg-6">
                        <img
                            className="img-fluid rounded-3 shadow-sm"
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
                            alt="Không gian xanh với nhiều cây"
                        />
                    </div>

                    <div className="col-lg-6">
                        <p className="text-uppercase fw-bold mb-2" style={{ color: '#567d35' }}>
                            Về chúng tôi
                        </p>
                        <h2 className="fw-bold mb-3" style={{ color: '#2d5016' }}>
                            Mang niềm vui làm vườn đến gần hơn với mọi nhà
                        </h2>
                        <p className="text-secondary">
                            Nông Lâm Garden cung cấp cây giống và vật tư nông nghiệp cho
                            những người yêu cây, làm vườn và sản xuất nông nghiệp. Chúng tôi
                            mong muốn giúp khách hàng chọn được sản phẩm phù hợp và tự tin
                            chăm sóc cây trong từng điều kiện trồng.
                        </p>
                        <p className="text-secondary mb-4">
                            Từ khâu chọn cây đến khi bắt đầu trồng, chúng tôi luôn sẵn sàng
                            chia sẻ thông tin và kinh nghiệm để hành trình làm vườn của bạn
                            thuận lợi hơn.
                        </p>
                        <Link to="/" className="btn text-white" style={{ backgroundColor: '#2d5016' }}>
                            Khám phá sản phẩm
                        </Link>
                    </div>
                </div>

                <section className="py-4">
                    <div className="text-center mb-4">
                        <p className="text-uppercase fw-bold mb-2" style={{ color: '#567d35' }}>
                            Điều chúng tôi hướng đến
                        </p>
                        <h2 className="fw-bold" style={{ color: '#2d5016' }}>
                            Vì sao chọn Nông Lâm Garden?
                        </h2>
                    </div>

                    <div className="row g-4">
                        {values.map((value) => (
                            <div className="col-md-4" key={value.title}>
                                <article className="h-100 p-4 border rounded-3 shadow-sm">
                                    <div className="fs-1 mb-3" aria-hidden="true">
                                        {value.icon}
                                    </div>
                                    <h3 className="h5 fw-bold">{value.title}</h3>
                                    <p className="text-secondary mb-0">{value.description}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-4">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold" style={{ color: '#2d5016' }}>
                            SẢN PHẨM
                        </h2>
                        <p>Cửa hàng Vật tư nông nghiệp Nông Lâm Garden cung cấp đầy đủ các loại hạt giống, cây giống, cây ăn trái, đất trồng, phân bón, khay chậu, dụng cụ làm vườn, nông nghiệp công nghệ cao
                        </p>
                        <p>Ngoài kinh doanh các mặt hàng vật tư nông nghiệp, Vườn Sài Gòn còn nghiên cứu và sản xuất các sản phẩm hữu ích, giúp quá trình làm vườn trở nên đơn giản hơn.
                        </p>
                        <img
                            className="img-fluid rounded-3 shadow-sm"
                            src="https://vuonsaigon.vn/wp-content/uploads/2024/03/cua-hang.jpg"
                            alt=""
                        />
                        <h2 className="fw-bold" style={{ color: '#2d5016' }}> Đất trồng</h2>
                        <p>100% hữu cơ. Giúp nuôi dưỡng cây hoa hồng nhà bạn siêng nụ và bền hoa.</p>
                        <p>Đất sạch Orgamix 3 in 1 chuyên dùng trồng rau màu, đã được pha trộn đầy đủ các thành phần dinh dưỡng, độ tơi xốp cao,  phù hợp với mọi giai đoạn phát triển khác nhau của cây trồng.</p>
                        <img
                            className="img-fluid rounded-3 shadow-sm"
                            src="https://vuonsaigon.vn/wp-content/uploads/2021/07/orgamix-3-in-1.jpg"
                            alt=""
                        />
                        <p>Đất trồng hoa và cây ăn trái Orgamix Bazan chứa khoáng chất từ đất đỏ bazan, Orgamix Bazan đặc biệt tốt cho Dâu Tây, Hương Thảo, Nho, Táo, Mận, Ổi, Sung Mỹ</p>
                        <img
                            className="img-fluid rounded-3 shadow-sm"
                            src="https://vuonsaigon.vn/wp-content/uploads/2022/04/dat-sach-orgamix-bazan.png"
                            alt=""
                        />
                    </div>
                </section>

                <section
                    className="text-center text-white rounded-3 p-4 p-md-5 mt-5"
                    style={{ backgroundColor: '#2d5016' }}
                >
                    <h2 className="fw-bold">Bạn cần tư vấn chọn cây?</h2>
                    <p className="mb-3">
                        Liên hệ với chúng tôi để được hỗ trợ về cây giống và vật tư làm vườn.
                    </p>
                    <a className="btn btn-light fw-bold" href="tel:0786168080">
                        Gọi 078 616 8080
                    </a>
                </section>
            </main>
        </>
    );
}