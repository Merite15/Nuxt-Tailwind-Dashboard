<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <nav class="flex items-center justify-between z-10 top-0 py-2 transition-colors ease-in-out duration-200 delay-75">
        <h1 class="text-xl font-bold text-black flex uppercase">
            {{ route.meta.name?.toUpperCase() ?? 'Overview' }}
        </h1>


        <NavigationLinks />

        <div class="flex justify-between gap-x-5">
            <NetworkStatus />

            <UChip text="3" inset size="2xl">
                <UButton size="md" class="rounded-full shadow-sm" icon="i-heroicons-bell" color="white" />
            </UChip>

            <UChip text="3" inset size="2xl">
                <UButton size="md" class="rounded-full shadow-sm" icon="i-heroicons-chat-bubble-oval-left-ellipsis"
                    color="white" />
            </UChip>

            <div class="flex space-x-3">
                <UAvatar size="md" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
                <div class="flex flex-col justify-center">
                    <span class="font-bold text-sm">Merite K</span>
                    <span class="text-gray-400 font-light text-xs">Admin</span>
                </div>
            </div>
        </div>
    </nav>
</template>