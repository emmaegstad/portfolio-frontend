import styles from '../styles/header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';

export default function Header() {
    const router = useRouter();

    const links = [
        {
            name: 'index',
            href: '/',
        },
        {
            name: 'work',
            href: '/work',
        },
        {
            name: 'about',
            href: '/about',
        },
    ];

    return (
        <ul className={styles.Header}>
            {links.map((link) => (
                <li className={styles.navBarButton} key={uuid()}>
                    <Link href={link.href}>
                        <a
                            className={cn({
                                [styles[link.name]]: true,
                                [styles['active']]:
                                    router.pathname === link.href,
                            })}
                        >
                            {`/${link.name}`}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
