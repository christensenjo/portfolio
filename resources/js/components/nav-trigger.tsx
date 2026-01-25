import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

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

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={containerRef} className={cn('relative h-full w-full', className)}>
            <button
                type="button"
                className="flex h-full w-full items-center justify-center border-2 border-border bg-background text-lg transition-colors hover:bg-foreground hover:text-background"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-haspopup="menu"
            >
                {'<?'}
            </button>

            {open ? (
                <div
                    className="absolute left-0 top-full z-20 mt-2 w-48 border-2 border-border bg-background p-3 text-sm"
                    role="menu"
                >
                    <div className="grid gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-foreground transition-colors hover:text-primary"
                                role="menuitem"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
