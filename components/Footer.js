import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import utilStyles from '../styles/utils.module.css';
import cn from 'classnames';
import { useGlobal } from '../context/GlobalContext';

export default function Footer() {
    const { currentIndex } = useGlobal();

    return (
        <div
            className={cn({
                [styles.footer]: true,
                [styles.footerGif]: currentIndex > -1,
            })}
        >
            <ul
                className={cn({
                    [styles.footerLinks]: true,
                    [styles.footerLinksGif]: currentIndex > -1,
                })}
            >
                <li>
                    <Link href="https://github.com/emmaegstad">
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [styles.footerLink]: true,
                                [utilStyles.buttonGif]: currentIndex > -1,
                            })}
                        >
                            github
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/emmaegstad/">
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [styles.footerLink]: true,
                                [utilStyles.buttonGif]: currentIndex > -1,
                            })}
                        >
                            linkedin
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="mailto:emma@egstad.com">
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [styles.footerLink]: true,
                                [utilStyles.buttonGif]: currentIndex > -1,
                            })}
                        >
                            email
                        </a>
                    </Link>
                </li>
            </ul>
            <section
                className={cn({
                    [styles.footerText]: true,
                    [styles.footerTextGif]: currentIndex > -1,
                })}
            >
                <span>thanks for scrolling!</span>
                <span>(c) copyright 2022</span>
            </section>
        </div>
    );
}
