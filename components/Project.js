import React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import styles from '../styles/project.module.css';
import screenshot from '../public/assets/screenshot.jpg';
import Link from 'next/link';

export default function Project({ project }) {
    return (
        <li className={styles.Project}>
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
                        <a className={styles.projectNavLink}>view site</a>
                    </Link>
                    <Link href={project?.github}>
                        <a className={styles.projectNavLink}>github repo</a>
                    </Link>
                </div>
                <div className={styles.projectNavTags}>
                    <span className={styles.projectNavTag}>#React</span>
                    <span className={styles.projectNavTag}>#Node.js</span>
                    <span className={styles.projectNavTag}>#Express</span>
                </div>
            </section>
        </li>
    );
}
