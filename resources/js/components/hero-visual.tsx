import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';
import { Dither, Shader, SimplexNoise, SolidColor } from 'shaders/react';

type HeroVisualProps = {
    cellSize?: number;
    className?: string;
};

const PRIMARY_HEX_MAP: Record<string, string> = {
    vue: '#3fb27f',
    laravel: '#f23b2f',
    tailwind: '#36b7f0',
};

export const HeroVisual = ({ cellSize = 123, className }: HeroVisualProps) => {
    const { primary } = useTheme();
    const primaryHex = PRIMARY_HEX_MAP[primary.name] ?? PRIMARY_HEX_MAP.vue;

    return (
        <div
            className={cn('relative grid grid-cols-3 grid-rows-2', className)}
            style={{ gridAutoRows: `${cellSize}px` }}
        >
            {/* Shader background layer - covers the L-shape */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    clipPath: `polygon(
                        0 0,
                        ${cellSize}px 0,
                        ${cellSize}px ${cellSize}px,
                        ${cellSize * 3}px ${cellSize}px,
                        ${cellSize * 3}px ${cellSize * 2}px,
                        0 ${cellSize * 2}px
                    )`,
                }}
            >
                <Shader className="size-full">
                    <SolidColor color="#f1f9fe" />
                    <Dither
                        blendMode="multiply"
                        colorA={primaryHex}
                        colorB="#ffffff00"
                        pixelSize={4}
                        threshold={0}
                    >
                        <SimplexNoise
                            balance={0}
                            colorA="#ffffff"
                            colorB="transparent"
                            contrast={0}
                            scale={0.5}
                            seed={90}
                            speed={0.2}
                            visible={true}
                        />
                    </Dither>
                </Shader>
            </div>

            {/* Grid cells for borders (z-10 to appear on top of shader) */}
            {/* Row 1, Col 1: Top-left cell - top, left, right borders (no bottom - connects to cell below) */}
            <div className="relative z-10 col-start-1 row-start-1 border-t-2 border-l-2 border-r-2 border-border" />

            {/* Row 1, Col 2-3: Empty cells (missing from L-shape) - no borders, no background */}
            <div className="col-start-2 col-span-2 row-start-1" />

            {/* Row 2, Col 1: Bottom-left cell - left, bottom borders */}
            <div className="relative z-10 col-start-1 row-start-2 border-l-2 border-b-2 border-border" />

            {/* Row 2, Col 2: Bottom-middle cell - top, bottom borders */}
            <div className="relative z-10 col-start-2 row-start-2 border-t-2 border-b-2 border-border" />

            {/* Row 2, Col 3: Bottom-right cell - top, right, bottom borders */}
            <div className="relative z-10 col-start-3 row-start-2 border-t-2 border-r-2 border-b-2 border-border" />

            {/* Corner fill at the step (where top-left cell meets bottom row) */}
            <div
                className="pointer-events-none absolute z-10 bg-border"
                style={{
                    left: `${cellSize - 2}px`,
                    top: `${cellSize}px`,
                    width: '2px',
                    height: '2px',
                }}
            />
        </div>
    );
};
