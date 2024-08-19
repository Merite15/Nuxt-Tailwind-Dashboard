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