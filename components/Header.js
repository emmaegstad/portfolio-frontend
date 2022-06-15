import utilStyles from '../styles/utils.module.css';
import styles from '../styles/header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGlobal } from '../context/GlobalContext';
import cn from 'classnames';
import { motion } from 'framer-motion';

export default function Header() {
    const [headerLoaded, setHeaderLoaded] = useState(false);
    const { currentIndex, setCurrentIndex, activeGif, setActiveGif, gifs } =
        useGlobal();
    const router = useRouter();
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

    // Animation variants
    const variants = {
        notHidden: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 1, x: -100, y: -100 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    const onComplete = () => {
        setHeaderLoaded(true);
        console.log('header animation complete');
    };

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
        <motion.div
            className={styles.header}
            initial="enter"
            // animate="enter"
            variants={variants}
            transition={{ staggerChildren: 0.5 }}
            onAnimationComplete={onComplete}
        >
            <ul className={styles.headerList}>
                {links.map((link, index) => (
                    <li className={styles.headerListItem} key={index}>
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
        </motion.div>
    );
}
