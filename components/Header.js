import utilStyles from '../styles/utils.module.css';
import styles from '../styles/header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useGlobal } from '../context/GlobalContext';
import cn from 'classnames';
import gsap from 'gsap';

export default function Header() {
    const { currentIndex, setCurrentIndex, activeGif, setActiveGif, gifs } =
        useGlobal();
    const router = useRouter();
    const elsLinks = useRef([]);
    const elButton = useRef();
    const links = [
        {
            name: 'HOME',
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

    useEffect(() => {
        const els = [...elsLinks.current];

        window.addEventListener('layoutMounted', () => {
            els.push(elButton.current);
            animateLinks();
        });

        const animateLinks = () => {
            gsap.fromTo(
                els,
                {
                    opacity: 0,
                    y: '-100%',
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.25,
                    ease: 'power4.out',
                }
            );
        };
    }, []);

    const handleClick = () => {
        setActiveGif(true);
        if (currentIndex >= gifs.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((currentIndex += 1));
        }
    };

    const handleClear = () => {
        setActiveGif(false);
        setCurrentIndex(-1);
    };

    return (
        <div className={styles.header}>
            <ul className={styles.headerList}>
                {links.map((link, index) => (
                    <li
                        ref={(element) => {
                            elsLinks.current[index] = element;
                        }}
                        className={styles.headerListItem}
                        key={index}
                    >
                        <Link href={link.href}>
                            <a
                                className={cn({
                                    [utilStyles.button]: true,
                                    [utilStyles.buttonGif]: activeGif,
                                    [utilStyles.active]:
                                        router.pathname === link.href,
                                })}
                            >
                                {link.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            {activeGif && (
                <button
                    className={cn({
                        [styles.gifClear]: true,
                        [utilStyles.button]: true,
                        [utilStyles.buttonGif]: true,
                    })}
                    onClick={handleClear}
                >
                    x
                </button>
            )}
            <button
                ref={elButton}
                className={cn({
                    [styles.gifToggle]: true,
                    [utilStyles.button]: true,
                    [utilStyles.buttonGif]: activeGif,
                    [styles.isVisible]: router.pathname === '/',
                })}
                onClick={handleClick}
            >
                🐱
            </button>
        </div>
    );
}
