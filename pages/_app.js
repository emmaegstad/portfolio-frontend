import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import Layout from '../components/Layout';
import { GlobalProvider } from '../context/GlobalContext';

export default function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalProvider>
    );
}
