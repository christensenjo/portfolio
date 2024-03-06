<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Section"
    }
});
</script>

<template>
    <div class="flex flex-col gap-2 md:gap-4 mb-36">
        <h1 class="text-4xl xl:text-6xl font-bold">{{ title }}</h1>
        <slot></slot>
    </div>
</template>