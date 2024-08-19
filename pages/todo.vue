<script setup lang='ts'>
onMounted(() => {
    const storedTasks = localStorage.getItem('todos');

    if (storedTasks) {
        tasks.value = JSON.parse(storedTasks);
    }
})

const todo = ref<TaskType>({
    name: '',
    status: false,
})

const tasks = ref<TaskType[]>([])

const message = ref<string>('')

const loading = ref(false);

const addTask = () => {
    let isDuplicate = false;

    message.value = '';

    loading.value = true;

    tasks.value.forEach((item) => {
        if (item.name === todo.value.name) {
            isDuplicate = true;
        }
    });

    setTimeout(() => {
        if (isDuplicate) {
            message.value = "Ce nom est déjà pris";
        } else {
            tasks.value.push({ ...todo.value });

            todo.value = { name: '', status: false };
        }

        loading.value = false;
    }, Timeout);
};

const remove = (name: string) => {
    tasks.value = tasks.value.filter(todo => todo.name !== name);

    message.value = ''

    todo.value = { name: '', status: false };
}

const toggleStatus = (name: string) => {
    const todoItem = tasks.value.find((todo) => todo.name === name);

    if (todoItem) todoItem.status = !todoItem.status;
}

watch(tasks, (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })
</script>

<template>
    <Banner title="Page de todo-list" description="Vivez une experience exclusive." />

    <div class="m-10 space-y-2 bg-white border rounded-md shadow-md ">
        <form @submit.prevent="addTask">
            <h1 class="p-2 text-xl font-bold border-b"> Gestionnaire des taches</h1>

            <div class="flex flex-col p-2">
                <label class="mb-2" for="item"> Tache</label>
                <input class="p-2 border rounded-lg outline-none" placeholder="Nom de la tache" id="item"
                    v-model="todo.name" required type="text">
            </div>

            <ErrorMessage :message="message" />

            <LoadingButton variant="default" :status="loading" title="Soumettre" />
        </form>

        <TransitionGroup name="slide-fade" tag="ol" v-if="tasks && tasks.length > 0" appear>
            <div key="task-0">
                <h2 class="p-2 text-xl font-bold border-b border-y">Liste des tâches <span class="text-lg"
                        v-show="tasks.length > 0">({{
                            tasks.length }})</span></h2>

                <li class="flex items-center mb-2 space-y-2 gap-x-3" v-for="todo in tasks" :key="todo.name">
                    <span class="p-2 mt-2 ml-2 bg-gray-200 rounded-md"
                        :style="{ textDecoration: todo.status ? 'line-through' : 'none' }">{{
                            todo.name
                        }}</span>

                    <button class="bg-green-500 text-white p-1.5 rounded-md shadow" @click="toggleStatus(todo.name)"
                        v-if="!todo.status">
                        Effectuer</button>

                    <button class="bg-red-500 text-white p-1.5 rounded-md shadow" @click="toggleStatus(todo.name)"
                        v-else>
                        Annuler</button>

                    <i @click="remove(todo.name)"
                        class="text-xl p-1.5 text-red-500 bg-white border rounded-md shadow cursor-pointer fa-solid fa-trash"></i>
                </li>
            </div>
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