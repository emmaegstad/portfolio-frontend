import styles from '../styles/about.module.css';
import { v4 as uuid } from 'uuid';

export default function Skillset({ skillset }) {
    return (
        <ul className={styles.aboutSkillsColumn}>
            <h1>{skillset.title}</h1>
            {skillset?.skills.map((skill) => {
                return <li key={uuid()}>{skill}</li>;
            })}
        </ul>
    );
}
