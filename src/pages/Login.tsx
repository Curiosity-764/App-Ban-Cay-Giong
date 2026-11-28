import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../features/hooks';
import { login } from '../features/user/userSlice';

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (username === 'admin123' && password === '123') {
            dispatch(login({ username: 'Admin', role: 'admin' }));
            navigate('/'); 
        } else if (username === 'user123' && password === '123') {
            dispatch(login({ username: 'User', role: 'user' }));
            navigate('/'); 
        } else {
            setError('Tài khoản hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '80vh' }}>
            
            <div className="card border-0 shadow-sm p-4" style={{ width: '400px', height: '450px' }}>
                
                <div className="card-body d-flex flex-column justify-content-center">
                    <h3 className="text-center fw-bold mb-4" style={{ color: '#2d5016' }}>Đăng Nhập</h3>
                    
                    {error && <div className="alert alert-danger py-2 text-center small">{error}</div>}

                    <form onSubmit={handleLogin} className="d-flex flex-column flex-grow-1 justify-content-center">
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-muted">Tên đăng nhập</label>
                            <input 
                                type="text" 
                                placeholder="admin123 hoặc user123" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label small fw-bold text-muted">Mật khẩu</label>
                            <input 
                                type="password" 
                                placeholder="123" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-success w-100 fw-bold py-2" style={{ backgroundColor: '#2d5016' }}>
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}