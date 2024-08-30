<script setup>
import { ref, computed } from 'vue';

const currentJob = ref(0);

const jobs = [
  {
    id: 0,
    company: "Maiden Voyage",
    title: "Full Stack Software Engineer",
    period: "Feb 2023 - May 2024",
    link: "https://yourmaidenvoyage.com/",
    class: "bg-tailwind",
    letter: "/Joel_MV_Letter_of_Recommendation.pdf",
    letterClass: "border-tailwind hover:bg-tailwind",
    details: [
      "Lead development as the first full-time employee besides the founder.",
      "Collaborate closely with clients and facilitate communication company-wide.",
      "Project Manager and Lead Developer for <a href='https://apps.apple.com/us/app/wcr-utah/id6449136010' class='font-bold underline text-black'>WCR Mobile App</a>.",
      "Build, ship, and maintain several applications using frameworks such as <span class='font-bold'>Laravel, Vue, and Ionic.<span>",
      "Develop in-house npm and composer packages.",
    ]
  },
  {
    id: 1,
    company: "HealthCatalyst",
    title: "Cloud/Software Intern",
    period: "Summer 2022",
    link: "https://www.healthcatalyst.com/",
    class: "bg-vue",
    letter: "/Joel_HC_Letter_of_Recommendation.pdf",
    letterClass: "border-vue hover:bg-vue",
    details: [
      "Developed an Azure function app (lambda) for graph-based ingestion of streaming data.",
      "Full participant in <span class='font-bold'>software development lifecycle</span> in a team of senior engineers, taking on the same user stories.",
      "Learned and used <span class='font-bold'>C#, Azure DevOps</span> with YAML for CI/CD, and wrote complex <span class='font-bold'>SQL scripts</span>.",
      "Stayed engaged and pushed to meet deadlines while working remotely."
    ]
  },
  {
    id: 2,
    company: "FamilySearch",
    title: "Backend Software Intern",
    period: "Summer 2021",
    link: "https://www.familysearch.org/en/united-states/",
    class: "bg-laravel",
    letter: "/Joel_FS_Letter_of_Recommendation.pdf",
    letterClass: "border-laravel hover:bg-laravel",
    details: [
      "Worked in a team practicing Agile techniques to develop <span class='font-bold'>AWS</span> hosted <span class='font-bold'>Java Spring Boot</span> web apps.",
      "Created an in-house command line tool to automate csv file processing and database insertion for a team tasked with recording all 'Places' throughout the history of the world for family history purposes.",
    ]
  }
];

const currentJobData = computed(() => jobs[currentJob.value]);

const changeJob = (direction) => {
  currentJob.value = (currentJob.value + direction + jobs.length) % jobs.length;
};
</script>

<template>
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
          link="https://github.com/christensenjo/spotify"
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
          <img src="~/assets/img/capital_cutout.png" class="w-72 mx-auto sm:w-fit h-96" />
          
          <div class="m-6 text-center text-xl md:text-2xl font-light h-fit flex justify-center items-center md:w-2/5 md:mx-auto">
            <p class="h-full my-auto">
              Hey there! I'm <span class="font-bold inline">Joel</span>. Since being drawn to programming as a freshman in high school, I've found joy in solving challenges and seeing my imagination realized in final products. I've worked in teams at large corporations, collaborated at a small startup, and am always engaged in my own side projects. My favorite endeavors include <span class="font-bold inline">full-stack</span> web development and <span class="font-bold inline">data visualization.</span>
            </p>
          </div>
        </div>
      </Glass>
    </Section>
    <Section
      title="Experience"
      id="experience"
      class="px-4 xl:px-12 w-full max-w-screen-xl mx-auto"
    >
      <div class="h-full mt-6 flex flex-col md:flex-row gap-2 md:gap-0 w-full">
        <div class="flex flex-row w-full md:flex-1">
          <!-- Desktop view -->
          <div class="hidden md:flex flex-row gap-4 mr-4">
            <!-- Vertical line -->
            <div class="h-80 w-1 rounded-full bg-black hidden md:block"></div>
            
            <!-- Job titles -->
            <div class="flex flex-col gap-8">
              <BlockButton
                v-for="job in jobs"
                :key="job.id"
                :link="job.link"
                :class="[
                  'w-fit md:w-40 xl:w-80 px-2 py-2 text-black font-medium transition-colors text-sm md:text-2xl',
                  currentJob === job.id ? job.class : 'bg-transparent'
                ]"
                align="left"
                @mouseover="currentJob = job.id"
              >
                {{ job.company }}
              </BlockButton>
            </div>
          </div>
          
          <!-- Mobile view -->
          <div class="flex flex-row md:hidden w-full text-2xl mx-auto justify-center items-center">
            <img src="~/assets/img/left_arrow.svg" class="w-10 flex-shrink-0 cursor-pointer" @click="changeJob(-1)" alt="See previous work experience" />
            <div class="w-64 h-12 flex items-center justify-center">
              <BlockButton
                :link="currentJobData.link"
                :class="['w-full h-full px-2 py-auto text-black font-medium transition-all duration-300 ease-in-out', currentJobData.class]"
              >
                {{ currentJobData.company }}
              </BlockButton>
            </div>
            <img src="~/assets/img/right_arrow.svg" class="w-10 flex-shrink-0 cursor-pointer" @click="changeJob(1)" alt="See next work experience" />
          </div>
        </div>
        
        <JobDisplay :job="currentJobData" />
      </div>      
    </Section>
    <Section
        title="Education"
        id="education"
        class="px-4 xl:px-12 w-full max-w-screen-xl mx-auto"
    >
      <Glass class="w-full mt-6">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="flex flex-col gap-1 my-4 mx-8">
            <h1 class="font-extralight text-3xl md:text-6xl">Utah State University</h1>
            <h2 class="font-medium text-2xl md:text-5xl">Bachelor of Science</h2>
            <p class="font-bold text-md xl:text-xl">Jan 2019 - Dec 2022</p>
          </div>
          <div class="w-fit ml-8 md:mx-auto my-auto font-extralight text-xl md:text-2xl mb-8 md:my-auto">
            <ul class="w-fit list-disc">
              <li class="italic">Magna Cum Laude</li>
              <li>Computer Science Major</li>
              <li>Economics Minor</li>
              <li>Data Science Club Leadership 2022</li>
            </ul>
          </div>
        </div>
      </Glass>
    </Section>
    <Section
      title="Contact Me"
      id="contact"
      class="px-4 xl:px-12 w-full max-w-screen-xl mx-auto pb-52 md:pb-96"
    >
      <Glass class="w-full">
        <div class="flex flex-col w-full p-4 pl-8">
          <div class="flex flex-row justify-left items-center md:gap-7">
            <img src="~/assets/img/email.svg" alt="Email icon" class="w-16"/>
            <p class="font-extralight text-xl md:text-4xl ml-3 md:ml-0">christensenjo14@gmail.com</p>
          </div>
          <div class="flex flex-row justify-left items-center md:gap-4">
            <img src="~/assets/img/phone.svg" alt="Phone icon" class="w-16 ml-3"/>
            <p class="font-extralight text-2xl md:text-4xl">(208)-749-7563</p>
          </div>
        </div>
      </Glass>
    </Section>
    <!-- <img src="~/assets/img/green_block.png" class="w-72 h-72 absolute top-36 start-2/3 rotate-[7deg]" alt="Green Block" /> -->
  </div>
</template>