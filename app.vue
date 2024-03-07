<script setup>
  useHead({
  title: 'Joel Christensen',
  meta: [
    { name: 'description', content: 'Portfolio for Joel Christensen, Full-Stack Software Engineer.' }
  ],
})
</script>

<template>
  <div class="bg-[#F1F9FE] mx-0 px-0 overflow-y-auto">
    <div class="fixed z-0 bg-[#f1f9fe] w-full h-full overflow-hidden">
      <section class="h-[33vh] w-screen bg-[radial-gradient(ellipse_at_top_left,_#F23B2F_0%,#f1f9fe_70%)] opacity-40 backdrop-blur-sm mix-blend-darken"></section>
      <section class="absolute top-[100px] -right-1/3 h-[70vh] w-[90vw] lg:h-screen bg-[radial-gradient(ellipse_at_center,_#7CB79D_0%,#f1f9fe_72%)] backdrop-blur-sm mix-blend-darken"></section>
      <section class="absolute bottom-0 h-[33vh] w-screen bg-[radial-gradient(ellipse_at_bottom_left,_#36B7F0_0%,#f1f9fe_70%)] backdrop-blur-sm mix-blend-darken"></section>
    </div>
    <div class="absolute z-10 w-full h-screen">
      <NavBar
        title=""
      />
      <NuxtPage class="h-full"/>
      <!-- <img src="~/assets/img/footer_blocks.png" class="w-full max-w-screen-xl mx-auto" alt="Footer Blocks" /> -->
    </div>
  </div>
</template>
