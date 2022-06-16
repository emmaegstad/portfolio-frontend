import styles from '../styles/index.module.css';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useCallback, useRef } from 'react';
import { useGlobal } from '../context/GlobalContext';
import cn from 'classnames';
import gsap from 'gsap';
import Marquee3k from 'marquee3000';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Logo from '../public/assets/logo/logo-emma.js';
import LogoLetterE from '../public/assets/logo/logo-letter-e.js';
import LogoLetterM from '../public/assets/logo/logo-letter-m.js';
import LogoLetterA from '../public/assets/logo/logo-letter-a.js';
import Gradient from '../components/Gradient';

export default function Index() {
    const marquee = Marquee3k;
    const { currentIndex, activeGif, gifs } = useGlobal();
    const elsMobileLogo = useRef();

    // Create randomized letter position for mobile logo
    const setRandomLetterPosition = (el) => {
        const rect = el.getBoundingClientRect();
        const width = rect.width;
        const container = window.innerWidth - width;

        return Math.random() * container;
    };

    // Animation variants
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    // Animate mobile logo letters into random position
    const rearrangeMobileLetters = useCallback(() => {
        if (!elsMobileLogo.current) return;

        elsMobileLogo.current.childNodes.forEach((el) => {
            gsap.to(el, {
                x: setRandomLetterPosition(el.childNodes[0]),
                ease: 'power2.inOut',
            });
        });
    }, []);

    // Grab breakpoint size from css variable
    const getBreakpointSize = () => {
        return window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--min-window-size')
            .slice(0, -2);
    };

    useEffect(() => {
        // Initialize marquee
        marquee.init();
    }, [marquee]);

    useEffect(() => {
        // Logo handler to determine if the mobile/desktop animations fire based on window width
        const logoHandler = () => {
            if (window.innerWidth <= getBreakpointSize()) {
                rearrangeMobileLetters();
            }
        };

        // This fires on mount and on the custom `windowResized` event
        logoHandler();

        // Listen for resize events and pass to logohandler
        window.addEventListener('windowResized', logoHandler);

        // Destroy listener
        return () => {
            window.removeEventListener('windowResized', logoHandler);
        };
    }, [rearrangeMobileLetters]);

    return (
        <motion.div
            className={styles.index}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6 }}
        >
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma, and I'm a full-stack web developer located in Tulsa, OK."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1
                className={cn({
                    [styles.indexLogo]: true,
                    [styles.indexLogoGif]: activeGif,
                })}
            >
                <span className={styles.visuallyHidden}>Emma Egstad</span>
                <span className={styles.logoDesktop}>
                    <Logo className={styles.logoDesktopImage} />
                </span>
                <span
                    ref={elsMobileLogo}
                    className={styles.logoMobile}
                    onClick={rearrangeMobileLetters}
                >
                    <span className={styles.logoMobileLetter}>
                        <LogoLetterE />
                    </span>
                    <span className={styles.logoMobileLetter}>
                        <LogoLetterM />
                    </span>
                    <span className={styles.logoMobileLetter}>
                        <LogoLetterM />
                    </span>
                    <span className={styles.logoMobileLetter}>
                        <LogoLetterA />
                    </span>
                </span>
            </h1>
            {activeGif && (
                <div className={styles.backgroundWrapper}>
                    <Image
                        src={gifs[currentIndex].url}
                        alt="cat gif"
                        layout="fill"
                        className={styles.backgroundImage}
                    />
                </div>
            )}
            <div
                className={cn({
                    ['marquee3k']: true,
                    [styles.indexMarquee]: true,
                    [styles.indexMarqueeGif]: activeGif,
                })}
                data-speed="1.5"
            >
                <p
                    className={`${utilStyles['text-lg']} ${utilStyles['text-bold']}`}
                >
                    Hello, my name is Emma Egstad. I am a full-stack software
                    engineer.&nbsp;
                </p>
            </div>
            <Gradient />
            <footer>
                <Footer />
            </footer>
        </motion.div>
    );
}
