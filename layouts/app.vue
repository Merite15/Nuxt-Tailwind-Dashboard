<script setup lang="ts">
import NavigationFooter from '@/components/navigation/footer.vue';
import NavigationHeader from '@/components/navigation/header.vue';
import Preloader from '@/components/preloader.vue';
import ToTop from '@/components/ToTop.vue';
</script>

<template>
    <div class="relative">
        <Preloader />

        <NavigationHeader />

        <div>
            <slot />
        </div>

        <ToTop />

        <NavigationFooter />
    </div>
</template>

<style scoped></style>