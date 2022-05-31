import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/about.module.css';
import utilStyles from '../styles/utils.module.css';
// import emma from '../public/assets/emma.jpg';
import cats from '../public/assets/cats.jpg';
import jordanjj from '../public/assets/jordanjj.jpg';
import michelle from '../public/assets/michelle.jpg';
import minnie from '../public/assets/minnie.jpg';

export default function About() {
    return (
        <div className={styles.about}>
            <section className={styles.aboutBio}>
                <p className={styles.aboutBioPrimary}>
                    Hi, I am Emma Egstad. Full-stack web developer based in
                    Tulsa, OK. Missing until dinner time chase the pig around
                    the house. Meow. Under the bed climb a tree, wait for a
                    fireman jump to fireman then scratch his face or show belly
                    attack curtains head nudges.
                </p>
                <p className={styles.aboutBioSecondary}>
                    Stare at owner accusingly then wink bury the poop bury it
                    deep yet freak human out make funny noise mow mow mow mow
                    mow mow success now attack human scratch at fleas.
                </p>
                <p className={styles.aboutBioSecondary}>
                    Kitty kitty cat slap dog in face carefully drink from water
                    glass and then spill it everywhere and proceed to lick the
                    puddle playing with balls of wool or climb leg. Do not try
                    to mix old food with new one to fool me! loved it, hated it,
                    loved it, hated it.
                </p>
                <ul className={styles.aboutBioLinks}>
                    <Link href="https://github.com/emmaegstad">
                        <a
                            className={`${utilStyles.button} ${styles.footerLink}`}
                        >
                            github
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/emmaegstad/">
                        <a
                            className={`${utilStyles.button} ${styles.footerLink}`}
                        >
                            linkedin
                        </a>
                    </Link>
                    <Link href="mailto:emma@egstad.com">
                        <a
                            className={`${utilStyles.button} ${styles.footerLink}`}
                        >
                            email
                        </a>
                    </Link>
                    <Link href="http://www.google.com">
                        <a
                            className={`${utilStyles.button} ${styles.footerLink}`}
                        >
                            resume
                        </a>
                    </Link>
                </ul>
            </section>
            <section className={styles.aboutImages}>
                <div className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/emma.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="emma"
                    />
                </div>
                <div className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/cats.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="cats"
                    />
                </div>
                <div className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/jordanjj.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="jordanjj"
                    />
                </div>
                <div className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/michelle.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="michelle"
                    />
                </div>
                <div className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/minnie.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="minnie"
                    />
                </div>
            </section>
            <section className={styles.aboutSkills}>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Languages</h1>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Libraries</h1>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Vue</li>
                    <li>JK I wish</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Languages</h1>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Libraries</h1>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Vue</li>
                    <li>JK I wish</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Languages</h1>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Libraries</h1>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Vue</li>
                    <li>JK I wish</li>
                </ul>
            </section>
        </div>
    );
}
