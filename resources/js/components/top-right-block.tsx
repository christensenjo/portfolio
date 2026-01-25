import { Link } from '@inertiajs/react';

import { useTheme } from '@/hooks/use-theme';

type SocialLink = {
    label: string;
    href: string;
};

type TopRightBlockProps = {
    socialLinks: SocialLink[];
    className?: string;
};

const SunIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
    </svg>
);

export const TopRightBlock = ({ socialLinks, className }: TopRightBlockProps) => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className={className}>
            <div className="grid h-full w-full grid-rows-2 border-2 border-border bg-background">
                <div className="flex items-start justify-end border-b-2 border-border p-3">
                    <button
                        type="button"
                        className="text-foreground transition-colors hover:text-primary"
                        aria-label="toggle theme"
                        onClick={(event) =>
                            toggleTheme({ x: event.clientX, y: event.clientY })
                        }
                    >
                        {isDark ? <MoonIcon /> : <SunIcon />}
                    </button>
                </div>

                <div className="flex items-center px-4 pb-4">
                    <div className="grid gap-2 text-sm">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                            >
                                <span className="flex h-4 w-4 items-center justify-center border-2 border-current text-primary" />
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
