import styles from '../styles/footer.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobal } from '../context/GlobalContext';
import cn from 'classnames';

export default function Footer() {
    const { activeGif } = useGlobal();
    const router = useRouter();

    return (
        <div
            className={cn({
                [styles.footer]: true,
                [styles.footerGif]: activeGif,
                [styles.footerWork]: router.pathname === '/work',
            })}
        >
            <ul
                className={cn({
                    [styles.footerLinks]: true,
                    [styles.footerLinksGif]: activeGif,
                    [styles.footerLinksWork]: router.pathname === '/work',
                })}
            >
                <li className={styles.footerLink}>
                    <Link href="https://github.com/emmaegstad">
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [utilStyles.buttonGif]: activeGif,
                                [utilStyles.workButton]:
                                    router.pathname === '/work',
                            })}
                        >
                            github
                        </a>
                    </Link>
                </li>
                <li className={styles.footerLink}>
                    <Link href="https://www.linkedin.com/in/emmaegstad/">
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [utilStyles.buttonGif]: activeGif,
                                [utilStyles.workButton]:
                                    router.pathname === '/work',
                            })}
                        >
                            linkedin
                        </a>
                    </Link>
                </li>
                <li className={styles.footerLink}>
                    <Link href="mailto:emma@egstad.com">
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [utilStyles.buttonGif]: activeGif,
                                [utilStyles.workButton]:
                                    router.pathname === '/work',
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
                    [styles.footerTextWork]: router.pathname === '/work',
                    [styles.footerTextGif]: activeGif,
                })}
            >
                <span>thanks for stopping by!</span>
                <span>(c) copyright 2022</span>
            </section>
        </div>
    );
}
