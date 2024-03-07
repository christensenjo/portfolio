<template>
    <!-- Container -->
    <div class="w-full h-2/3 flex flex-col justify-start lg:justify-start items-center mt-4 xl:mt-12 gap-8 xl:gap-24">
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
                    :inDevelopment="true"
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
        <Section
            title="About Me" 
            class="px-4 xl:px-12 w-full max-w-screen-xl mx-auto pb-96"
        >
            <Glass>
                <div class="flex flex-col-reverse md:flex-row justify-between md:justify-around items-center">
                    <img src="~/assets/img/capital_cutout.png" class="w-fit mx-auto md:w-fit h-96" />
                    
                    <div class="m-6 text-center text-xl md:text-2xl font-light h-fit flex justify-center items-center md:w-2/5 md:mx-auto">
                        <p class="h-full my-auto">
                            Hey there! I’m <span class="font-bold inline">Joel</span>. Since being drawn to programming as a freshman in high school, I’ve found joy in solving challenges and seeing my imagination realized in final products. I’ve worked in teams at large corporations, collaborated at a small startup, and am always engaged in my own side projects. My favorite endeavors include <span class="font-bold inline">full-stack</span> web development and <span class="font-bold inline">data visualization.</span>
                        </p>
                    </div>
                </div>
            </Glass>
        </Section>
        <!-- <img src="~/assets/img/green_block.png" class="w-72 h-72 absolute top-36 start-2/3 rotate-[7deg]" alt="Green Block" /> -->
    </div>
</template>