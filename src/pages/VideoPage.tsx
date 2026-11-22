import { useState } from 'react';

type Video = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    embedUrl: string;
};

const videos: Video[] = [
    {
        id: 1,
        title: 'Kỹ thuật trồng rau',
        description: 'Hướng dẫn trồng rau quanh nhà.',
        thumbnail: '',
        embedUrl: 'https://www.youtube.com/embed/hR2Q2YQ-b7k',
    },
    // Thêm các video khác tại đây
];

export default function VideoPage() {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-4" style={{ color: '#2d5016' }}>
                Video hướng dẫn
            </h2>

            {selectedVideo && (
                <div className="ratio ratio-16x9 mb-4">
                    <iframe
                        src={selectedVideo.embedUrl}
                        title={selectedVideo.title}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </div>
            )}

            <div className="row g-4">
                {videos.map((video) => (
                    <div className="col-12 col-md-6 col-lg-4" key={video.id}>
                        <button
                            type="button"
                            className="card border-0 shadow-sm w-100 text-start"
                            onClick={() => setSelectedVideo(video)}
                            style={{ borderRadius: '12px', background: '#fff' }}
                        >
                            <div className="position-relative">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="card-img-top"
                                    style={{
                                        height: '220px',
                                        objectFit: 'cover',
                                    }}
                                />

                                <span
                                    className="position-absolute d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        background: 'rgba(255, 255, 255, 0.9)',
                                        color: '#e53935',
                                        fontSize: '28px',
                                    }}
                                >
                  ▶
                </span>
                            </div>

                            <div className="card-body">
                                <h6 className="fw-bold mb-2">{video.title}</h6>
                                <p className="text-muted mb-0">{video.description}</p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}