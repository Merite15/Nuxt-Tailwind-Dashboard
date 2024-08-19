<script setup lang='ts'>
interface LinkType {
    link: string
    title: string
}

defineProps<LinkType>()
</script>

<template>
    <li class='px-3 border-gray-300 max-lg:border-b max-lg:py-3'>
        <router-link active-class="text-[#007bff]" class='hover:text-[#007bff]  block font-semibold text-[15px]'
            :to="link">{{ title
            }}</router-link>
    </li>
</template>

<style lang="css" scoped></style>