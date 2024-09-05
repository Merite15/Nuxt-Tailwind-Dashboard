<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <nav class="flex items-center justify-between z-10 top-0 py-2 transition-colors ease-in-out duration-200 delay-75">
        <h1 class="text-xl font-bold text-black uppercase">
            {{ route.meta.name?.toUpperCase() ?? 'Overview' }}
        </h1>

        <div class="flex justify-between gap-x-5">
            <NetworkStatus />

            <UChip text="3" inset size="2xl">
                <UButton class="rounded-full shadow-sm" icon="i-heroicons-bell" color="white" />
            </UChip>

            <UChip text="3" inset size="2xl">
                <UButton class="rounded-full shadow-sm" icon="i-heroicons-chat-bubble-oval-left-ellipsis"
                    color="white" />
            </UChip>
        </div>
    </nav>
</template>