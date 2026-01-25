import { Head } from '@inertiajs/react';

import { GridBackground } from '@/components/grid-background';
import { HeroSection } from '@/components/hero-section';
import { NavTrigger } from '@/components/nav-trigger';
import { TopRightBlock } from '@/components/top-right-block';

export default function Home() {
    return (
        <>
            <Head title="" />
            <div className="relative min-h-screen text-foreground">
                <div className="absolute inset-0 -z-20 bg-background" />
                <GridBackground rows={12} extendedRows={[2, 6]} />

                <div className="relative z-10 px-1 pb-24">
                    <div
                        className="mx-auto grid grid-cols-3"
                        style={{
                            width: '381px',
                            gridAutoRows: '127px',
                            marginTop: '-63.5px',
                        }}
                    >
                        <NavTrigger
                            className="col-start-1 row-start-1"
                            links={[
                                { href: '#work', label: '{work}' },
                                { href: '#moreaboutme', label: '{moreaboutme}' },
                            ]}
                        />

                        <TopRightBlock
                            className="col-start-3 row-start-1 row-span-2"
                            socialLinks={[
                                { href: '/github', label: '/github' },
                                { href: '/twitter', label: '/twitter' },
                                { href: '/linkedin', label: '/linkedin' },
                            ]}
                        />

                        <HeroSection className="col-start-1 row-start-4 row-span-2 col-span-3" />
                    </div>

                    <span id="work" className="sr-only">
                        work
                    </span>
                    <span id="moreaboutme" className="sr-only">
                        more about me
                    </span>
                </div>
            </div>
        </>
    );
}
