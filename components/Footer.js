import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <ul className={styles.footerNav}>
                <Link href="https://github.com/emmaegstad">
                    <a className={`${styles.footerLink} ${styles.github}`}>
                        github
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/emmaegstad/">
                    <a className={`${styles.footerLink} ${styles.linkedin}`}>
                        linkedin
                    </a>
                </Link>
                <Link href="mailto:emma@egstad.com">
                    <a className={`${styles.footerLink} ${styles.email}`}>
                        email
                    </a>
                </Link>
            </ul>
        </div>
    );
}
