<template>
    <Glass class="mx-4 xl:m-0 w-fit xl:w-full">
        <template #default>
            <div class="flex flex-col gap-8 mx-4 lg:mx-16 my-8 lg:my-24 z-20">
                <div class="flex flex-col h-full gap-4 xl:mt-12">
                    <h2 class="font-extralight text-4xl md:text-6xl">Joel Christensen</h2>
                    <h1 class="font-bold text-2xl md:text-5xl 2xl:text-6xl">Full Stack Software Engineer</h1>
                </div>
                <p class="text-lg text-left lg:text-2xl w-full lg:w-3/5 font-extralight">I’m a software engineer who loves to create for the web (and sometimes mobile). I’m currently helping small businesses get their start at <span class="font-bold">Maiden Voyage Software.</span></p>
                <div class="flex flex-col gap-2 justify-center md:justify-start">
                    <BlockButton w="xl" color="tailwind">Resume</BlockButton>
                    <BlockButton w="xl" color="vue">Contact Me</BlockButton>
                    <BlockButton w="xl" color="laravel">Projects</BlockButton>
                </div>
            </div>
        </template>
        <template #behind>
            <img src="~/assets/img/hero_blocks.svg" class="hidden md:block w-fit h-[110%] absolute top-0 right-6" alt="Hero Blocks" />
        </template>
    </Glass>
</template>