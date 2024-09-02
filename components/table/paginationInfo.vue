<script setup lang="ts">
interface PaginationInfoAttributes {
    page: number;
    pageCount: number;
    length?: number;
    title: string
}

defineProps<PaginationInfoAttributes>();
</script>

<template>
    <div>
        <span class="text-gray-600 dark:text-white">
            Montre
            {{ length === 0
                ? "0"
                : (page - 1) * pageCount + 1 }}
            de
            {{ Math.min(page * pageCount, Number(length)) }}
            sur
            {{ length }}
            {{ title }}
        </span>
    </div>
</template>