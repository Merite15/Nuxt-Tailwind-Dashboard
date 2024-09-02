<script setup lang='ts'>
interface LinkType {
    link: string
    title: string
}

defineProps<LinkType>()
</script>

<template>
    <NuxtLink active-class=" bg-black rounded-3xl text-white"
        class='p-3 gap-x-4 flex items-center hover:bg-black cursor-pointer hover:rounded-3xl transition-all ease-in-out duration-200 delay-75 hover:text-white font-medium text-[15px] dark:text-white'
        :to="link">
        {{ title }}
    </NuxtLink>
</template>

<style lang="css" scoped></style>