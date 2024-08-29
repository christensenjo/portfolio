<script setup>
const props = defineProps({
  job: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <Glass class="h-full w-fit mx-auto md:w-2/3 lg:w-3/4 xl:w-full">
    <div class="w-full flex flex-col gap-4 py-6 xl:py-12 px-4 lg:px-16 xl:px-20">
      <h1 class="text-3xl xl:text-5xl font-extralight">{{ job.title }}</h1>
      <h2 class="font-bold text-md xl:text-xl">{{ job.period }}</h2>
      <ul class="list-disc text-xl ml-6 font-extralight w-11/12">
        <li v-for="(item, index) in job.details" :key="index" v-html="item"></li>
      </ul>
      <a 
        class="text-center mx-auto italic py-1 px-3 border-solid border-2 rounded-lg cursor-pointer"
        :class="job.letterClass"
        :href="job.letter" 
        download=""
      >
        Letter of Recommendation
      </a>
    </div>
  </Glass>
</template>
