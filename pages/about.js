import utilStyles from '../styles/utils.module.css';
import styles from '../styles/about.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Gradient from '../components/Gradient';

export default function About() {
    // Animation variants
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    const onAnimationComplete = () => {
        console.log('layout animation has completed');
    };

    return (
        <motion.div
            className={styles.about}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6 }}
            onAnimationComplete={onAnimationComplete}
        >
            <section className={styles.aboutBio}>
                <div></div>
                <main>
                    <p className={styles.aboutBioPrimary}>
                        Hi, I am Emma Egstad. Full-stack web developer based in
                        Tulsa, OK. Missing until dinner time chase the pig
                        around the house. Meow. Under the bed climb a tree, wait
                        for a fireman jump to fireman then scratch his face or
                        show belly attack curtains head nudges.
                    </p>
                    <p className={styles.aboutBioSecondary}>
                        Stare at owner accusingly then wink bury the poop bury
                        it deep yet freak human out make funny noise mow mow mow
                        mow mow mow success now attack human scratch at fleas.
                    </p>
                    <p className={styles.aboutBioSecondary}>
                        Kitty kitty cat slap dog in face carefully drink from
                        water glass and then spill it everywhere and proceed to
                        lick the puddle playing with balls of wool or climb leg.
                        Do not try to mix old food with new one to fool me!
                        loved it, hated it, loved it, hated it.
                    </p>
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
                            Hello, I'm Emma.
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
                            Hello, I'm Emma.
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
                            Hello, I'm Emma.
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
                            Hello, I'm Emma.
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
                            Hello, I'm Emma.
                        </p>
                    </figcaption>
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
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Express</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Testing</h1>
                    <li>Jest</li>
                    <li>QUnit</li>
                    <li>Supertest</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Databases</h1>
                    <li>PostgreSQL</li>
                    <li>Supabase</li>
                    <li>Sanity</li>
                </ul>
                <ul className={styles.aboutSkillsColumn}>
                    <h1>Tools</h1>
                    <li>VS Code</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                    <li>Postman</li>
                    <li>Beekeeper Studio</li>
                    <li>Figma</li>
                    <li>Miro</li>
                </ul>
            </section>
            <Gradient />
        </motion.div>
    );
}
