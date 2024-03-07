<script setup>

</script>

<template>
    <div class="relative mx-auto xl:w-full max-w-screen-xl z-10 rounded-md">
        <!-- Behind -->
        <div class="absolute w-full h-full top-0 left-0 z-0">
            <slot name="behind"></slot>
        </div>
        <!-- Glass background -->
        <div class="bg-primary opacity-50 w-full h-full absolute rounded-md z-10"></div>
        <!-- Default -->
        <div class="relative z-20 h-full">
            <slot class="h-full"></slot>
        </div>
    </div>
</template>



<style scoped>

</style>