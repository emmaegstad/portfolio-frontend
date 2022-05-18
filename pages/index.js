import Head from 'next/head';
import Link from 'next/link';

export default function Home({}) {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma, and I'm a full-stack web developer located in Tulsa, OK."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <h1>My Poppin Portfolio</h1>
                <Link href="/projects">
                    <a>View Projects</a>
                </Link>
            </section>
        </div>
    );
}
