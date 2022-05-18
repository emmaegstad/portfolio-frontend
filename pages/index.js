import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({}) {
    const [activeNav, setActiveNav] = useState('/index');

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma, and I'm a full-stack web developer located in Tulsa, OK."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Home</h1>
        </>
    );
}
