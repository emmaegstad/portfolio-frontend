import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { GlobalProvider } from '../context/GlobalContext';
import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <GlobalProvider>
            <Header key={uuid()} />
            <AnimatePresence
                exitBeforeEnter
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <div style={{ visibility: !mounted ? 'hidden' : '' }}>
                    <Component key={uuid()} {...pageProps} />
                </div>
            </AnimatePresence>
        </GlobalProvider>
    );
}
