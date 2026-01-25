import { Head } from '@inertiajs/react';

import { AboutSection } from '@/components/about-section';
import { FooterSection } from '@/components/footer-section';
import { GridBackground } from '@/components/grid-background';
import { HeroSection } from '@/components/hero-section';
import { HeroVisual } from '@/components/hero-visual';
import { NavTrigger } from '@/components/nav-trigger';
import { TopRightBlock } from '@/components/top-right-block';
import { WorkSection } from '@/components/work-section';

const CELL_SIZE = 123;
const FIRST_ROW_HEIGHT = Math.floor(CELL_SIZE / 2);

const WORK_HISTORY = [
    { name: "dunc'd on", role: 'dev', href: '#' },
    { name: 'voyyance', role: 'cto', href: '#' },
    { name: 'maiden voyage', role: 'dev', href: '#' },
    { name: 'health catalyst', role: 'intern', href: '#' },
    { name: 'familysearch', role: 'intern', href: '#' },
];

const SIDE_PROJECTS = [
    { name: 'nba shot viz', href: '#' },
    { name: 'la clippers', href: '#' },
    { name: 'image gallery', href: '#' },
    { name: 'golang api', href: '#' },
];

const SOCIAL_LINKS = [
    { href: 'https://github.com/christensenjo', label: '/github' },
    { href: 'https://twitter.com/dataSaysJoel', label: '/twitter' },
    { href: 'https://www.linkedin.com/in/full-stack-joel-christensen/', label: '/linkedin' },
];

export default function Home() {
    return (
        <>
            <Head title="Joel Christensen" />
            <div className="relative min-h-dvh text-foreground">
                <div className="absolute inset-0 -z-20 bg-background" />
                <GridBackground rows={24} extendedRows={[1, 5]} cellSize={CELL_SIZE} firstRowHeight={FIRST_ROW_HEIGHT} />

                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
                >
                    Skip to main content
                </a>

                <main id="main-content" className="relative z-10">
                    <div className="mx-auto px-1" style={{ width: `${CELL_SIZE * 3}px` }}>
                        {/* Header grid area */}
                        <div
                            className="grid grid-cols-3"
                            style={{
                                gridTemplateRows: `${FIRST_ROW_HEIGHT}px repeat(6, ${CELL_SIZE}px)`,
                            }}
                        >
                            <NavTrigger
                                className="col-start-1 row-start-1"
                                links={[
                                    { href: '#work', label: '{work}' },
                                    { href: '#moreaboutme', label: '{more about me}' },
                                ]}
                            />

                            <TopRightBlock className="col-start-3 row-span-2 row-start-1" socialLinks={SOCIAL_LINKS} />

                            <HeroSection cellSize={CELL_SIZE} className="col-span-3 col-start-1 row-span-2 row-start-4" />

                            <HeroVisual cellSize={CELL_SIZE} className="col-span-3 col-start-1 row-span-2 row-start-6" />
                        </div>

                        {/* Spacing row */}
                        <div style={{ height: `${CELL_SIZE}px` }} />

                        {/* Work Section */}
                        <section id="work" className="scroll-mt-16" aria-label="Work">
                            <WorkSection cellSize={CELL_SIZE} workHistory={WORK_HISTORY} sideProjects={SIDE_PROJECTS} />
                        </section>

                        {/* Spacing row */}
                        <div style={{ height: `${CELL_SIZE}px` }} />

                        {/* More About Me Section */}
                        <section id="moreaboutme" className="scroll-mt-16" aria-label="More about me">
                            <AboutSection cellSize={CELL_SIZE} />
                        </section>
                    </div>

                    {/* Footer - full width background */}
                    <FooterSection cellSize={CELL_SIZE} socialLinks={SOCIAL_LINKS} />
                </main>
            </div>
        </>
    );
}
