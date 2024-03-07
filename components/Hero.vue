<template>
    <Glass class="mx-auto w-11/12 xl:w-full">
        <template #default>
            <div class="flex flex-col gap-8 mx-4 lg:mx-16 my-8 lg:my-24 z-20">
                <div class="flex flex-col h-full gap-4 xl:mt-12">
                    <h2 class="font-extralight text-4xl md:text-6xl">Joel Christensen</h2>
                    <h1 class="font-bold text-2xl md:text-5xl 2xl:text-6xl">Full Stack Software Engineer</h1>
                </div>
                <p class="text-lg text-left lg:text-2xl w-full lg:w-3/5 font-extralight">I’m a software engineer who loves to create for the web (and sometimes mobile). I’m currently helping small businesses get their start at <span class="font-bold">Maiden Voyage Software.</span></p>
                <div class="flex flex-col gap-2 w-full justify-center md:justify-start">
                    <BlockButton class="bg-tailwind w-40 xl:w-52 px-3 py-2">GitHub</BlockButton>
                    <BlockButton class="bg-vue w-40 xl:w-52 px-3 py-2">Resume</BlockButton>
                    <BlockButton class="bg-laravel w-40 xl:w-52 px-3 py-2">Contact Me</BlockButton>
                </div>
            </div>
        </template>
        <template #behind>
            <img src="~/assets/img/hero_blocks.svg" class="hidden md:block w-fit h-[110%] absolute top-0 right-6" alt="Hero Blocks" />
        </template>
    </Glass>
</template>