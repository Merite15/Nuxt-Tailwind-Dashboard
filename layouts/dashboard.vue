<script setup lang="ts">
const confirm = ref(null)

provide('confirm', confirm)
</script>

<template>
    <div class="flex h-screen tracking-wider fixed w-full transition duration-200">
        <Preloader />

        <main
            class="flex flex-1 overflow-y-scroll flex-col bg-gray-100 shadow-sm  border py-4 px-6 transition-colors ease-in-out duration-200 delay-75">

            <NavigationNavbar />

            <div class="py-4">
                <slot />
            </div>
        </main>
    </div>
</template>