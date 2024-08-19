<script setup>
// import gsap from "gsap";
// import { Draggable } from 'gsap/Draggable';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <UNotifications />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>