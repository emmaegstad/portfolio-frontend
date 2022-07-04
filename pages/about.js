/* eslint-disable @next/next/no-img-element */

import utilStyles from '../styles/utils.module.css';
import styles from '../styles/about.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AboutGradient from '../components/AboutGradient';
import { client } from '../lib/projects';
import { PortableText } from '@portabletext/react';
import Skillset from '../components/Skillset';
import { v4 as uuid } from 'uuid';
import imageUrlBuilder from '@sanity/image-url';

export default function About({ about }) {
    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source);
    }

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
            transition={{ duration: 1 }}
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
                {about?.images.map((image) => {
                    return (
                        <figure
                            key={uuid()}
                            className={styles.aboutImageWrapper}
                        >
                            <img
                                className={styles.aboutImage}
                                src={`${urlFor(
                                    image
                                ).url()}?w=128&auto=format&fit=max`}
                                srcSet={`${urlFor(
                                    image
                                ).url()}?w=512&auto=format&fit=max 512w, ${urlFor(
                                    image
                                ).url()}?w=758&auto=format&fit=max 768w, ${urlFor(
                                    image
                                ).url()}?w=1024&auto=format&fit=max 1024w`}
                                width={250}
                                height={250}
                                layout="responsive"
                                alt={image.alt}
                            />
                            <figcaption className={styles.caption}>
                                <p className={utilStyles['text-sm']}>
                                    {image.caption}
                                </p>
                            </figcaption>
                        </figure>
                    );
                })}
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
