import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { client } from '../lib/projects';

export default function MyApp({ Component, pageProps }) {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [gifs, setGifs] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(`*[_type == "gif"]`);
            setGifs(data);
        };
        fetchData();
    }, [gifs]);

    return (
        <Layout
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            gifs={gifs}
        >
            <Component {...pageProps} currentIndex={currentIndex} gifs={gifs} />
        </Layout>
    );
}
