<script lang="ts" setup>
const isOnline = ref(navigator.onLine)

const connectionType = ref('')

function checkInternetConnection() {
    isOnline.value = navigator.onLine
}

function updateConnectionType() {
    if (navigator.connection)
        connectionType.value = navigator.connection.effectiveType
}

window.addEventListener('online', checkInternetConnection)

window.addEventListener('offline', checkInternetConnection)

onMounted(() => {
    updateConnectionType()
})
</script>

<template>
    <div v-if="!isOnline"
        class="fixed top-0 left-0 w-full h-full bg-white text-black z-50 flex flex-col items-center justify-center  text-center">

        <img class="w-52 relative group-hover:scale-75 duration-200" src="~/assets/img/logo.svg" alt="Logo">

        <div class="flex space-x-4 items-center mt-10">
            <img width="50" src="~/assets/img/cloud-offline.png" />
            <h1 class="text-4xl font-semibold">Vous êtes hors connexion</h1>
        </div>
    </div>
</template>