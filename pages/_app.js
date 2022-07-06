import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { useState, useEffect } from 'react';
import { GlobalProvider } from '../context/GlobalContext';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuid } from 'uuid';

export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <GlobalProvider>
            <AnimatePresence exitBeforeEnter>
                <div style={{ visibility: !mounted ? 'hidden' : '' }}>
                    <Component key={uuid()} {...pageProps} />
                </div>
            </AnimatePresence>
        </GlobalProvider>
    );
}
