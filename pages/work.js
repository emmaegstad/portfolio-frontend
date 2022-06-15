import styles from '../styles/work.module.css';
import { client } from '../lib/projects';
import Project from '../components/Project';
import Footer from '../components/Footer';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';

export default function Work({ projects }) {
    // Animation variants
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    const onAnimationComplete = () => {
        console.log('layout animation has completed');
    };

    return (
        <motion.div
            className={styles.work}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6 }}
            onAnimationComplete={onAnimationComplete}
        >
            <main>
                {projects.length > 0 && (
                    <ul className={styles.workProjects}>
                        {projects.map((project) => (
                            <Project key={uuid()} project={project} />
                        ))}
                    </ul>
                )}
            </main>

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
