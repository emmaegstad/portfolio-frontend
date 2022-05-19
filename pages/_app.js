import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [activeNav, setActiveNav] = useState();

    useEffect(() => {
        function getRoute() {
            console.log(router.pathname);
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

export default MyApp;
