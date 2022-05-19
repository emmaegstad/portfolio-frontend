import Head from 'next/head';
import styles from '../styles/index.module.css';

export default function Index({}) {
    return (
        <div className={styles.Index}>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma, and I'm a full-stack web developer located in Tulsa, OK."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.indexLogo}>emma</h1>
            <p className={styles.indexCaption}>
                Hello, I am Emma - full-stack software engineer based in Tulsa,
                OK. I love front-end dev and *every* cat. 😼
            </p>
        </div>
    );
}
