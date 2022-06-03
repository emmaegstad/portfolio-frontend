import styles from '../styles/header.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';

export default function Header({
    activeMystery,
    currentIndex,
    setCurrentIndex,
}) {
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

    const handleClick = () => {
        if (currentIndex >= 3) {
            setCurrentIndex(1);
        } else {
            setCurrentIndex((currentIndex += 1));
        }
    };

    return (
        <div className={styles.header}>
            <ul className={styles.headerList}>
                {links.map((link) => (
                    <li className={styles.headerListItem} key={uuid()}>
                        <Link href={link.href}>
                            <a
                                className={cn({
                                    [utilStyles.button]: true,
                                    [styles[link.name]]: true,
                                    [styles.headerLink]: true,
                                    [styles['active']]:
                                        router.pathname === link.href,
                                })}
                            >
                                {link.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            {activeMystery && (
                <button
                    className={`${styles.headerLink} ${styles.last} ${utilStyles.button}`}
                    onClick={handleClick}
                >
                    ?
                </button>
            )}
        </div>
    );
}
