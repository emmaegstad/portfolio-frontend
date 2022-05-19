import React from 'react';
import { PortableText } from '@portabletext/react';
import styles from '../styles/project.module.css';

export default function Project({ project }) {
    return (
        <li className={styles.Project}>
            <h1 className={styles.projectTitle}>{project?.title}</h1>
            <PortableText value={project?.description} />
            <p>{project?.github}</p>
            <p>{project?.site}</p>
        </li>
    );
}
