import { useState, useEffect } from 'react';

type ReturnType<T> = [T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>
]

export const useLocalStorage = <T,>(key: string, initialValue?: T): ReturnType<T> => {
    const [state, setState] = useState<T | undefined>(() => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState]
};