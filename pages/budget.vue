<script setup lang='ts'>
onMounted(() => {
    const storedItems = localStorage.getItem('items');

    const storedExpense = localStorage.getItem('expenses');

    const storedEarn = localStorage.getItem('earnings');

    if (storedItems) {
        listOfItems.value = JSON.parse(storedItems);
    }

    if (storedExpense) {
        expenses.value = JSON.parse(storedExpense);
    }

    if (storedEarn) {
        earnings.value = JSON.parse(storedEarn);
    }
})

const budget = ref<BudgetType>({
    amount: 0,
    type: '',
    description: '',
})

const earnings = ref<number>(0)

const expenses = ref<number>(0)

const listOfItems = ref<BudgetType[]>([])

const loading = ref(false);

const removeItem = (item: BudgetType) => {
    listOfItems.value = listOfItems.value.filter(task => task.description !== item.description);

    if (item.type === 'revenu') {
        earnings.value -= item.amount
    } else {
        expenses.value -= item.amount
    }

    budget.value = { amount: 0, type: '', description: '' };
}

const addItem = () => {
    loading.value = true;

    setTimeout(() => {
        listOfItems.value.push({ ...budget.value });

        if (budget.value.type === 'revenu') {
            earnings.value += budget.value.amount;
        } else {
            expenses.value += budget.value.amount;
        }

        budget.value = { amount: 0, type: '', description: '' };

        loading.value = false;
    }, Timeout);
};


watch([listOfItems, earnings, expenses], ([newItems, newEarn, newExpense]) => {
    localStorage.setItem('items', JSON.stringify(newItems))

    localStorage.setItem('earnings', JSON.stringify(newEarn))

    localStorage.setItem('expenses', JSON.stringify(newExpense))
});
</script>

<template>
    <div>
        <Banner title="Page de gestion de son budget" description="Vivez une experience exclusive." />

        <div class="flex justify-between p-10 h-fit gap-x-4">
            <form class="w-1/2 bg-white border rounded-md shadow-sm h-fit" @submit.prevent="addItem">
                <h1 class="p-2 my-2 text-lg border-b"> Calculatrice de budget</h1>

                <div class="flex flex-col p-2">
                    <label class="mb-2" for="description"> Description</label>
                    <input required placeholder="Description" class="p-2 border rounded-lg outline-none" type="text"
                        v-model="budget.description" name="description" id="description">
                </div>

                <div class="flex flex-col p-2">
                    <label class="mb-2" for="amount"> Montant</label>

                    <input required class="p-2 border rounded-lg outline-none" type="number" min="0"
                        v-model="budget.amount" name="amount" id="amount">
                </div>

                <div class="flex flex-col p-2">
                    <label class="mb-2" for="options"> Type</label>

                    <select required class="p-2 border rounded-lg outline-none cursor-pointer" name="options"
                        v-model="budget.type" id="options">
                        <option value="" selected> Veuillez sélectionner une option</option>
                        <option value="revenu">revenu</option>
                        <option value="dépense">dépense</option>
                    </select>
                </div>

                <UButton label="Soumettre" :loading="loading" />
            </form>

            <div class="w-1/2 bg-white border rounded-md shadow-sm h-fit">
                <div>
                    <h2 class="p-2 my-2 text-lg border-b"> Résumé </h2>
                    <p class="p-2">Total des revenus : <span class="font-bold">{{ earnings }}</span></p>
                    <p class="p-2">Total des dépenses: <span class="font-bold">{{ expenses }}</span></p>
                    <p class="p-2">Solde : <span class="font-bold">{{ earnings - expenses }}</span></p>
                </div>

                <h2 class="p-2 my-2 text-lg border-y">Liste des achats</h2>

                <TransitionGroup name="slide-fade" tag="ol" v-if="listOfItems && listOfItems.length > 0" appear>
                    <li class="flex items-center p-2 gap-x-3" v-for="item in listOfItems" :key="item.description">
                        <span class="text-lg" :style="{ color: item.type === 'revenu' ? 'green' : 'red' }">
                            - {{ item.description }} - {{ item.type }} de {{ item.amount }} XAF
                        </span>

                        <UButton @click="removeItem(item)" icon="i-heroicons-trash" size="sm" color="red" square
                            variant="solid" />
                    </li>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>