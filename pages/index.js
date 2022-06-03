import Head from 'next/head';
import styles from '../styles/index.module.css';
import Marquee3k from 'marquee3000';
import { useEffect } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { useGlobal } from '../context/GlobalContext';

export default function Index() {
    const marquee = Marquee3k;
    const { currentIndex, gifs } = useGlobal();

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
                    engineer located in Tulsa, OK.
                </p>
            </div>
        </div>
    );
}
