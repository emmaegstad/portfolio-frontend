import styles from '../styles/work.module.css';
import { useEffect, useRef } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { client } from '../lib/projects';
import Project from '../components/Project';
import Footer from '../components/Footer';
import { v4 as uuid } from 'uuid';
import gsap from 'gsap';

export default function Work({ projects }) {
    const elContent = useRef();
    const { layoutHasMounted } = useGlobal();

    useEffect(() => {
        gsap.fromTo(
            elContent.current,
            {
                opacity: 0,
                y: 75,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: layoutHasMounted.current ? 0 : 0.75,
                ease: 'power4.out',
            }
        );
    }, [layoutHasMounted]);

    return (
        <div className={styles.work}>
            <main ref={elContent}>
                {projects.length > 0 && (
                    <ul className={styles.workProjects}>
                        {projects.map((project) => (
                            <Project key={uuid()} project={project} />
                        ))}
                    </ul>
                )}
            </main>

            <Footer />
        </div>
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
