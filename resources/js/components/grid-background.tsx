import { useMemo } from 'react';

type GridBackgroundProps = {
    rows?: number;
    extendedRows?: number[];
    cellSize?: number;
    firstRowHeight?: number;
};

export const GridBackground = ({
    rows = 18,
    extendedRows = [],
    cellSize = 123,
    firstRowHeight,
}: GridBackgroundProps) => {
    const gridWidth = cellSize * 3;
    const actualFirstRowHeight = firstRowHeight ?? cellSize;

    const cells = useMemo(
        () => Array.from({ length: rows * 3 }, (_, index) => index),
        [rows],
    );

    const gridTemplateRows = useMemo(() => {
        const rowHeights = [`${actualFirstRowHeight}px`];
        for (let i = 1; i < rows; i++) {
            rowHeights.push(`${cellSize}px`);
        }
        return rowHeights.join(' ');
    }, [rows, cellSize, actualFirstRowHeight]);

    const getRowTop = (rowIndex: number): number => {
        if (rowIndex === 0) return 0;
        if (rowIndex === 1) return actualFirstRowHeight;
        return actualFirstRowHeight + (rowIndex - 1) * cellSize;
    };

    return (
        <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="relative h-full w-full">
                <div
                    className="mx-auto grid grid-cols-3"
                    style={{
                        width: `${gridWidth}px`,
                        gridTemplateRows,
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
                        style={{ top: `${getRowTop(row)}px` }}
                    />
                ))}
            </div>
        </div>
    );
};
