<template>
  <div class="bg-[#F1F9FE] mx-0 px-0 overflow-y-hidden">
    <div class="absolute z-0 bg-[#f1f9fe] w-full h-full overflow-hidden">
      <section class="h-[33vh] w-screen bg-[radial-gradient(ellipse_at_top_left,_#F23B2F_0%,#f1f9fe_70%)]"></section>
      <section class="absolute top-1/4 -right-1/4 h-[90vh] w-[60vw] bg-[radial-gradient(ellipse_at_center,_#7CB79D_0%,#f1f9fe_70%)]"></section>
      <section class="absolute bottom-0 -left-1/4 h-[33vh] w-2/3 bg-[radial-gradient(ellipse_at_bottom_left,_#36B7F0_0%,#f1f9fe_70%)]"></section>
    </div>
    <div class="absolute z-1 w-full h-full">
      <NavBar
        title="Joel Christensen"
      />
      <NuxtPage />
    </div>
  </div>
</template>
