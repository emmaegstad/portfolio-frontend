import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/index.module.css';
import Marquee3k from 'marquee3000';
import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { useGlobal } from '../context/GlobalContext';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Logo from '../public/assets/logo/logo-emma.js';
import LogoLetterE from '../public/assets/logo/logo-letter-e.js';
import LogoLetterM from '../public/assets/logo/logo-letter-m.js';
import LogoLetterA from '../public/assets/logo/logo-letter-a.js';

export default function Index() {
    const marquee = Marquee3k;
    const elLogo = useRef('');
    const elMarquee = useRef('');
    const elFooter = useRef('');
    const elsMobileLogo = useRef('');
    const { currentIndex, gifs } = useGlobal();

    const onMobileLogoClick = () => {
        console.log('hi');

        rearrangeMobileLetters();
    };

    const setRandomLetterPosition = (el) => {
        const rect = el.getBoundingClientRect();
        const width = rect.width;
        const container = window.innerWidth - width;

        return Math.random() * container;
    };

    const rearrangeMobileLetters = useCallback(() => {
        if (!elsMobileLogo.current) return;

        elsMobileLogo.current.childNodes.forEach((el) => {
            gsap.to(el, {
                x: setRandomLetterPosition(el.childNodes[0]),
                ease: 'power2.inOut',
            });
        });
    }, []);

    useEffect(() => {
        rearrangeMobileLetters();

        window.addEventListener('windowResized', rearrangeMobileLetters);
    }, [rearrangeMobileLetters]);

    // useEffect(() => {
    //     gsap.fromTo(
    //         elsMobileLogo.current.childNodes,
    //         {
    //             x: '0%',
    //         },
    //         {
    //             x: '50%',
    //             duration: 4,
    //             stagger: {
    //                 amount: 1,
    //                 yoyo: true,
    //                 repeat: -1,
    //                 ease: 'power4.inOut',
    //             },
    //         }
    //     );
    // }, []);

    useEffect(() => {
        const animateLogo = () => {
            gsap.set(elLogo.current, { opacity: 0 });

            gsap.fromTo(
                [elLogo.current, elMarquee.current, elFooter.current],
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power4.out',
                    onComplete: () => {
                        dispatchEvent(new CustomEvent('animateFooter'));
                    },
                }
            );
        };

        animateLogo();
    }, []);

    useEffect(() => {
        marquee.init();
    }, [marquee]);

    // const setRandomPositioning = () => {
    //     return `${Math.random() * 75}%`;
    // };

    return (
        <div className={styles.index}>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma, and I'm a full-stack web developer located in Tulsa, OK."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1
                ref={elLogo}
                className={cn({
                    [styles.indexLogo]: true,
                    [styles.indexLogoGif]: currentIndex > -1,
                })}
            >
                <span className={styles.visuallyHidden}>Emma Egstad</span>

                <span className={styles.logoDesktop}>
                    <Logo />
                </span>

                <span
                    ref={elsMobileLogo}
                    className={styles.logoMobile}
                    onClick={onMobileLogoClick}
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
            {currentIndex > -1 && (
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
                ref={elMarquee}
                className={cn({
                    ['marquee3k']: true,
                    [styles.indexMarquee]: true,
                    [styles.indexMarqueeGif]: currentIndex > -1,
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

            <footer ref={elFooter}>
                <Footer />
            </footer>
        </div>
    );
}
