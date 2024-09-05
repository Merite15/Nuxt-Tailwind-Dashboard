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
        <NuxtLink active-class=" bg-[#DDE8EA] rounded-xl text-[#18484A]"
            class='px-2 py-3 gap-x-4 flex items-center hover:bg-[#DDE8EA] hover:rounded-xl transition-all hover:text-[#18484A] font-medium'
            :to="link">
            <UIcon :name="icon" />

            <span>{{ title }}</span>
        </NuxtLink>
    </li>
</template>

<style lang="css" scoped></style>