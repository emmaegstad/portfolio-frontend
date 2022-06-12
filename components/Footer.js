import styles from '../styles/footer.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import cn from 'classnames';
import { useGlobal } from '../context/GlobalContext';

export default function Footer() {
    const { activeGif } = useGlobal();

    return (
        <div
            className={cn({
                [styles.footer]: true,
                [styles.footerGif]: activeGif,
            })}
        >
            <ul
                className={cn({
                    [styles.footerLinks]: true,
                })}
            >
                <li className={styles.footerLink}>
                    <Link href="https://github.com/emmaegstad">
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [utilStyles.buttonGif]: activeGif,
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
                    [styles.footerTextGif]: activeGif,
                })}
            >
                <span>thanks for scrolling!</span>
                <span>(c) copyright 2022</span>
            </section>
        </div>
    );
}
