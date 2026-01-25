import { useCallback, useEffect, useMemo, useState } from 'react';

type PrimaryOption = {
    name: 'vue' | 'laravel' | 'tailwind';
    value: string;
};

const primaryOptions: PrimaryOption[] = [
    { name: 'vue', value: 'var(--primary-vue)' },
    { name: 'laravel', value: 'var(--primary-laravel)' },
    { name: 'tailwind', value: 'var(--primary-tailwind)' },
];

const getRandomPrimary = (): PrimaryOption => {
    return primaryOptions[Math.floor(Math.random() * primaryOptions.length)];
};

export const useTheme = () => {
    const [primary, setPrimary] = useState<PrimaryOption>(primaryOptions[0]);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const nextPrimary = getRandomPrimary();
        setPrimary(nextPrimary);
        document.documentElement.style.setProperty('--primary', nextPrimary.value);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        const initialIsDark = root.classList.contains('dark');
        setIsDark(initialIsDark);
        root.style.colorScheme = initialIsDark ? 'dark' : 'light';
    }, []);

    const toggleTheme = useCallback((origin?: { x: number; y: number }) => {
        const root = document.documentElement;
        const updateTheme = () => {
            root.classList.toggle('dark');
            const newIsDark = root.classList.contains('dark');
            setIsDark(newIsDark);
            root.style.colorScheme = newIsDark ? 'dark' : 'light';
        };

        const startViewTransition = (
            document as Document & {
                startViewTransition?: (callback: () => void) => { ready: Promise<void> };
            }
        ).startViewTransition;

        if (!startViewTransition) {
            updateTheme();
            return;
        }

        const { x, y } = origin ?? { x: window.innerWidth - 32, y: 32 };
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y),
        );

        const transition = startViewTransition(() => {
            updateTheme();
        });

        transition.ready.then(() => {
            const clip = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            root.animate(
                { clipPath: clip },
                {
                    duration: 450,
                    easing: 'ease-out',
                    pseudoElement: '::view-transition-new(root)',
                } as KeyframeAnimationOptions & { pseudoElement: string },
            );

            root.animate(
                { clipPath: [...clip].reverse() },
                {
                    duration: 450,
                    easing: 'ease-out',
                    pseudoElement: '::view-transition-old(root)',
                } as KeyframeAnimationOptions & { pseudoElement: string },
            );
        });
    }, []);

    return useMemo(
        () => ({
            isDark,
            primary,
            toggleTheme,
        }),
        [isDark, primary, toggleTheme],
    );
};
