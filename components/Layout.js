import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useGlobal } from '../context/GlobalContext';
import Header from './Header';
import { debounce, resizeCallback } from '../utils/debounce';

import styles from '../styles/layout.module.css';

export default function Layout({
    children,
    currentIndex,
    setCurrentIndex,
    gifs,
}) {
    const [activeFooter, setActiveFooter] = useState(true);
    const [activeMystery, setActiveMystery] = useState(false);
    const { layoutHasMounted } = useGlobal();

    const router = useRouter();

    useEffect(() => {
        window.addEventListener('resize', debounce(resizeCallback, 300));
    }, []);

    // tell the app that the layout has mounted
    useEffect(() => {
        const layoutMounted = new CustomEvent('layoutMounted');

        dispatchEvent(layoutMounted);

        layoutHasMounted.current = true;
    }, [layoutHasMounted]);

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
                gifs={gifs}
            />
            <main>{children}</main>
            {/* {activeFooter && <Footer currentIndex={currentIndex} />} */}
        </div>
    );
}
