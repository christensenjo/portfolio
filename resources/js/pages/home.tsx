import { usePage } from '@inertiajs/react';

import { AboutSection } from '@/components/about-section';
import { FooterSection } from '@/components/footer-section';
import { GridBackground } from '@/components/grid-background';
import { HeroSection } from '@/components/hero-section';
import { HeroVisual } from '@/components/hero-visual';
import { NavTrigger } from '@/components/nav-trigger';
import { Seo } from '@/components/seo';
import { TopRightBlock } from '@/components/top-right-block';
import { WorkSection } from '@/components/work-section';

const CELL_SIZE = 123;
const FIRST_ROW_HEIGHT = Math.floor(CELL_SIZE / 2);

const WORK_HISTORY = [
    { name: "dunc'd on", role: 'dev', href: 'https://duncdon.supportingcast.fm/' },
    { name: 'voyyance', role: 'cto', href: 'https://www.voyyance.com/' },
    { name: 'maiden voyage', role: 'dev', href: 'https://yourmaidenvoyage.com/' },
    { name: 'health catalyst', role: 'intern', href: 'https://www.healthcatalyst.com/' },
    { name: 'familysearch', role: 'intern', href: 'https://www.familysearch.org/' },
];

const SIDE_PROJECTS = [
    { name: 'nba shot viz', href: 'https://github.com/christensenjo/NBA-Shot-Data-Visualizer' },
    { name: 'la clippers', href: 'https://github.com/christensenjo/la-clippers-data-visualization' },
    { name: 'image gallery', href: 'https://github.com/christensenjo/t3gallery' },
    { name: 'golang api', href: 'https://github.com/christensenjo/go-dinner-reservations' },
];

const SOCIAL_LINKS = [
    { href: 'https://github.com/christensenjo', label: '/github' },
    { href: 'https://twitter.com/dataSaysJoel', label: '/twitter' },
    { href: 'https://www.linkedin.com/in/full-stack-joel-christensen/', label: '/linkedin' },
];

export default function Home() {
    const { appUrl } = usePage<{ appUrl: string }>().props;

    return (
        <>
            <Seo
                title=""
                description="Joel Christensen is a full-stack developer specializing in Laravel, React, and modern web technologies. Building scalable, beautiful web applications."
                image={`${appUrl}/images/og-image.jpg`}
                imageAlt="Joel Christensen - Full-Stack Developer"
                type="website"
            />
            <div className="relative min-h-dvh text-foreground">
                <div className="absolute inset-0 -z-20 bg-background" />
                <GridBackground rows={24} extendedRows={[1, 7, 8, 15, 16, 22]} cellSize={CELL_SIZE} firstRowHeight={FIRST_ROW_HEIGHT} />

                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
                >
                    Skip to main content
                </a>

                <main id="main-content" className="relative z-10">
                    <div className="mx-auto px-1" style={{ width: `${CELL_SIZE * 3}px` }}>
                        <div
                            className="grid grid-cols-3"
                            style={{ gridTemplateRows: `${FIRST_ROW_HEIGHT}px repeat(6, ${CELL_SIZE}px)` }}
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

                        <div style={{ height: `${CELL_SIZE}px` }} />

                        <section id="work" className="scroll-mt-16" aria-label="Work">
                            <WorkSection cellSize={CELL_SIZE} workHistory={WORK_HISTORY} sideProjects={SIDE_PROJECTS} />
                        </section>

                        <div style={{ height: `${CELL_SIZE}px` }} />

                        <section id="moreaboutme" className="scroll-mt-16" aria-label="More about me">
                            <AboutSection cellSize={CELL_SIZE} />
                        </section>
                    </div>

                    <FooterSection cellSize={CELL_SIZE} socialLinks={SOCIAL_LINKS} />
                </main>
            </div>
        </>
    );
}
