import { Head } from '@inertiajs/react';

import { GridBackground } from '@/components/grid-background';
import { HeroSection } from '@/components/hero-section';
import { NavTrigger } from '@/components/nav-trigger';
import { TopRightBlock } from '@/components/top-right-block';

const CELL_SIZE = 123;
const FIRST_ROW_HEIGHT = Math.floor(CELL_SIZE / 2);

export default function Home() {
    return (
        <>
            <Head title="Joel Christensen" />
            <div className="relative min-h-dvh text-foreground">
                <div className="absolute inset-0 -z-20 bg-background" />
                <GridBackground
                    rows={12}
                    extendedRows={[1, 5]}
                    cellSize={CELL_SIZE}
                    firstRowHeight={FIRST_ROW_HEIGHT}
                />

                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
                >
                    Skip to main content
                </a>

                <main id="main-content" className="relative z-10 px-1 pb-24">
                    <div
                        className="mx-auto grid grid-cols-3"
                        style={{
                            width: `${CELL_SIZE * 3}px`,
                            gridTemplateRows: `${FIRST_ROW_HEIGHT}px repeat(11, ${CELL_SIZE}px)`,
                        }}
                    >
                        <NavTrigger
                            className="col-start-1 row-start-1"
                            links={[
                                { href: '#work', label: '{work}' },
                                { href: '#moreaboutme', label: '{more about me}' },
                            ]}
                        />

                        <TopRightBlock
                            className="col-start-3 row-start-1 row-span-2"
                            socialLinks={[
                                { href: 'https://github.com/christensenjo', label: '/github' },
                                { href: 'https://twitter.com/dataSaysJoel', label: '/twitter' },
                                { href: 'https://www.linkedin.com/in/full-stack-joel-christensen/', label: '/linkedin' },
                            ]}
                        />

                        <HeroSection className="col-start-1 row-start-4 row-span-2 col-span-3" />
                    </div>

                    <section id="work" className="scroll-mt-16" aria-label="Work">
                        <span className="sr-only">work</span>
                    </section>
                    <section id="moreaboutme" className="scroll-mt-16" aria-label="More about me">
                        <span className="sr-only">more about me</span>
                    </section>
                </main>
            </div>
        </>
    );
}
