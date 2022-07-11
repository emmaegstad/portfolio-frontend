import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';
import { useState, useEffect } from 'react';
import { GlobalProvider } from '../context/GlobalContext';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <>
            <Head>
                <title>Emma Egstad</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma Egstad - I am a full-stack software engineer in Tulsa, OK. I create beautiful, accessible, and occasionally feline experiences on the web."
                />
                <meta property="og:title" content="Emma Egstad" />
                <meta property="og:site_name" content="Emma Egstad" />
                <meta
                    property="og:url"
                    content="https://emmaegstad.netlify.app/"
                />
                <meta
                    property="og:description"
                    content="Hello! My name is Emma Egstad - I am a full-stack software engineer in Tulsa, OK. I create beautiful, accessible, and occasionally feline experiences on the web."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://emmaegstad.netlify.app/ogimage.png"
                ></meta>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@emmaegstad" />
                <meta name="twitter:title" content="Emma Egstad" />
                <meta
                    name="twitter:description"
                    content="Hello! My name is Emma Egstad - I am a full-stack software engineer in Tulsa, OK. I create beautiful, accessible, and occasionally feline experiences on the web."
                />
                <meta
                    name="twitter:image"
                    content="https://emmaegstad.netlify.app/ogimage.png"
                ></meta>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <GlobalProvider>
                <AnimatePresence exitBeforeEnter>
                    <div style={{ visibility: !mounted ? 'hidden' : '' }}>
                        <Component key={uuid()} {...pageProps} />
                    </div>
                </AnimatePresence>
            </GlobalProvider>
        </>
    );
}
