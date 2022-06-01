import Head from 'next/head';
import styles from '../styles/index.module.css';
import Marquee3k from 'marquee3000';
import { useEffect } from 'react';

export default function Index() {
    const marquee = Marquee3k;

    useEffect(() => {
        marquee.init();
        console.log('marquee', marquee);
    }, []);

    return (
        <div className={styles.index}>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma, and I'm a full-stack web developer located in Tulsa, OK."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.indexLogo}>emma</h1>
            <div
                className={`${styles.indexMarquee} marquee3k`}
                data-speed="0.60"
            >
                <p>
                    Hello, my name is Emma Egstad. I am a full-stack software
                    engineer in Tulsa, OK. I love making things on the web and
                    every cat in the world. 🐱
                </p>
            </div>
        </div>
    );
}
