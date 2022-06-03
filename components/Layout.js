import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/layout.module.css';

export default function Layout({ children, currentIndex, setCurrentIndex }) {
    const [activeFooter, setActiveFooter] = useState(true);
    const [activeMystery, setActiveMystery] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/about') {
            setActiveFooter(false);
        } else {
            setActiveFooter(true);
        }
    }, [router.pathname]);

    useEffect(() => {
        if (router.pathname === '/') {
            setActiveMystery(true);
        } else {
            setActiveMystery(false);
        }
    }, [router.pathname]);

    return (
        <div className={styles.layout}>
            <Header
                activeMystery={activeMystery}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <main>{children}</main>
            {activeFooter && <Footer />}
        </div>
    );
}
