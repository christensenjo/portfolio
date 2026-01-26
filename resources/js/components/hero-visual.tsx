import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';
import { CursorTrail, Dither, Shader, SimplexNoise, SolidColor } from 'shaders/react';

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
            <div
                key={primary.name}
                className="pointer-events-none absolute inset-0"
                style={{
                    clipPath: `polygon(
                        2px 2px,
                        ${cellSize - 3}px 2px,
                        ${cellSize - 3}px ${cellSize}px,
                        ${cellSize}px ${cellSize}px,
                        ${cellSize}px ${cellSize + 2}px,
                        ${cellSize * 3 - 2}px ${cellSize + 2}px,
                        ${cellSize * 3 - 2}px ${cellSize * 2 - 2}px,
                        2px ${cellSize * 2 - 2}px
                    )`,
                }}
            >
                <Shader className="size-full">
                    <SolidColor color="#f1f9fe" />
                    <Dither blendMode="multiply" colorA={primaryHex} colorB="#ffffff00" pixelSize={4} threshold={0}>
                        <CursorTrail colorA="#00aaff" colorB="#ff00aa" colorSpace="linear" length={0.5} radius={0.5} shrink={1} />
                        <SimplexNoise balance={0.6} colorA="#ffffff" colorB="transparent" contrast={0} scale={-0.2} seed={90} speed={0.2} visible={true} />
                    </Dither>
                </Shader>
            </div>

            <div className="relative z-10 col-start-1 row-start-1 border-t-2 border-l-2 border-r-2 border-border" />
            <div className="col-start-2 col-span-2 row-start-1" />
            <div className="relative z-10 col-start-1 row-start-2 border-l-2 border-b-2 border-border" />
            <div className="relative z-10 col-start-2 row-start-2 border-t-2 border-b-2 border-border" />
            <div className="relative z-10 col-start-3 row-start-2 border-t-2 border-r-2 border-b-2 border-border" />

            <div
                className="pointer-events-none absolute z-10 bg-border"
                style={{ left: `${cellSize - 2}px`, top: `${cellSize}px`, width: '2px', height: '2px' }}
            />
        </div>
    );
};
