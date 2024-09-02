<script setup lang='ts'>
definePageMeta({
    name: 'Liste des localités',
    layout: 'dashboard'
})

useHead({
    htmlAttrs: {
        lang: 'fr',
    },
    title: 'Liste des localités',
})

const people = [{
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
}, {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin'
}, {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    email: 'tom.cook@example.com',
    role: 'Member'
}, {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    email: 'whitney.francis@example.com',
    role: 'Admin'
}, {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    email: 'leonard.krasner@example.com',
    role: 'Owner'
}, {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'floyd.miles@example.com',
    role: 'Member'
}]


const q = ref('')

const page = ref(1)

const pageCount = ref(5)

const filteredRows = computed(() => {
    return useUTableFilter<any>(q, people)
})

const rows = computed(() => {
    return people.slice((page.value - 1) * pageCount.value, (page.value) * pageCount.value)
})
</script>

<template>
    <div>
        <TableWrapper>
            <template #header>
                <div class="flex p-4 justify-between items-center">
                    <h5 class="font-semibold text-lg">
                        Liste des localités
                    </h5>

                    <UButton icon="i-heroicons-plus" size="md" color="primary" variant="outline" :trailing="false" />
                </div>

                <div class="flex justify-between border-t border-b py-4">
                    <TableElementByPage class="pl-4" v-model="pageCount" />

                    <UInput required class="pr-4" v-model="q" placeholder="Effectuer une recherche..." />
                </div>
            </template>

            <template #content>
                <UTable :columns="localityColumns" v-if="people" :rows="q ? filteredRows : rows">
                </UTable>
            </template>

            <template #footer>
                <TablePaginationInfo :page="page" :page-count="pageCount" :length="people.length" title="localités" />

                <UPagination v-if="!q && people.length" v-model="page" :page-count="pageCount" :total="people.length" />
            </template>
        </TableWrapper>
    </div>
</template>

<style lang="css" scoped></style>