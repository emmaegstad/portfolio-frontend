import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    const [activeFooter, setActiveFooter] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/about') {
            setActiveFooter(false);
        } else {
            setActiveFooter(true);
        }
    }, [router.pathname]);

    return (
        <div className={styles.layout}>
            <Header />
            <main>{children}</main>
            {activeFooter && <Footer />}
        </div>
    );
}
