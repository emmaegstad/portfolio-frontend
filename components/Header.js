import styles from '../styles/header.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';

export default function Header() {
    const router = useRouter();

    const links = [
        {
            name: 'INDEX',
            href: '/',
        },
        {
            name: 'WORK',
            href: '/work',
        },
        {
            name: 'ABOUT',
            href: '/about',
        },
    ];

    return (
        <ul className={styles.header}>
            {links.map((link) => (
                <li className={styles.headerLink} key={uuid()}>
                    <Link href={link.href}>
                        <a
                            className={cn({
                                [utilStyles.button]: true,
                                [styles[link.name]]: true,
                                [styles['active']]:
                                    router.pathname === link.href,
                            })}
                        >
                            {link.name}
                        </a>
                    </Link>
                </li>
            ))}
            <li className={`${styles.headerLink} ${styles.last}`}>
                <Link href="">
                    <a className={`${utilStyles.button}`}>?</a>
                </Link>
            </li>
        </ul>
    );
}
