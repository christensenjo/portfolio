<script setup>
const props = defineProps({
    link: {
        type: String,
        default: "#"
    },
    align: {
        type: String,
        default: "center"
    },
});

const conditionalClass = computed(() => {
    return `text-${props.align}`;
});

</script>

<template>
    <NuxtLink 
        :to="link"
        class="opacity-95 backdrop-blur-sm text-black text-2xl py-2 rounded-md font-medium tracking-wide my-auto md:my-0"
        :class="conditionalClass"
    >
        <slot></slot>
    </NuxtLink>
</template>