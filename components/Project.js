import utilStyles from '../styles/utils.module.css';
import styles from '../styles/project.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import screenshot from '../public/assets/screenshot.jpg';

export default function Project({ project }) {
    return (
        <li className={styles.project}>
            <h1 className={styles.projectTitle}>{project?.title}</h1>
            <section className={styles.projectDescription}>
                <PortableText value={project?.description} />
            </section>
            <div className={styles.projectImageWrapper}>
                <Image
                    className={styles.projectImage}
                    src={screenshot}
                    alt="screenshot"
                />
            </div>
            <section className={styles.projectNav}>
                <div className={styles.projectNavLinks}>
                    <Link href={project?.site}>
                        <a
                            className={`${styles.projectNavLink} ${utilStyles.button}`}
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
                <div className={styles.projectNavTags}>
                    <span
                        className={`${styles.projectNavTag} ${utilStyles.button} ${utilStyles.workButton}`}
                    >
                        #React
                    </span>
                    <span
                        className={`${styles.projectNavTag} ${utilStyles.button} ${utilStyles.workButton}`}
                    >
                        #Node.js
                    </span>
                    <span
                        className={`${styles.projectNavTag} ${utilStyles.button} ${utilStyles.workButton}`}
                    >
                        #Express
                    </span>
                </div>
            </section>
        </li>
    );
}
