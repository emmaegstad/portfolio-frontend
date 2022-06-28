import utilStyles from '../styles/utils.module.css';
import styles from '../styles/work.module.css';
import { client } from '../lib/projects';
import Project from '../components/Project';
import Footer from '../components/Footer';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';
import cn from 'classnames';
import Link from 'next/link';

export default function Work({ projects }) {
    // Animation variants
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    return (
        <motion.div
            className={styles.work}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 1 }}
        >
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
