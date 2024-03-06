<script setup>
const props = defineProps({
    color: {
        type: String,
        default: "base"
    },
});

const bgColor = computed(() => {
    return {
        "bg-tailwind": props.color === "tailwind",
        "bg-base": props.color === "base" || props.color === "primary",
        "bg-vue": props.color === "vue",
        "bg-laravel": props.color === "laravel",
    }
});
</script>

<template>
    <p class="rounded-md py-2 px-4 font-bold" :class="bgColor">
        <slot></slot>
    </p>
</template>