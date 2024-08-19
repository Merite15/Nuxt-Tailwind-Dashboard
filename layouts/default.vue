<template>
    <main
        class="min-h-screen relative text-white font-OpenSans w-full bg-gradient-to-br from-gray-700 via-gray-900 to-black">
        <Preloader />

        <UContainer>
            <NavigationHeader />

            <slot />

            <NavigationFooter />
        </UContainer>
    </main>
</template>