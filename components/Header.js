import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import cn from 'classnames';

export default function Header({ activeNav, setActiveNav }) {
    const router = useRouter();

    const handleClick = (text) => {
        setActiveNav(text);
        switch (text) {
            case '/index':
                router.push('/');
                break;
            case '/work':
                router.push('/projects');
                break;
            case '/about':
                router.push('/about');
                break;
            default:
                router.push('/');
        }
    };

    return (
        <div className={styles.Header}>
            <section className={styles.navBar}>
                <div
                    value="index"
                    onClick={(e) => handleClick(e.target.innerText)}
                    className={cn({
                        [styles.navBarButton]: true,
                        [styles.index]: true,
                        [styles.indexActive]: activeNav === '/index',
                    })}
                >
                    /index
                </div>
                <div
                    value="work"
                    onClick={(e) => handleClick(e.target.innerText)}
                    className={cn({
                        [styles.navBarButton]: true,
                        [styles.work]: true,
                        [styles.workActive]: activeNav === '/work',
                    })}
                >
                    /work
                </div>
                <div
                    value="about"
                    onClick={(e) => handleClick(e.target.innerText)}
                    className={cn({
                        [styles.navBarButton]: true,
                        [styles.about]: true,
                        [styles.aboutActive]: activeNav === '/about',
                    })}
                >
                    /about
                </div>
            </section>
        </div>
    );
}
