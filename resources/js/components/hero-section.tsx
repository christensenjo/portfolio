type HeroSectionProps = {
    cellSize?: number;
    className?: string;
};

export const HeroSection = ({ cellSize = 127, className }: HeroSectionProps) => {
    const topRowHeight = cellSize;
    const bottomRowWidth = cellSize * 2;

    return (
        <div
            className={`relative grid grid-cols-3 grid-rows-2 ${className ?? ''}`}
            style={{ gridAutoRows: `${cellSize}px` }}
        >
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute left-0 top-0 w-full border-2 border-border bg-background"
                    style={{ height: `${topRowHeight}px` }}
                />
                <div
                    className="absolute border-2 border-border bg-background"
                    style={{
                        left: `${cellSize}px`,
                        top: `${cellSize}px`,
                        height: `${cellSize}px`,
                        width: `${bottomRowWidth}px`,
                    }}
                />
            </div>

            <div className="relative col-span-1 row-start-1 flex h-full flex-col items-start gap-2 p-2">
                <img
                    src="/images/profile.jpg"
                    alt="joel christensen"
                    className="h-14 w-14 rounded-full border-2 border-border object-cover"
                />
                <div className="text-lg font-bold font-title leading-tight">joel christensen</div>
            </div>

            <div className="relative col-start-2 col-span-2 row-start-1 flex items-start p-3">
                <p className="text-right text-base leading-snug">
                    hello, i'm joel christensen,
                    <br />
                    a software engineer. i love to build experiences for the web and
                    work with data, especially around subjects i'm passionate about.
                </p>
            </div>

            <div className="relative col-start-2 col-span-2 row-start-2 flex items-end p-3">
                <p className="text-right text-base">
                    currently working at <span className="font-title font-bold">dunc'd on</span>
                </p>
            </div>
        </div>
    );
};
