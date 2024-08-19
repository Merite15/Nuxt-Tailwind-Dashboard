<script setup lang='ts'>
onMounted(() => {
    const storedTasks = localStorage.getItem('favorites');

    if (storedTasks) {
        favorites.value = JSON.parse(storedTasks);
    }
})

const favorites = ref<string[]>([])

const citation = ref<string>('');

const errorMessage = ref<string>('')

const loading = ref(false);

const generateLoading = ref(false);

const randomize = () => {
    errorMessage.value = ''

    generateLoading.value = true

    setTimeout(() => {
        citation.value = citations[Math.floor(Math.floor(Math.random() * citations.length))]

        generateLoading.value = false
    }, Timeout)
}

const addFavorite = () => {
    let isDuplicate = false;

    errorMessage.value = '';

    loading.value = true;

    setTimeout(() => {
        if (citation.value.length === 0) {
            errorMessage.value = 'Aucune citation présente';
        } else {
            isDuplicate = favorites.value.includes(citation.value);

            if (isDuplicate) {
                errorMessage.value = "Cette citation se trouve déjà dans vos favoris";
            } else {
                favorites.value.push(citation.value);

                randomize();
            }
        }

        loading.value = false;
    }, Timeout);
}

watch(favorites, (newVal) => {
    localStorage.setItem('favorites', JSON.stringify(newVal))
}, { deep: true })

const removeCitation = () => citation.value = ''

const removeFavorites = () => favorites.value = []

const removeFavorite = (item: string) => {
    favorites.value = favorites.value.filter(favorite => favorite !== item)
};
</script>

<template>
    <div>
        <Banner title="Page de generation de citation" description="Vivez une experience exclusive." />

        <div class="m-10 space-y-2 border rounded-lg shadow-sm ">
            <h1 class="p-2 text-xl font-bold border-b"> Liste des citations</h1>

            <TransitionGroup name="slide-fade" mode="out-in" tag="ol" class="px-2" appear>
                <div v-if="citation" key="citation-0">
                    <li v-if="!generateLoading" class="p-2 font-semibold bg-gray-100 rounded-md">
                        {{ citation }}
                    </li>

                    <USkeleton v-else class="h-10 w-full shadow-sm" />
                </div>
            </TransitionGroup>

            <div class="px-2">
                <UAlert v-show="errorMessage && errorMessage.length > 0" icon="i-heroicons-exclamation-triangle"
                    color="red" variant="solid" :title="errorMessage" />
            </div>

            <div class="flex space-x-2 px-2">
                <UButton color="primary" @click="randomize" :loading="generateLoading" label="Générer" />

                <UButton color="blue" @click="addFavorite()" :loading="loading" label="Ajouter
                comme
                favori" />

                <UButton color="red" v-if="citation" @click="removeCitation" label="Retirer la citation" />

                <UButton color="red" v-if="favorites && favorites.length > 0" @click="removeFavorites"
                    label="Supprimer tous les favoris" />
            </div>

            <h2 class="p-2 text-xl font-bold border-b border-y"> Mes favoris</h2>

            <TransitionGroup name="slide-fade" tag="ol" mode="out-in" class="px-2"
                v-if="favorites && favorites.length > 0" appear>
                <li class="flex p-2 space-x-2" v-for="(favorite, index) in favorites" :key="index">
                    <span class="p-2 font-semibold bg-green-100 rounded-md">{{ favorite }}</span>

                    <UButton @click="removeFavorite(favorite)" icon="i-heroicons-trash" size="sm" color="red" square
                        variant="solid" />
                </li>
            </TransitionGroup>
        </div>
    </div>
</template>
