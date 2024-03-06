<template>
    <!-- Container -->
    <div class="w-full h-2/3 flex flex-col justify-start lg:justify-start items-center mt-4 xl:mt-12 gap-8 xl:gap-36">
        <Hero />
        <Section 
            title="Projects" 
            class="px-4 xl:px-12 w-full max-w-screen-xl mx-auto"
        >
            <div class="flex flex-col md:flex-row md:gap-8">
                <ProjectCard 
                    title="Grimoire: Fantasy Worldbuilding Tool"
                    link="https://grimoire-five.vercel.app"
                    img="grimoire"
                    :pills="[
                        { text: 'Nuxt 3', color: 'vue' },
                        { text: 'PostgreSQL', color: 'laravel' },
                        { text: 'Supabase', color: 'laravel' },
                        { text: 'Tailwind CSS', color: 'tailwind' }
                    ]"
                />
                <ProjectCard 
                    title="Spotify Web API App"
                    link="https://spotify-five-kohl.vercel.app/"
                    img="spotify"
                    :pills="[
                        { text: 'Vue 3', color: 'vue' },
                        { text: 'REST API', color: 'laravel' },
                        { text: 'PKCE Auth', color: 'laravel' },
                        { text: 'TailwindCSS', color: 'tailwind' }
                    ]"
                />
                <ProjectCard 
                    title="NBA Shot Data Visualizer"
                    link="https://github.com/christensenjo/NBA-Shot-Data-Visualizer"
                    img="nba"
                    :pills="[
                        { text: 'D3.js', color: 'vue' },
                        { text: 'Django', color: 'laravel' },
                        { text: 'Bootstrap', color: 'tailwind' }
                    ]"
                />
            </div>
        </Section>
        <!-- <img src="~/assets/img/green_block.png" class="w-72 h-72 absolute top-36 start-2/3 rotate-[7deg]" alt="Green Block" /> -->
    </div>
</template>