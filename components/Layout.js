import styles from '../styles/layout.module.css';
import { useEffect } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { debounce, resizeCallback } from '../utils/debounce';
import Header from './Header';

export default function Layout({ children }) {
    const { layoutHasMounted } = useGlobal();

    //set event listener for brower resize
    useEffect(() => {
        window.addEventListener('resize', debounce(resizeCallback, 300));
    }, []);

    // tell the app that the layout has mounted
    useEffect(() => {
        const layoutMounted = new CustomEvent('layoutMounted');

        dispatchEvent(layoutMounted);

        layoutHasMounted.current = true;
    }, [layoutHasMounted]);

    return (
        <div className={styles.layout}>
            <Header />
            <main>{children}</main>
        </div>
    );
}
