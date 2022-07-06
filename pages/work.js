import utilStyles from '../styles/utils.module.css';
import styles from '../styles/work.module.css';
import { client } from '../lib/projects';
import Link from 'next/link';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';

export default function Work({ projects }) {
    let hueVal = 175;
    let speed = 0.25;

    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    useEffect(() => {
        let raf;

        const updateForegroundColor = (hue) => {
            document.documentElement.style.setProperty('--foregroundHue', hue);
            document.documentElement.style.setProperty(
                '--foreground',
                'hsla(var(--foregroundHue), 80%, 20%, 100%)'
            );
        };
        const animPlay = () => {
            hueVal += speed;
            updateForegroundColor(hueVal);

            raf = window.requestAnimationFrame(animPlay);
        };
        const animStop = () => {
            console.log('anim stop fired');
            window.cancelAnimationFrame(raf);
        };

        animPlay();

        return () => {
            animStop();
            document.documentElement.style.setProperty(
                '--foreground',
                'hsla(var(--foregroundHue), 0%, 100%, 80%)'
            );
        };
    }, [hueVal]);

    return (
        <motion.div
            className={styles.work}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6 }}
        >
            <Header />
            <section className={styles.workProjects}>
                {projects.length > 0 && (
                    <ul className={styles.workProjects}>
                        {projects.map((project) => (
                            <Project key={uuid()} project={project} />
                        ))}
                    </ul>
                )}
            </section>
            <section className={styles.workCta}>
                <span className={styles.workCtaCaption}>
                    Thanks for checking out my work! I am currently seeking new
                    job opportunities, so...
                </span>
                <Link href="/about">
                    <a
                        className={cn({
                            [utilStyles.button]: true,
                            [utilStyles.workButton]: true,
                        })}
                    >
                        Learn More About Me
                    </a>
                </Link>
            </section>

            <Footer />
        </motion.div>
    );
}

export async function getStaticProps() {
    const projects = await client.fetch(`*[_type == "project"]`);

    return {
        props: {
            projects,
        },
    };
}
