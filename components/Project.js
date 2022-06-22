import utilStyles from '../styles/utils.module.css';
import styles from '../styles/project.module.css';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

export default function Project({ project }) {
    return (
        <li className={styles.project}>
            <h1 className={styles.projectTitle}>{project?.title}</h1>
            <section className={styles.projectInfo}>
                <div className={styles.projectDescription}>
                    <PortableText value={project?.description} />
                </div>
                <div className={styles.projectNavLinks}>
                    <Link href={project?.site}>
                        <a
                            className={`${utilStyles.button} ${styles.projectNavLink}`}
                        >
                            view site
                        </a>
                    </Link>
                    <Link href={project?.github}>
                        <a
                            className={`${styles.projectNavLink} ${utilStyles.button}`}
                        >
                            github repo
                        </a>
                    </Link>
                </div>
            </section>
            <section className={styles.projectLoom}>
                <iframe
                    className={styles.projectLoomIframe}
                    src={project?.loom}
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                ></iframe>
            </section>
        </li>
    );
}
