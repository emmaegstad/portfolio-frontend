import Head from 'next/head';
import styles from '../styles/index.module.css';
import Marquee3k from 'marquee3000';
import { useEffect } from 'react';
import Image from 'next/image';
import { client } from '../lib/projects';
import cn from 'classnames';

export default function Index({ gifs, currentIndex }) {
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
            <h1
                className={cn({
                    [styles.indexLogo]: true,
                    [styles.indexLogoGif]: currentIndex > -1,
                })}
            >
                emma
            </h1>
            {currentIndex > -1 && (
                <div className={styles.backgroundWrapper}>
                    <Image
                        src={gifs[currentIndex].url}
                        alt="cat gif"
                        layout="fill"
                    />
                </div>
            )}
            <div
                className={cn({
                    ['marquee3k']: true,
                    [styles.indexMarquee]: true,
                    [styles.indexMarqueeGif]: currentIndex > -1,
                })}
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

export async function getStaticProps() {
    const gifs = await client.fetch(`*[_type == "gif"]`);

    return {
        props: {
            gifs,
        },
    };
}
