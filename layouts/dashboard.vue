<template>
    <div class="relative">
        <Preloader />

        <NavigationHeader />

        <div>
            <slot />
        </div>

        <NavigationFooter />
    </div>
</template>

<style scoped></style>