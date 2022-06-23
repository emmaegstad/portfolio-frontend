import utilStyles from '../styles/utils.module.css';
import styles from '../styles/about.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutGradient from '../components/AboutGradient';
import { client } from '../lib/projects';
import { PortableText } from '@portabletext/react';
import Skillset from '../components/Skillset';
import { v4 as uuid } from 'uuid';

export default function About({ about }) {
    console.log('about', about.skillsets);

    // Animation variants
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    return (
        <motion.div
            className={styles.about}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6 }}
        >
            <section className={styles.aboutBio}>
                <div></div>
                <main>
                    <div className={styles.aboutBioPrimary}>
                        <PortableText value={about?.first} />
                    </div>
                    <div className={styles.aboutBioSecondary}>
                        <PortableText value={about?.second} />
                    </div>
                    <div className={styles.aboutBioSecondary}>
                        <PortableText value={about?.third} />
                    </div>
                </main>
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
                    <Link href="https://drive.google.com/file/d/1YHMuphsnAJX7VBHCSvsWfJBBmBJ-zi9o/view?usp=sharing">
                        <a
                            className={`${utilStyles.button} ${styles.footerLink}`}
                        >
                            resume
                        </a>
                    </Link>
                </ul>
            </section>
            <section className={styles.aboutImages}>
                <figure className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/emma.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="emma"
                    />
                    <figcaption className={styles.caption}>
                        <p className={utilStyles['text-sm']}>
                            Hello, I am Emma.
                        </p>
                    </figcaption>
                </figure>
                <figure className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/cats.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="cats"
                    />
                    <figcaption className={styles.caption}>
                        <p className={utilStyles['text-sm']}>
                            Hello, I am Emma.
                        </p>
                    </figcaption>
                </figure>
                <div className={styles.aboutImageWrapper}>
                    <Image
                        className={styles.aboutImage}
                        src="/assets/jordanjj.jpg"
                        width={250}
                        height={250}
                        layout="responsive"
                        alt="jordanjj"
                    />
                    <figcaption className={styles.caption}>
                        <p className={utilStyles['text-sm']}>
                            Hello, I am Emma.
                        </p>
                    </figcaption>
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
                    <figcaption className={styles.caption}>
                        <p className={utilStyles['text-sm']}>
                            Hello, I am Emma.
                        </p>
                    </figcaption>
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
                    <figcaption className={styles.caption}>
                        <p className={utilStyles['text-sm']}>
                            Hello, I am Emma.
                        </p>
                    </figcaption>
                </div>
            </section>
            <section className={styles.aboutSkills}>
                {about?.skillsets.map((skillset) => {
                    return <Skillset key={uuid()} skillset={skillset} />;
                })}
            </section>
            <AboutGradient />
        </motion.div>
    );
}

export async function getStaticProps() {
    const data = await client.fetch(`*[_type == "about"]`);
    const about = data[0];

    return {
        props: {
            about,
        },
    };
}
