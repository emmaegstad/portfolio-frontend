import styles from '../styles/layout.module.css';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    const onAnimationComplete = () => {
        console.log('layout animation has completed');
    };

    return (
        <div className={styles.layout}>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
                onAnimationComplete={onAnimationComplete}
            >
                {children}
            </motion.main>
        </div>
    );
}
