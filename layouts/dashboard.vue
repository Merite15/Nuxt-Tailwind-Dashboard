<script setup lang="ts">
const confirm = ref(null)

provide('confirm', confirm)
</script>

<template>
    <div class="flex h-screen  fixed w-full transition duration-200">
        <Preloader />

        <NavigationSidebar />

        <main
            class="flex flex-1 overflow-y-scroll flex-col lg:rounded-r-[20px] border m-2 rounded-none bg-[#ECF1F4] py-4 px-6 transition-colors ease-in-out duration-200 delay-75">

            <NavigationNavbar />

            <div class="py-4">
                <slot />
            </div>
        </main>
    </div>
</template>