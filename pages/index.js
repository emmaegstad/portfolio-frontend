import Head from 'next/head';
import styles from '../styles/index.module.css';
import Marquee3k from 'marquee3000';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Index({ currentIndex }) {
    const marquee = Marquee3k;

    useEffect(() => {
        marquee.init();
    }, [marquee]);

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
            {currentIndex > 0 && (
                <div className={styles.backgroundWrapper}>
                    <Image
                        src={`/assets/gifs/gif${currentIndex}.gif`}
                        width="200"
                        height="200"
                        alt="cat gif"
                        layout="fill"
                    />
                </div>
            )}
            <div
                className={`${styles.indexMarquee} marquee3k`}
                data-speed="1.5"
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

// click button
// track number of clicks on a loop, comparing to gifsArr.length
// once last item is hit, reset to 1
// set 'activeGif' state to current loop index
// create or display corresponding gif on index page
// use css to set as 'background'
