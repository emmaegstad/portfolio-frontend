import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [activeNav, setActiveNav] = useState();

    useEffect(() => {
        function getRoute() {
            setActiveNav(router.pathname);
        }
        getRoute();
    }, [router.pathname]);

    return (
        <Layout activeNav={activeNav} setActiveNav={setActiveNav}>
            <Component {...pageProps} />
        </Layout>
    );
}
