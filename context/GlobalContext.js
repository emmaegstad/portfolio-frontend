import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { client } from '../lib/projects';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [activeGif, setActiveGif] = useState(false);
    const [gifs, setGifs] = useState();
    const layoutHasMounted = useRef();
    const value = {
        currentIndex,
        setCurrentIndex,
        activeGif,
        setActiveGif,
        gifs,
        layoutHasMounted,
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(`*[_type == "gif"]`);
            setGifs(data);
        };
        fetchData();
    }, []);

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobal = () => {
    const context = useContext(GlobalContext);

    if (context === undefined) {
        throw new Error(
            'To use useGlobal you must wrap component in GlobalProvider'
        );
    }

    return context;
};

export { GlobalProvider, useGlobal };
