<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Project"
    },
    link: {
        type: String,
        default: ""
    },
    img: {
        type: String,
        default: "blocks"
    },
    pills: {
        type: Array,
        default: () => []
    },
    inDevelopment: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <NuxtLink :to="link" class="w-full md:max-w-screen-sm">
        <Glass class="mt-4 md:my-8 h-fit lg:h-96">
            <div class="flex flex-col p-4 items-between h-full">
                <div class="h-full">
                    <div class="flex flex-row justify-between w-full mb-6">
                        <img v-if="img === 'grimoire'" src="~/assets/img/grimoire_logo.svg" class="w-20 h-20" :alt="title + ' logo'" />
                        <img v-else-if="img === 'spotify'" src="~/assets/img/spotify_logo.svg" class="w-20 h-20" :alt="title + ' logo'" />
                        <img v-else-if="img === 'nba'" src="~/assets/img/nba_logo.svg" class="w-20 h-20" :alt="title + ' logo'" />
                        <img v-else src="~/assets/img/hero_blocks.svg" class="w-20 h-20" :alt="title + ' logo'" />
                        <div class="hidden sm:flex flex-col mb-16 md:hidden items-start">
                            <h1 class="text-2xl font-bold">{{ title }}</h1>
                            <p v-if="inDevelopment" class="text-lg text-left font-extralight">*In development*</p>
                        </div>
                        <img src="~/assets/img/link.svg" class="w-12 h-12" :alt="'Visit' + title " />
                    </div>
                    <div class="flex flex-col mb-16 sm:hidden md:flex">
                        <h1 class="text-2xl font-bold">{{ title }}</h1>
                        <p v-if="inDevelopment" class="text-lg font-extralight">*In development*</p>
                    </div>
                </div>
                <div v-if="pills.length > 0" class="flex flex-row flex-wrap gap-2 items-end">
                    <Pill 
                        v-for="pill in pills" 
                        :color="pill.color"
                    >
                        {{ pill.text }}
                    </Pill>
                </div>
            </div>
        </Glass>
    </NuxtLink>
</template>