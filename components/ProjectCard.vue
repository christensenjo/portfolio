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
    <Glass class="w-full md:max-w-screen-sm mt-4 md:my-8">
        <div class="flex flex-col p-4 items-between">
            <div class="flex flex-row justify-between w-full mb-6">
                <img v-if="img === 'grimoire'" src="~/assets/img/grimoire_logo.svg" class="w-20 h-20" :alt="title + ' logo'" />
                <img v-else-if="img === 'spotify'" src="~/assets/img/spotify_logo.svg" class="w-20 h-20" :alt="title + ' logo'" />
                <img v-else-if="img === 'nba'" src="~/assets/img/nba_logo.svg" class="w-20 h-20" :alt="title + ' logo'" />
                <img v-else src="~/assets/img/hero_blocks.svg" class="w-20 h-20" :alt="title + ' logo'" />
                <NuxtLink :to="link">
                    <img src="~/assets/img/link.svg" class="w-12 h-12" :alt="'Visit' + title " />
                </NuxtLink>
            </div>
            <div class="flex flex-col mb-16">
                <h1 class="text-2xl font-bold">{{ title }}</h1>
                <p v-if="inDevelopment" class="text-lg font-extralight">*In development*</p>
            </div>
            <div v-if="pills.length > 0" class="flex flex-row flex-wrap gap-2">
                <Pill 
                    v-for="pill in pills" 
                    :color="pill.color"
                >
                    {{ pill.text }}
                </Pill>
            </div>
        </div>
    </Glass>
</template>