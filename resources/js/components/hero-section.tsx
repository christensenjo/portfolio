import { cn } from '@/lib/utils';

type HeroSectionProps = {
    cellSize?: number;
    className?: string;
};

export const HeroSection = ({ cellSize = 123, className }: HeroSectionProps) => {
    return (
        <div
            className={cn('relative grid grid-cols-3 grid-rows-2', className)}
            style={{ gridAutoRows: `${cellSize}px` }}
        >
            {/* L-shaped border background */}
            <div className="pointer-events-none absolute inset-0">
                {/* Top row - 3 cells with specific borders */}
                <div className="absolute flex left-0 top-0 w-full" style={{ height: `${cellSize}px` }}>
                    {/* Top-left cell: full L corner */}
                    <div
                        className="border-2 border-r-0 border-border bg-background"
                        style={{ width: `${cellSize}px`, height: '100%' }}
                    />
                    {/* Top-middle cell: top border only */}
                    <div
                        className="border-t-2 border-border bg-background"
                        style={{ width: `${cellSize}px`, height: '100%' }}
                    />
                    {/* Top-right cell: top and right borders */}
                    <div
                        className="border-t-2 border-r-2 border-border bg-background"
                        style={{ width: `${cellSize}px`, height: '100%' }}
                    />
                </div>
                {/* Bottom row - 2 cells on the right */}
                <div
                    className="absolute flex"
                    style={{ left: `${cellSize}px`, top: `${cellSize - 2}px`, width: `${cellSize * 2}px`, height: `${cellSize + 2}px` }}
                >
                    {/* Bottom-middle cell: left and bottom borders */}
                    <div
                        className="border-l-2 border-b-2 border-border bg-background"
                        style={{ width: `${cellSize}px`, height: '100%' }}
                    />
                    {/* Bottom-right cell: right and bottom borders */}
                    <div
                        className="border-r-2 border-b-2 border-border bg-background"
                        style={{ width: `${cellSize}px`, height: '100%' }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative col-span-1 row-start-1 flex h-full flex-col items-center justify-between p-3 pb-2">
                <img
                    src="/images/profile.jpg"
                    alt="joel christensen"
                    width={75}
                    height={75}
                    className="size-[75px] rounded-full border-2 border-border object-cover"
                />
                <h1 className="text-lg font-bold font-title leading-tight whitespace-nowrap">joel christensen</h1>
            </div>

            <div className="relative col-start-2 col-span-2 row-start-1 flex items-start p-3 pl-6 pt-8">
                <p className="text-pretty text-right text-base leading-snug">
                    hello, i'm joel christensen,
                    <br />
                    a software engineer. i love to build experiences for the web and
                    work with data, especially around subjects i'm passionate about.
                </p>
            </div>

            <div className="relative col-start-2 col-span-2 row-start-2 flex items-end p-3 pl-6 pb-2">
                <p className="text-pretty text-right text-base">
                    currently working at <span className="font-title font-bold">dunc'd on</span>
                </p>
            </div>
        </div>
    );
};
