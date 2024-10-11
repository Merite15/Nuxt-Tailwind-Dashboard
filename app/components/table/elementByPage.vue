<script setup lang="ts">
const pageCount = defineModel<string | number>()

const options = ["5", "10", "15", "20", "25", "50", "100"]
</script>

<template>
    <div class="flex justify-center items-center space-x-2">
        <USelectMenu v-model="pageCount" :options="options" />

        <p>éléments par page</p>
    </div>
</template>