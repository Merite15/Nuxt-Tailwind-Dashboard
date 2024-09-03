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

const q = ref('')

const page = ref(1)

const pageCount = ref(5)

const filteredRows = computed(() => {
    return useUTableFilter<any>(q, localities)
})

const rows = computed(() => {
    return localities.slice((page.value - 1) * pageCount.value, (page.value) * pageCount.value)
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
                <UTable :columns="localityColumns" v-if="localities" :rows="q ? filteredRows : rows">
                </UTable>
            </template>

            <template #footer>
                <TablePaginationInfo :page="page" :page-count="pageCount" :length="localities.length"
                    title="localités" />

                <UPagination v-if="!q && localities.length" v-model="page" :page-count="pageCount"
                    :total="localities.length" />
            </template>
        </TableWrapper>
    </div>
</template>

<style lang="css" scoped></style>