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
        citation.value = citations.value[Math.floor(Math.floor(Math.random() * citations.value.length))]

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
    <Banner title="Page de generation de citation" description="Vivez une experience exclusive." />

    <div class="m-10 space-y-2 border rounded-lg shadow-sm ">
        <h1 class="p-2 text-xl font-bold border-b"> Liste des citations</h1>

        <TransitionGroup name="slide-fade" mode="out-in" tag="ol" class="px-2" appear>
            <div v-if="citation" key="citation-0">
                <li v-if="!generateLoading" class="p-2 font-semibold bg-gray-100 rounded-md">
                    {{ citation }}
                </li>

                <Skeleton v-else />
            </div>
        </TransitionGroup>

        <ErrorMessage :message="errorMessage" />

        <div class="flex space-x-2">
            <Button variant="success" @click="randomize" :status="generateLoading" title="Générer" />

            <Button variant="info" @click="addFavorite()" :status="loading" title="Ajouter
                comme
                favori" />

            <Button variant="danger" v-if="citation" @click="removeCitation" title="Retirer la citation" />

            <Button variant="danger" v-if="favorites && favorites.length > 0" @click="removeFavorites"
                title="Supprimer tous les favoris" />
        </div>

        <h2 class="p-2 text-xl font-bold border-b border-y"> Mes favoris</h2>

        <TransitionGroup name="slide-fade" tag="ol" mode="out-in" class="px-2" v-if="favorites && favorites.length > 0"
            appear>
            <li class="flex p-2 space-x-2" v-for="(favorite, index) in favorites" :key="index">
                <span class="p-2 font-semibold bg-green-100 rounded-md">{{ favorite }}</span>

                <i @click="removeFavorite(favorite)"
                    class="p-2 text-xl text-red-500 bg-white border rounded-md shadow cursor-pointer fa-solid fa-trash"></i>
            </li>
        </TransitionGroup>
    </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(10px);
}
</style>
