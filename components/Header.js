import Link from 'next/link';
import styles from '../styles/header.module.css';
import cn from 'classnames';

export default function Header({ activeNav, setActiveNav }) {
    return (
        <div className={styles.Header}>
            <ul className={styles.navBar}>
                <Link href="/">
                    <a
                        onClick={() => setActiveNav('/')}
                        className={cn({
                            [styles.navBarButton]: true,
                            [styles.index]: true,
                            [styles.indexActive]: activeNav === '/',
                        })}
                    >
                        /index
                    </a>
                </Link>
                <Link href="/work">
                    <a
                        onClick={() => setActiveNav('/work')}
                        className={cn({
                            [styles.navBarButton]: true,
                            [styles.work]: true,
                            [styles.workActive]: activeNav === '/work',
                        })}
                    >
                        /work
                    </a>
                </Link>
                <Link href="/about">
                    <a
                        onClick={() => setActiveNav('/about')}
                        className={cn({
                            [styles.navBarButton]: true,
                            [styles.about]: true,
                            [styles.aboutActive]: activeNav === '/about',
                        })}
                    >
                        /about
                    </a>
                </Link>
            </ul>
        </div>
    );
}
