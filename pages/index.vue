<template>
    <!-- Container -->
    <div class="w-full h-2/3 flex flex-col justify-start lg:justify-start items-center mt-12">
        <Glass>
            <div class="flex flex-col gap-8 mx-16 my-24">
                <div class="flex flex-col h-full gap-4 mt-12">
                <h2 class="font-extralight text-4xl md:text-6xl">Joel Christensen</h2>
                <h1 class="font-bold text-2xl md:text-5xl 2xl:text-6xl">Full Stack Software Engineer</h1>
                </div>
                <p class="text-2xl w-3/5 font-extralight">I’m a software engineer who loves to create for the web (and sometimes mobile). I’m currently helping small businesses get their start at <span class="font-bold">Maiden Voyage Software.</span></p>
                <div class="flex flex-col gap-2">
                    <BlockButton w="xl" color="tailwind">Resume</BlockButton>
                    <BlockButton w="xl" color="vue">Contact Me</BlockButton>
                    <BlockButton w="xl" color="laravel">Projects</BlockButton>
                </div>
            </div>
        </Glass>
        <img src="~/assets/img/green_block.png" class="w-72 h-72 absolute top-36 start-2/3 rotate-[7deg]" alt="Green Block" />
        <!-- Hero -->
        <!-- <div class="w-full h-screen flex flex-col justify-center items-around max-w-screen-xl mx-8 xl:mx-auto">
            
        </div> -->
    </div>
</template>