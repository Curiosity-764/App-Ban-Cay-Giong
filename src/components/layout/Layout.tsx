import type { ReactNode } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <NavBar />

            <main className="flex-grow-1 bg-light">
                {children}
            </main>

            <Footer />
        </div>
    );
}