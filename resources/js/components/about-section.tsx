import { cn } from '@/lib/utils';

type AboutSectionProps = {
    cellSize?: number;
    className?: string;
};

export const AboutSection = ({ cellSize = 123, className }: AboutSectionProps) => {
    return (
        <div className={cn('relative', className)}>
            {/* Header: { more about me } - spans full width */}
            <div className="border-2 border-border bg-background px-3 py-3" style={{ height: `${Math.floor(cellSize * 0.44)}px` }}>
                <h2 className="font-title text-xl font-bold">{'{ more about me }'}</h2>
            </div>

            {/* Education block - right side, partial height */}
            <div className="grid grid-cols-3" style={{ gridTemplateRows: `${Math.floor(cellSize * 0.67)}px` }}>
                {/* Empty left cell */}
                <div className="col-start-1" />

                {/* Education cells - 2 cols */}
                <div className="col-span-2 grid grid-cols-2">
                    <div className="relative border-2 border-t-0 border-r-0 border-border bg-background">
                        {/* Graduation cap icon placeholder */}
                        <span className="absolute top-1.5 left-2 flex size-6 items-center justify-center text-muted-foreground">
                            {/* TODO: Replace with graduation-cap SVG */}
                            🎓
                        </span>
                    </div>
                    <div className="border-2 border-t-0 border-border bg-background" />
                </div>

                {/* Education content overlay */}
                <div
                    className="absolute right-3 text-right text-base leading-snug"
                    style={{ top: `${Math.floor(cellSize * 0.44) + 12}px`, width: `${cellSize * 2 - 24}px` }}
                >
                    <p>utah state university</p>
                    <p>BS computer science 2022</p>
                    <p>magna cum laude</p>
                </div>
            </div>

            {/* Accomplishments block - left side */}
            <div className="grid grid-cols-3" style={{ gridTemplateRows: `${cellSize}px` }}>
                {/* Accomplishments cells - 2 cols on left */}
                <div className="relative col-span-2 grid grid-cols-2">
                    <div className="border-2 border-t-0 border-r-0 border-border bg-background" />
                    <div className="relative border-2 border-t-0 border-border bg-background">
                        {/* Glasses icon placeholder */}
                        <span className="absolute right-2 bottom-2 flex size-6 items-center justify-center text-muted-foreground">
                            {/* TODO: Replace with glasses SVG */}
                            👓
                        </span>
                    </div>

                    {/* Accomplishments content */}
                    <div className="absolute inset-0 p-3 text-base leading-snug">
                        <p className="mb-2">member of first high-school age google developer group</p>
                        <p>data science club leadership at usu</p>
                    </div>
                </div>

                {/* Empty right cell */}
                <div className="col-start-3" />
            </div>

            {/* Passions block - right side, 2 rows */}
            <div className="grid grid-cols-3" style={{ gridTemplateRows: `repeat(2, ${cellSize}px)` }}>
                {/* Empty left column for both rows */}
                <div className="col-start-1 row-span-2" />

                {/* Passions cells - 2 cols, 2 rows */}
                <div className="relative col-span-2 row-span-2 grid grid-cols-2 grid-rows-2">
                    {/* Top row */}
                    <div className="relative border-2 border-t-0 border-r-0 border-b-0 border-border bg-background">
                        {/* Heart icon placeholder */}
                        <span className="absolute top-2 left-2 flex size-6 items-center justify-center text-muted-foreground">
                            {/* TODO: Replace with heart SVG */}
                            ❤️
                        </span>
                    </div>
                    <div className="border-2 border-t-0 border-b-0 border-border bg-background" />

                    {/* Bottom row */}
                    <div className="border-2 border-r-0 border-border bg-background" />
                    <div className="border-2 border-border bg-background" />

                    {/* Passions content */}
                    <div className="absolute inset-0 flex flex-col justify-center p-3 text-right text-base leading-relaxed">
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
