import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Layout currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
            <Component {...pageProps} currentIndex={currentIndex} />
        </Layout>
    );
}
