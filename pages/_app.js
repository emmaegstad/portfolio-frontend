import '../styles/global.css';
import { useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    const [activeNav, setActiveNav] = useState('/index');
    return (
        <Layout activeNav={activeNav} setActiveNav={setActiveNav}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
