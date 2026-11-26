import { cn } from '@/lib/utils';

type HeroSectionProps = {
    cellSize?: number;
    className?: string;
};

export const HeroSection = ({ cellSize = 123, className }: HeroSectionProps) => {
    return (
        <div className={cn('relative grid grid-cols-3 grid-rows-2', className)} style={{ gridAutoRows: `${cellSize}px` }}>
            <div className="col-start-1 row-start-1 flex flex-col items-center justify-between border-t-2 border-b-2 border-l-2 border-border bg-background p-3 pb-2">
                <img
                    src="/images/profile.jpg"
                    alt="joel christensen"
                    width={75}
                    height={75}
                    className="size-[75px] rounded-full border-2 border-border object-cover"
                />
                <h1 className="font-title text-lg leading-tight font-bold text-balance whitespace-nowrap">joel christensen</h1>
            </div>

            <div className="col-span-2 col-start-2 row-span-2 row-start-1 flex flex-col justify-between border-t-2 border-r-2 border-b-2 border-border bg-background p-3 pt-6 pb-4 pl-4">
                <p className="text-right text-base leading-snug text-pretty">
                    hello, i'm joel christensen,
                    <br />a software engineer. i love to build experiences for the web and work with data, especially around subjects i'm passionate
                    about.
                </p>
                <p className="text-right text-base text-pretty">
                    currently working at <span className="font-title font-bold">dunc'd on</span>
                </p>
            </div>

            <div className="col-start-1 row-start-2 border-r-2 border-border" />

            {/* Corner fills for border intersections */}
            <div className="pointer-events-none absolute z-10 bg-border" style={{ left: `${cellSize - 2}px`, top: 0, width: '2px', height: '2px' }} />
        </div>
    );
};
