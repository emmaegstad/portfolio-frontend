import React from 'react';
import Header from './Header';
import styles from '../styles/layout.module.css';

export default function Layout({ children, activeNav, setActiveNav }) {
    return (
        <div className={styles.Layout}>
            <Header activeNav={activeNav} setActiveNav={setActiveNav} />
            {children}
        </div>
    );
}
