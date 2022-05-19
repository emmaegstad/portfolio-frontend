import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/layout.module.css';

export default function Layout({ children, activeNav, setActiveNav }) {
    return (
        <div className={styles.Layout}>
            <Header activeNav={activeNav} setActiveNav={setActiveNav} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
