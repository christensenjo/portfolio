import { cn } from '@/lib/utils';

type WorkItem = {
    name: string;
    role: string;
    href?: string;
};

type SideProject = {
    name: string;
    href: string;
};

type WorkSectionProps = {
    cellSize?: number;
    className?: string;
    workHistory: WorkItem[];
    sideProjects: SideProject[];
    showcaseProject?: {
        name: string;
        company: string;
        href?: string;
    };
};

export const WorkSection = ({
    cellSize = 123,
    className,
    workHistory,
    sideProjects,
    showcaseProject = {
        name: '/primestats.net',
        company: "dunc'd on",
    },
}: WorkSectionProps) => {
    return (
        <div className={cn('relative', className)}>
            {/* Row 1: Header takes top half, empty space below */}
            <div className="border-2 border-border bg-background" style={{ height: `${cellSize / 2}px`, marginBottom: `${cellSize / 2}px` }}>
                <div className="px-3 flex flex-col justify-center h-full">
                    <h2 className="font-title text-xl font-bold">{'{ work }'}</h2>
                </div>
            </div>

            {/* Rows 2-3: Showcase area (2 full rows) */}
            <div className="relative border-2 border-border bg-background" style={{ height: `${cellSize * 2.5}px`, marginBottom: `${cellSize / 2}px` }}>
                <span className="font-title absolute top-2 right-3 text-base font-bold">showcase</span>

                <div className="flex h-full flex-col items-center justify-center gap-4">
                    <p className="text-center text-sm">
                        <span>{showcaseProject.name} for </span>
                        <span className="font-title font-bold">{showcaseProject.company}</span>
                    </p>

                    <a
                        href="https://primestats.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-[calc(100%-2rem)] rounded-lg bg-muted shadow-lg h-fit cursor-pointer group"
                    >
                        <img
                            src="/images/primestats.png"
                            alt="project screenshot"
                            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </a>
                </div>
            </div>

            {/* Rows 4-6: Work history and side projects (3 rows with interlocking layout) */}
            <div className="relative grid grid-cols-3" style={{ gridTemplateRows: `repeat(3, ${cellSize}px)` }}>
                {/* Work history cells - cols 1-2, rows 1-2 */}
                {/* Row 1, Col 1 */}
                <div className="col-start-1 row-start-1 border-2 border-r-0 border-b-0 border-border bg-background" />
                {/* Row 1, Col 2 */}
                <div className="col-start-2 row-start-1 border-2 border-l-0 border-b-0 border-border bg-background" />
                {/* Row 2, Col 1 */}
                <div className="col-start-1 row-start-2 border-2 border-r-0 border-t-0 bg-background" />
                {/* Row 2, Col 2 - shared corner, no right border */}
                <div className="col-start-2 row-start-2 border-0 border-r-2 bg-background" />

                {/* Side projects cells - cols 2-3, rows 2-3 */}
                {/* Row 2, Col 3 */}
                <div className="col-start-3 row-start-2 border-0" />
                {/* Row 3, Col 2 */}
                <div className="col-start-2 row-start-3 border-2 border-t-0 border-r-0 border-border bg-background" />
                {/* Row 3, Col 3 */}
                <div className="col-start-3 row-start-3 border-2 border-t-2 border-l-0 bg-background" />

                {/* Work history content overlay */}
                <div className="absolute top-0 left-0 p-4" style={{ width: `${cellSize * 2}px`, height: `${cellSize * 2}px` }}>
                    <p className="mb-3 text-base">work history</p>
                    <ul className="space-y-1.5">
                        {workHistory.map((item) => (
                            <li key={item.name} className="flex items-baseline justify-between gap-2 text-base">
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold transition-colors hover:text-primary"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <span className="font-bold">{item.name}</span>
                                )}
                                <span className="text-sm">{item.role}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Side projects content overlay */}
                <div
                    className="absolute right-0 flex flex-col justify-center p-3 text-right"
                    style={{ width: `${cellSize * 2}px`, height: `${cellSize * 2}px`, top: `${cellSize * 1.5}px` }}
                >
                    <p className="mb-3 text-base">side projects, etc</p>
                    <div 
                        className="grid grid-cols-2 grid-rows-2 gap-2"
                        style={{ justifyItems: 'end' }}
                    >
                        {sideProjects.slice(0, 4).map((project) => (
                            <a
                                key={project.name}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-fit text-base transition-colors hover:text-primary whitespace-nowrap max-w-26`}
                            >
                                /<span className="font-bold">{project.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
