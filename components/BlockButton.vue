<script setup>
const props = defineProps({
    w: {
        type: String,
        default: "fit"
    },
    link: {
        type: String,
        default: "#"
    },
    color: {
        type: String,
        default: "tailwind"
    }
});

const dynamicClasses = computed(() => {
    return {
        "bg-tailwind": props.color === "tailwind",
        "bg-primary": props.color === "primary",
        "bg-vue": props.color === "vue",
        "bg-laravel": props.color === "laravel",
    }
});

</script>

<template>
    <NuxtLink :to="link" class="">
        <div 
            class="opacity-95 backdrop-blur-sm text-white text-2xl py-2 rounded-md text-center font-medium tracking-wide"
            :class="dynamicClasses"
        >
            <slot></slot>
        </div>
    </NuxtLink>
</template>