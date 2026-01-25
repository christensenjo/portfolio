import { cn } from '@/lib/utils';

type AboutSectionProps = {
    cellSize?: number;
    className?: string;
};

const EducationIcon = ({ className = 'size-5' }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        className={className} 
        aria-hidden="true"
    >
        <path d="M23.25 9.00501L12 14.26L0.75 9.00501L12 3.75L23.25 9.00501ZM23.25 9.00501V15.261M4.75002 10.9756V15.4507C4.75002 16.1906 5.15773 16.8702 5.81023 17.2178L11.0602 20.0152C11.6477 20.3283 12.3523 20.3283 12.9398 20.0152L18.1898 17.2178C18.8423 16.8702 19.25 16.1906 19.25 15.4507V10.9756" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const AccomplishmentsIcon = ({ className = 'size-5' }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        className={className} 
        aria-hidden="true"
    >
        <path d="M22.25 12C22.25 14.3472 20.3472 16.25 18 16.25C15.6528 16.25 13.75 14.3472 13.75 12C13.75 9.65279 15.6528 7.75 18 7.75C20.3472 7.75 22.25 9.65279 22.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 16.25C8.34721 16.25 10.25 14.3472 10.25 12C10.25 9.65279 8.34721 7.75 6 7.75C3.65279 7.75 1.75 9.65279 1.75 12C1.75 14.3472 3.65279 16.25 6 16.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M0.75 9.75H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 9.75H23.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.0599 9.28239C13.4494 8.94319 12.7466 8.75 11.9987 8.75C11.2508 8.75 10.548 8.94319 9.9375 9.28239" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const PassionsIcon = ({ className = 'size-5' }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        className={className} 
        aria-hidden="true"
    >
        <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5"/><path d="M2.75 12H21.25" stroke="currentColor" stroke-width="1.5"/><path d="M18.4597 6C17.0818 7.61524 16.25 9.71048 16.25 12C16.25 14.2895 17.0818 16.3848 18.4597 18" stroke="currentColor" stroke-width="1.5"/><path d="M5.53906 18C6.91696 16.3848 7.74876 14.2895 7.74876 12C7.74876 9.71048 6.91696 7.61524 5.53906 6" stroke="currentColor" stroke-width="1.5"/><path d="M12 3V21" stroke="currentColor" stroke-width="1.5"/>
    </svg>
);


export const AboutSection = ({ cellSize = 123, className }: AboutSectionProps) => {
    return (
        <div className={cn('relative', className)}>
            <div className="border-2 border-border bg-background px-3 flex flex-col justify-center" style={{ height: `${Math.floor(cellSize * 0.5)}px`, marginBottom: `${cellSize / 2}px` }}>
                <h2 className="font-title text-xl font-bold text-balance">{'{ more about me }'}</h2>
            </div>

            <div className="grid grid-cols-3" style={{ gridTemplateRows: `${Math.floor(cellSize * 0.67)}px`, marginBottom: `${cellSize * 0.33}px` }}>
                <div className="col-start-1" />
                <div className="col-span-2 grid grid-cols-2">
                    <div className="relative border-2 border-r-0 border-border bg-background">
                        <span className="absolute top-1.5 left-2 flex size-6 items-center justify-center text-primary">
                            <EducationIcon />
                        </span>
                    </div>
                    <div className="border-2 border-border border-l-0 bg-background" />
                </div>
                <div
                    className="absolute right-3 text-right text-base leading-snug pt-2"
                    style={{ top: `${Math.floor(cellSize)}px`, width: `${cellSize * 2 - 24}px` }}
                >
                    <p>utah state university</p>
                    <p>BS computer science 2022</p>
                    <p>magna cum laude</p>
                </div>
            </div>

            <div className="grid grid-cols-3" style={{ gridTemplateRows: `${cellSize}px`, marginBottom: `${cellSize * 0.5}px` }}>
                <div className="relative col-span-2 grid grid-cols-2">
                    <div className="border-2 border-r-0 border-border bg-background" />
                    <div className="relative border-2 border-l-0 border-border bg-background">
                        <span className="absolute right-2 bottom-2 flex size-6 items-center justify-center text-primary">
                            <AccomplishmentsIcon />
                        </span>
                    </div>
                    <div className="absolute inset-0 p-3 text-base leading-snug">
                        <p className="mb-2">member of first high-school age google developer group</p>
                        <p>data science club leadership at usu</p>
                    </div>
                </div>
                <div className="col-start-3" />
            </div>

            <div className="grid grid-cols-3" style={{ gridTemplateRows: `repeat(2, ${cellSize * 0.75}px)` }}>
                <div className="col-start-1 row-span-2" />
                <div className="relative col-span-2 row-span-2 grid grid-cols-2 grid-rows-2">
                    <div className="relative border-2 border-r-0 border-b-0 border-border bg-background">
                        <span className="absolute top-2 left-2 flex size-6 items-center justify-center text-primary">
                            <PassionsIcon />
                        </span>
                    </div>
                    <div className="border-2 border-b-0 border-l-0 border-border bg-background" />
                    <div className="border-2 border-r-0 border-t-0 border-border bg-background" />
                    <div className="border-2 border-t-0 border-l-0 border-border bg-background" />
                    <div className="absolute inset-0 flex flex-col justify-center p-3 text-right text-base leading-relaxed space-y-1">
                        <p className="mb-1">also passionate about:</p>
                        <p className="mt-2">my family</p>
                        <p>basketball</p>
                        <p>running</p>
                        <p>fantasy games and books</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
