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
        "w-full": props.w === "full",
        "w-auto": props.w === "fit",
        "w-1/2": props.w === "1/2",
        "w-1/3": props.w === "1/3",
        "w-2/3": props.w === "2/3",
        "w-1/4": props.w === "1/4",
        "w-3/4": props.w === "3/4",
        "w-16" : props.w === "sm",
        "w-28" : props.w === "md",
        "w-40" : props.w === "lg",
        "w-52" : props.w === "xl",
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