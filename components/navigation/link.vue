<script setup lang='ts'>
interface LinkType {
    link: string
    title: string
    icon: string
}

defineProps<LinkType>()
</script>

<template>
    <li class='px-3'>
        <NuxtLink active-class=" bg-blue-500 rounded-xl text-white"
            class='p-2 gap-x-4 flex items-center hover:bg-blue-500 hover:rounded-xl transition-all hover:text-white font-semibold text-[15px] '
            :to="link">
            <UIcon :name="icon" />

            {{ title }}
        </NuxtLink>
    </li>
</template>

<style lang="css" scoped></style>