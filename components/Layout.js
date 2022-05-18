import React from 'react';
import Header from './Header';

export default function Layout({ children, activeNav, setActiveNav }) {
    return (
        <div>
            <Header activeNav={activeNav} setActiveNav={setActiveNav} />
            {children}
        </div>
    );
}
