import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.Layout}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
