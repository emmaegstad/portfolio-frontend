import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import utilStyles from '../styles/utils.module.css';
import cn from 'classnames';

export default function Footer({ currentIndex }) {
    return (
        <div
            className={cn({
                [styles.footer]: true,
                [styles.footerGif]: currentIndex > 0,
            })}
        >
            <ul
                className={cn({
                    [styles.footerLinks]: true,
                    [styles.footerLinksGif]: currentIndex > 0,
                })}
            >
                <Link href="https://github.com/emmaegstad">
                    <a
                        className={cn({
                            [utilStyles.button]: true,
                            [styles.footerLink]: true,
                            [utilStyles.buttonGif]: currentIndex > 0,
                        })}
                    >
                        github
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/emmaegstad/">
                    <a
                        className={cn({
                            [utilStyles.button]: true,
                            [styles.footerLink]: true,
                            [utilStyles.buttonGif]: currentIndex > 0,
                        })}
                    >
                        linkedin
                    </a>
                </Link>
                <Link href="mailto:emma@egstad.com">
                    <a
                        className={cn({
                            [utilStyles.button]: true,
                            [styles.footerLink]: true,
                            [utilStyles.buttonGif]: currentIndex > 0,
                        })}
                    >
                        email
                    </a>
                </Link>
            </ul>
            <section
                className={cn({
                    [styles.footerText]: true,
                    [styles.footerTextGif]: currentIndex > 0,
                })}
            >
                <span>thanks for scrolling!</span>
                <span>(c) copyright 2022</span>
            </section>
        </div>
    );
}
