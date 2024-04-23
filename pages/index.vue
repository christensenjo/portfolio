<script setup>
const currentJob = ref(0);

const jobTitle = computed(() => {
    switch (currentJob.value) {
        case 0:
            return "Full Stack Software Engineer";
        case 1:
            return "Cloud/Software Intern";
        case 2:
            return "Backend Software Intern";
        default:
            return "Full Stack Software Engineer";
    }
});

const jobPeriod = computed(() => {
    switch (currentJob.value) {
        case 0:
            return "Feb 2023 - Present";
        case 1:
            return "Summer 2022";
        case 2:
            return "Summer 2021";
        default:
            return "";
    }
});

const jobDetails = computed(() => {
    switch (currentJob.value) {
        case 0:
            return [
                "Lead development as the first full-time employee besides the founder.",
                "Collaborate closely with clients and facilitate communication company-wide.",
                "Project Manager and Lead Developer for <a href='https://apps.apple.com/us/app/wcr-utah/id6449136010' class='font-bold underline text-black'>WCR Mobile App</a>.",
                "Build, ship, and maintain several applications using frameworks such as <span class='font-bold'>Laravel, Vue, and Ionic.<span>",
                "Develop in-house npm and composer packages.",
            ];
        case 1:
            return [
                "Developed an Azure function app (lambda) for graph-based ingestion of streaming data.",
                "Full participant in <span class='font-bold'>software development lifecycle</span> in a team of senior engineers, taking on the same user stories.",
                "Learned and used <span class='font-bold'>C#, Azure DevOps</span> with YAML for CI/CD, and wrote complex <span class='font-bold'>SQL scripts</span>.",
                "Stayed engaged and pushed to meet deadlines while working remotely."
            ];
        case 2:
            return [
                "Worked in a team practicing Agile techniques to develop <span class='font-bold'>AWS</span> hosted <span class='font-bold'>Java Spring Boot</span> web apps.",
                "Created an in-house command line tool to automate csv file processing and database insertion for a team tasked with recording all 'Places' throughout the history of the world for family history purposes.",
            ];
        default:
            return [];
    }
});
</script>

<template>
    <!-- Container -->
    <div class="w-full h-2/3 flex flex-col justify-start lg:justify-start items-center mt-4 xl:mt-12 gap-8 xl:gap-24">
        <Hero id="hero" />
        <Section
            id="projects"
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
            id="about-me"
            class="px-4 xl:px-12 w-full max-w-screen-xl mx-auto"
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
        <Section
            title="Experience"
            id="experience"
            class="px-4 xl:px-12 w-full max-w-screen-xl mx-auto pb-96"
        >
            <div class="h-full mt-6 flex flex-col md:flex-row gap-2 md:gap-0">
                <div class="flex flex-row md:flex-1">
                    <div class="h-80 w-1 rounded-full bg-black hidden md:flex mr-4">
                        <!-- Vertical slider -->
                    </div>
                    <div class="flex flex-row md:flex-col justify-start gap-8">
                        <BlockButton 
                            link="https://yourmaidenvoyage.com/"
                            class="w-fit md:w-40 xl:w-80 px-2 py-auto md:py-2 text-black font-medium transition-colors text-sm md:text-2xl "
                            :class="currentJob === 0 ? 'bg-tailwind' : 'bg-transparent'"
                            @mouseover="currentJob = 0"
                        >
                            Maiden Voyage Software
                        </BlockButton>
                        <BlockButton
                            link="https://www.healthcatalyst.com/"
                            class="w-fit md:w-40 xl:w-80 px-2 py-2 text-black font-medium transition-colors text-sm md:text-2xl"
                            :class="currentJob === 1 ? 'bg-vue' : 'bg-transparent'"
                            @mouseover="currentJob = 1"
                        >
                            Health Catalyst
                        </BlockButton>
                        <BlockButton
                            link="https://www.familysearch.org/en/united-states/"
                            class="w-fit md:w-40 xl:w-80 px-2 py-2 text-black font-medium transition-colors text-sm md:text-2xl"
                            :class="currentJob === 2 ? 'bg-laravel' : 'bg-transparent'"
                            @mouseover="currentJob = 2"
                        >
                            FamilySearch
                        </BlockButton>
                    </div>
                </div>
                <Glass class="h-full w-fit mx-auto xl:w-8/12">
                    <div class="w-full flex flex-col gap-4 py-6 xl:py-12 px-4 xl:px-20">
                        <h1 class="text-3xl xl:text-5xl font-extralight">{{ jobTitle }}</h1>
                        <h2 class="font-bold text-md xl:text-xl">{{ jobPeriod }}</h2>
                        <ul class="list-disc text-xl ml-6 font-extralight w-11/12">
                            <li v-for="item in jobDetails" v-html="item"></li>
                        </ul>
                    </div>
                </Glass>
            </div>
            <Glass>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col gap-1 my-4 mx-8">
                        <h1 class="font-extralight text-3xl md:text-6xl">Utah State University</h1>
                        <h2 class="font-medium text-2xl md:text-5xl">Bachelor of Science</h2>
                        <p class="font-bold text-md xl:text-xl">Jan 2019 - Dec 2022</p>
                    </div>
                    <div class="w-fit mx-auto my-auto font-extralight text-xl md:text-2xl">
                        <ul class="w-fit list-disc">
                            <li>Computer Science Major, Economics Minor</li>
                            <li>Data Science Club Secretary</li>
                        </ul>
                    </div>
                </div>
            </Glass>
        </Section>
        <!-- <img src="~/assets/img/green_block.png" class="w-72 h-72 absolute top-36 start-2/3 rotate-[7deg]" alt="Green Block" /> -->
    </div>
</template>