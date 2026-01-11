// import { AppHeader } from '@/components/app-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

interface AppLandingLayoutProps extends PropsWithChildren {
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLandingLayout({ children }: AppLandingLayoutProps) {
    return (
        <div className="bg-[#F1F9FE] mx-0 px-0 overflow-y-auto">
            <div className="fixed z-0 bg-[#f1f9fe] w-full h-full overflow-hidden">
                {/* <section className="h-[33vh] w-screen bg-radial-[at_50%_75%] from-[#F23B2F] to-[#f1f9fe] backdrop-blur-sm mix-blend-darken bg-clip-content">
                </section> */}

                <section className="h-[60vh] w-screen bg-[radial-gradient(ellipse_at_top_left,_#F23B2F_0%,#f1f9fe_70%)] opacity-70 backdrop-blur-sm mix-blend-darken"></section>
                
                <section className="absolute top-[100px] -right-1/3 h-[70vh] w-[90vw] lg:h-screen bg-[radial-gradient(ellipse_at_center,_#7CB79D_0%,#f1f9fe_72%)] backdrop-blur-sm mix-blend-darken"></section>
                <section className="absolute bottom-0 h-[60vh] w-screen bg-[radial-gradient(ellipse_at_bottom_left,_#36B7F0_0%,#f1f9fe_70%)] backdrop-blur-sm mix-blend-darken"></section>
            </div>
            <div className="absolute z-10 w-full h-screen scroll-smooth">
                {/* <AppHeader breadcrumbs={breadcrumbs} /> */}
                {children}
            </div>
        </div>
    );
}
