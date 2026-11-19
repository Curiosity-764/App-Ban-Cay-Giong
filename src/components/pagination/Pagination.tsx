interface PaginationProps {
    pagination: {
        _page: number;
        _limit: number;
        _totalRows: number;
    };
    onPageChange?: (newPage: number) => void;
}

export default function Pagination({ pagination, onPageChange }: PaginationProps) {
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage: number) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    if (totalPages <= 1) return null;

    return (
        <div className="d-flex justify-content-center mt-4">
            <ul className="pagination">
                <li className={`page-item ${_page <= 1 ? 'disabled' : ''}`}>
                    <button 
                        className="page-link d-flex align-items-center justify-content-center" 
                        disabled={_page <= 1}
                        onClick={() => handlePageChange(_page - 1)}
                        aria-label="Previous"
                        style={{ color: '#2d5016', width: '38px', height: '38px' }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page} className={`page-item ${_page === page ? 'active' : ''}`}>
                        <button 
                           
                            className="page-link d-flex align-items-center justify-content-center" 
                            onClick={() => handlePageChange(page)}
                            style={{
                                ...(_page === page 
                                    ? { backgroundColor: '#2d5016', borderColor: '#2d5016', color: 'white' } 
                                    : { color: '#2d5016' }),
                                width: '38px', 
                                height: '38px' 
                            }}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                <li className={`page-item ${_page >= totalPages ? 'disabled' : ''}`}>
                    <button 
                        className="page-link d-flex align-items-center justify-content-center" 
                        disabled={_page >= totalPages}
                        onClick={() => handlePageChange(_page + 1)}
                        aria-label="Next"
                        style={{ color: '#2d5016', width: '38px', height: '38px' }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
}