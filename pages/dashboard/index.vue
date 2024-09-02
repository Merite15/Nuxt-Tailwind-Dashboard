<script setup lang="ts">
definePageMeta({
    layout: 'dashboard',
    name: 'tableau de bord',
})

useHead({
    htmlAttrs: {
        lang: 'fr',
    },
    title: 'Tableau de bord',
})
</script>

<template>
    <div>
        <div class="py-4">
            <div class="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start">
                <div class="grow">
                    <h1 class="mb-1 text-xl font-bold">Vue d'ensemble</h1>

                    <h2 class="text-sm font-medium text-slate-500">
                        Bienvenue dans votre tableau de bord
                    </h2>
                </div>

                <div
                    class="flex flex-none items-center justify-center gap-2 rounded px-2 sm:justify-end sm:bg-transparent sm:px-0">

                    <UButton color="green" label="Nouveau produit" />
                </div>
            </div>

            <hr class="mt-6" />
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
            <Card v-for="item in cardData" :key="item.title" :provenance="item.provenance" :icon="item.icon"
                :number="item.number" :title="item.title" :color="item.color" />
        </div>
    </div>
</template>

<style scoped></style>