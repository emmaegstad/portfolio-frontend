import { client } from '../lib/projects';
import Project from '../components/Project';
import { v4 as uuid } from 'uuid';
import styles from '../styles/work.module.css';

export default function Work({ projects }) {
    return (
        <div className={styles.work}>
            {projects.length > 0 && (
                <ul className={styles.workProjects}>
                    {projects.map((project) => (
                        <Project key={uuid()} project={project} />
                    ))}
                </ul>
            )}
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
