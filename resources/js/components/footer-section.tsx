import { cn } from '@/lib/utils';

type SocialLink = {
    label: string;
    href: string;
};

type FooterSectionProps = {
    cellSize?: number;
    className?: string;
    socialLinks: SocialLink[];
};

export const FooterSection = ({ cellSize = 123, className, socialLinks }: FooterSectionProps) => {
    return (
        <footer
            className={cn('grid grid-cols-3 bg-foreground text-background', className)}
            style={{ gridTemplateRows: `${cellSize}px ${Math.floor(cellSize * 0.35)}px` }}
        >
            {/* Logo area - spans 2 cols, full height */}
            <div className="col-span-2 row-span-2 flex items-center justify-start pl-4">
                <span className="font-title text-7xl font-bold tracking-tighter select-none">JOEL</span>
            </div>

            {/* Social links - right column */}
            <nav className="col-start-3 row-span-2 flex flex-col items-end justify-center gap-2.5 pr-4" aria-label="Footer social links">
                {socialLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base transition-colors hover:text-primary"
                    >
                        <span>{link.label}</span>
                        {/* TODO: Replace with icon SVG */}
                        <span className="flex size-4 items-center justify-center opacity-50">
                            {link.label === '/github' && '↗'}
                            {link.label === '/twitter' && '↗'}
                            {link.label === '/linkedin' && '↗'}
                        </span>
                    </a>
                ))}
            </nav>
        </footer>
    );
};
