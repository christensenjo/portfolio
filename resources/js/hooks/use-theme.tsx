import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type PrimaryOption = {
    name: 'vue' | 'laravel' | 'tailwind';
    value: string;
};

type ThemeContextValue = {
    isDark: boolean;
    primary: PrimaryOption;
    toggleTheme: (origin?: { x: number; y: number }) => void;
};

const primaryOptions: PrimaryOption[] = [
    { name: 'vue', value: 'var(--primary-vue)' },
    { name: 'laravel', value: 'var(--primary-laravel)' },
    { name: 'tailwind', value: 'var(--primary-tailwind)' },
];

const getRandomPrimary = (): PrimaryOption => {
    return primaryOptions[Math.floor(Math.random() * primaryOptions.length)];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [primary, setPrimary] = useState<PrimaryOption>(primaryOptions[0]);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const nextPrimary = getRandomPrimary();
        setPrimary(nextPrimary);
        document.documentElement.style.setProperty('--primary', nextPrimary.value);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialIsDark = root.classList.contains('dark') || prefersDark;

        if (initialIsDark && !root.classList.contains('dark')) {
            root.classList.add('dark');
        }

        setIsDark(initialIsDark);
        root.style.colorScheme = initialIsDark ? 'dark' : 'light';

        const themeColorMeta = document.getElementById('theme-color-meta') as HTMLMetaElement | null;
        if (themeColorMeta) {
            themeColorMeta.content = initialIsDark ? '#111212' : '#f1f9fe';
        }
    }, []);

    const toggleTheme = useCallback((origin?: { x: number; y: number }) => {
        const root = document.documentElement;
        const updateTheme = () => {
            root.classList.toggle('dark');
            const newIsDark = root.classList.contains('dark');
            setIsDark(newIsDark);
            root.style.colorScheme = newIsDark ? 'dark' : 'light';

            const themeColorMeta = document.getElementById('theme-color-meta') as HTMLMetaElement | null;
            if (themeColorMeta) {
                themeColorMeta.content = newIsDark ? '#111212' : '#f1f9fe';
            }
        };

        const doc = document as Document & {
            startViewTransition?: (callback: () => void) => { ready: Promise<void> };
        };

        if (!doc.startViewTransition) {
            updateTheme();
            return;
        }

        const { x, y } = origin ?? { x: window.innerWidth - 32, y: 32 };
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y),
        );

        const transition = doc.startViewTransition(() => {
            updateTheme();
        });

        transition.ready.then(() => {
            root.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 500,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    pseudoElement: '::view-transition-new(root)',
                } as KeyframeAnimationOptions & { pseudoElement: string },
            );
        });
    }, []);

    const value = useMemo(
        () => ({
            isDark,
            primary,
            toggleTheme,
        }),
        [isDark, primary, toggleTheme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
