<template>
    <Glass class="mx-auto w-11/12 xl:w-full">
        <template #default>
            <div class="flex flex-col gap-8 mx-4 lg:mx-16 my-8 lg:my-24 z-20">
                <div class="flex flex-col h-full gap-4 xl:mt-12">
                    <h2 class="font-extralight text-4xl md:text-6xl">Joel Christensen</h2>
                    <h1 class="font-bold text-2xl md:text-5xl 2xl:text-6xl">CTO & Full Stack Dev</h1>
                </div>
                <p class="text-lg text-left lg:text-2xl w-full lg:w-full font-extralight">I’m a software engineer who loves to create for the web and mobile. I've recently joined <a href="https://www.linkedin.com/company/voyyance/posts/?feedView=all" target="_blank" class="font-semibold">Voyyance LLC</a> as Chief Technology Officer, where I'm working hard to revolutionize insights into sales performance and pay transparency in the D2D industry. In my free time, I'm still working on several side projects and always learning new technologies.</p>
                <div class="flex flex-col gap-2 w-full justify-center md:justify-start">
                    <BlockButton 
                        class="bg-tailwind w-40 xl:w-52 px-3 py-2 text-white" 
                        link="https://github.com/christensenjo"
                    >
                        GitHub
                    </BlockButton>
                    <a href="/resume.pdf" class="bg-vue w-40 xl:w-52 px-3 py-2 text-white opacity-95 backdrop-blur-sm text-center text-2xl rounded-md font-medium tracking-wide my-auto md:my-0" download="">
                        Resume
                    </a>
                    <BlockButton 
                        class="bg-laravel w-40 xl:w-52 px-3 py-2 text-white"
                        link="#contact"
                    >
                        Contact Me
                    </BlockButton>
                </div>
            </div>
        </template>
        <template #behind>
            <img src="~/assets/img/hero_blocks.svg" class="hidden md:block w-fit h-[110%] absolute top-0 right-6" alt="Hero Blocks" />
        </template>
    </Glass>
</template>