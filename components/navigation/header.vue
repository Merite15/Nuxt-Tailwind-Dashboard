<script setup lang='ts'>

</script>

<template>
    <div class="flex justify-between items-center py-8">
        <NavigationLogo />

        <div class="flex justify-center items-center space-x-10">
            <NavigationLinks />

            <ClientOnly>
                <NetworkStatus />
            </ClientOnly>

            <NavigationWork class="" />
        </div>
    </div>
</template>

<style lang="css" scoped></style>