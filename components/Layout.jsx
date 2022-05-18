import React from 'react';
import Header from './bananaheader';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
