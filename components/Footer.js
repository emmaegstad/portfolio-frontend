import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.footerLinks}>
                <Link href="https://github.com/emmaegstad">
                    <a className={`${utilStyles.button} ${styles.footerLink}`}>
                        github
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/emmaegstad/">
                    <a className={`${utilStyles.button} ${styles.footerLink}`}>
                        linkedin
                    </a>
                </Link>
                <Link href="mailto:emma@egstad.com">
                    <a className={`${utilStyles.button} ${styles.footerLink}`}>
                        email
                    </a>
                </Link>
            </ul>
            <section className={styles.footerText}>
                <span>thanks for scrolling!</span>
                <span>(c) copyright 2022</span>
            </section>
        </div>
    );
}
