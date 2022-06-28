import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { GlobalProvider } from '../context/GlobalContext';
import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuid } from 'uuid';

export default function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Header key={uuid()} />
            <AnimatePresence
                exitBeforeEnter
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component key={uuid()} {...pageProps} />
            </AnimatePresence>
        </GlobalProvider>
    );
}
