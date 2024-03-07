<script setup>
const props = defineProps({
    link: {
        type: String,
        default: "#"
    },
});

</script>

<template>
    <NuxtLink 
        :to="link" 
        class="opacity-95 backdrop-blur-sm text-white text-2xl py-2 rounded-md text-center font-medium tracking-wide"
    >
        <slot></slot>
    </NuxtLink>
</template>