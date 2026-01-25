import { useTheme } from '@/hooks/use-theme';

type SocialLink = {
    label: string;
    href: string;
};

type TopRightBlockProps = {
    socialLinks: SocialLink[];
    className?: string;
};

type IconProps = {
    className?: string;
};

const SunIcon = ({ className = 'size-5' }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

const MoonIcon = ({ className = 'size-5' }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
    </svg>
);

const TwitterIcon = ({ className = 'size-5' }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="currentColor"
    >
        <path d="M23.25 5.13125C22.4226 5.49214 21.5337 5.73599 20.5993 5.84621C21.5525 5.28438 22.2838 4.39287 22.6287 3.33164C21.7369 3.8525 20.7489 4.23095 19.6975 4.43384C18.8552 3.55208 17.6562 3 16.3284 3C13.7797 3 11.7126 5.03468 11.7126 7.54536C11.7126 7.9004 11.7543 8.24569 11.8315 8.57928C7.99368 8.38908 4.59381 6.57971 2.31666 3.83104C1.92029 4.50406 1.69237 5.28438 1.69237 6.11542C1.69237 7.69167 2.50791 9.08356 3.74557 9.89802C2.98851 9.87363 2.27702 9.66977 1.65472 9.32936V9.38788C1.65472 11.5894 3.24516 13.426 5.35781 13.8435C4.96937 13.9469 4.5621 14.0015 4.14194 14.0015C3.84467 14.0015 3.55432 13.9742 3.2729 13.9215C3.86052 15.726 5.56492 17.0409 7.58542 17.076C6.00489 18.2952 4.01412 19.0219 1.85191 19.0219C1.47932 19.0219 1.11169 19.0004 0.75 18.9585C2.79329 20.2489 5.21908 21 7.82522 21C16.3175 21 20.96 14.0766 20.96 8.07207C20.96 7.87699 20.955 7.67996 20.9461 7.48488C21.8478 6.84307 22.6307 6.04422 23.248 5.13417L23.25 5.13125Z" />
    </svg>
);

const GitHubIcon = ({ className = 'size-5' }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="currentColor"
    >
        <path d="M12 1.95068C17.525 1.95068 22 6.42568 22 11.9507C21.9995 14.0459 21.3419 16.0883 20.1198 17.7902C18.8977 19.4922 17.1727 20.768 15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382C6.8458 20.7752 5.11342 19.502 3.88611 17.799C2.65881 16.096 1.9989 14.0498 2 11.9507C2 6.42568 6.475 1.95068 12 1.95068Z" />
    </svg>
);

const LinkedInIcon = ({ className = 'size-5' }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden="true"
        fill="currentColor"
    >
        <path d="M19.65 3H4.35C3.99196 3 3.64858 3.14223 3.39541 3.39541C3.14223 3.64858 3 3.99196 3 4.35V19.65C3 20.008 3.14223 20.3514 3.39541 20.6046C3.64858 20.8578 3.99196 21 4.35 21H19.65C20.008 21 20.3514 20.8578 20.6046 20.6046C20.8578 20.3514 21 20.008 21 19.65V4.35C21 3.99196 20.8578 3.64858 20.6046 3.39541C20.3514 3.14223 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.74056 8.61616 6.4406 8.51632 6.18758 8.33797C5.93456 8.15962 5.7397 7.91066 5.62737 7.6222C5.51503 7.33374 5.49019 7.01857 5.55595 6.71607C5.6217 6.41358 5.77515 6.13716 5.9971 5.92138C6.21906 5.70559 6.49968 5.55999 6.80391 5.50278C7.10814 5.44556 7.42248 5.47927 7.70766 5.59969C7.99284 5.7201 8.23622 5.92189 8.40737 6.17983C8.57853 6.43778 8.66987 6.74044 8.67 7.05C8.66289 7.47331 8.4885 7.8766 8.18495 8.17173C7.88139 8.46685 7.47335 8.62982 7.05 8.625ZM18.3 18.3H15.6V14.034C15.6 12.756 15.06 12.297 14.358 12.297C14.1522 12.3107 13.9511 12.3649 13.7663 12.4566C13.5815 12.5482 13.4166 12.6755 13.2811 12.831C13.1457 12.9866 13.0422 13.1674 12.9768 13.363C12.9114 13.5586 12.8853 13.7652 12.9 13.971C12.8955 14.0129 12.8955 14.0551 12.9 14.097V18.3H10.2V10.2H12.81V11.37C13.0733 10.9695 13.435 10.6433 13.8605 10.4227C14.286 10.2021 14.761 10.0944 15.24 10.11C16.635 10.11 18.264 10.884 18.264 13.404L18.3 18.3Z" />
    </svg>
);

export const TopRightBlock = ({ socialLinks, className }: TopRightBlockProps) => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className={className}>
            <div className="flex h-full w-full flex-col border-2 border-t-0 border-border bg-background">
                <div className="flex items-start justify-end">
                    <button
                        type="button"
                        className="rounded-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer p-3"
                        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                        onClick={(event) =>
                            toggleTheme({ x: event.clientX, y: event.clientY })
                        }
                    >
                        {isDark ? <MoonIcon /> : <SunIcon />}
                    </button>
                </div>

                <nav className="flex grow items-center px-3 pb-4 mt-7" aria-label="Social links">
                    <ul className="grid w-full gap-2 text-sm">
                        {socialLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-between gap-4 rounded-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-base"
                                >
                                    <span>{link.label}</span>
                                    <span className="text-primary">
                                        {link.label === '/twitter' && <TwitterIcon />}
                                        {link.label === '/github' && <GitHubIcon />}
                                        {link.label === '/linkedin' && <LinkedInIcon />}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};
