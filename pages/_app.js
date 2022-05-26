import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
