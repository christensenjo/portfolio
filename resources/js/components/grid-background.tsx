import { useMemo } from 'react';

type GridBackgroundProps = {
    rows?: number;
    extendedRows?: number[];
    cellSize?: number;
};

export const GridBackground = ({
    rows = 18,
    extendedRows = [],
    cellSize = 127,
}: GridBackgroundProps) => {
    const gridWidth = cellSize * 3;
    const topOffset = -(cellSize / 2);

    const cells = useMemo(
        () => Array.from({ length: rows * 3 }, (_, index) => index),
        [rows],
    );

    return (
        <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="relative h-full w-full">
                <div
                    className="mx-auto grid grid-cols-3"
                    style={{
                        width: `${gridWidth}px`,
                        marginTop: `${topOffset}px`,
                        gridAutoRows: `${cellSize}px`,
                    }}
                >
                    {cells.map((cell) => (
                        <div
                            key={cell}
                            className="border border-dashed border-[color:var(--gridline-color)]"
                        />
                    ))}
                </div>

                {extendedRows.map((row) => (
                    <div
                        key={`row-${row}`}
                        className="absolute left-0 right-0 border-t border-dashed border-[color:var(--gridline-color)]"
                        style={{ top: `${topOffset + row * cellSize}px` }}
                    />
                ))}
            </div>
        </div>
    );
};
