import { Link } from '@inertiajs/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type NavLink = {
    href: string;
    label: string;
};

type NavTriggerProps = {
    links: NavLink[];
    className?: string;
};

export const NavTrigger = ({ links, className }: NavTriggerProps) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const closeMenu = useCallback(() => {
        setOpen(false);
        buttonRef.current?.focus();
    }, []);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && open) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, closeMenu]);

    return (
        <div ref={containerRef} className={cn('relative h-full w-full', className)}>
            <button
                ref={buttonRef}
                type="button"
                className="flex h-full w-full items-center justify-start pl-4 border-2 border-t-0 border-border bg-background text-lg transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-haspopup="menu"
                aria-label="Open navigation menu"
            >
                {'<?'}
            </button>

            {open ? (
                <nav
                    className="absolute left-0 top-full z-20 mt-2 w-48 border-2 border-border bg-background p-3 text-sm"
                    role="menu"
                    aria-label="Navigation"
                >
                    <div className="grid gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                role="menuitem"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            ) : null}
        </div>
    );
};
