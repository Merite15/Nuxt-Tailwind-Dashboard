<script setup lang="ts">
interface BannerType {
    title: string
    description: string
}

defineProps<BannerType>()
</script>

<template>
    <div class="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
        <div class="absolute inset-0">
            <img src="@/assets/img/card.webp" alt="Background Image" class="object-cover w-full h-full opacity-50" />
        </div>

        <div class="relative z-10 max-w-screen-xl px-8 mx-auto text-center text-white">
            <h1 class="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">{{ title }}</h1>

            <p class="mb-12 text-lg md:text-xl">{{ description }}</p>

            <!-- <button type="button"
                class="px-6 py-3 text-base tracking-wide text-white transition duration-300 ease-in-out bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl">Get
                Started</button> -->
        </div>
    </div>
</template>

<style lang="css" scoped></style>