import { useState, useEffect } from 'react';

export const useSize = () => {
    const [size, setSize] = useState({ width: 0, height: 0 });

    const updateSize = () => {
        const isPortrait = window.innerHeight > window.innerWidth;
        if (isPortrait) {
            setSize({ width: window.innerWidth * 0.9, height: window.innerWidth * 0.9 });
        } else {
            setSize({ width: window.innerHeight * 0.9, height: window.innerHeight * 0.9 });
        }
    }

    useEffect(() => {
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    return size;
}