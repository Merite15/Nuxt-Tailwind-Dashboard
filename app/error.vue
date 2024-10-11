<script setup lang='ts'>
defineProps({
    error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <section class="bg-gay-50 flex justify-center items-center min-h-screen">
        <div class="px-5 py-16 md:px-10 md:py-20">
            <div class="mx-auto items-center text-center">
                <img src="~/assets/img/logo.svg" alt="" class="mx-auto mb-8 inline-block w-56 flex-none object-cover" />

                <h1 class="mb-4 text-4xl font-bold md:text-6xl"> {{
                    `Erreur ${error?.statusCode}`
                }}</h1>
                <p class="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8"> {{ error?.message
                    ?? "Désolé, la page que vous recherchez n'existe pas"
                    }}. </p>

                <button
                    class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 "
                    @click="handleError">
                    Accueil
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped></style>