<script setup lang="ts">
definePageMeta({
    layout: 'dashboard',
    name: 'tableau de bord',
})

useHead({
    htmlAttrs: {
        lang: 'fr',
    },
    title: 'Tableau de bord',
})
</script>

<template>
    <div>
        <div class="py-4">
            <div class="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start">
                <div class="grow">
                    <h1 class="mb-1 text-xl font-bold">Vue d'ensemble</h1>

                    <h2 class="text-sm font-medium text-slate-500">
                        Bienvenue dans votre tableau de bord
                    </h2>
                </div>

                <div
                    class="flex flex-none items-center justify-center gap-2 rounded px-2 sm:justify-end sm:bg-transparent sm:px-0">

                    <UButton color="green" label="Nouveau produit" />
                </div>
            </div>
            <hr class="mt-6 lg:mt-8" />
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
            <a href="javascript:void(0)"
                class="flex flex-col rounded-lg border border-slate-200 bg-white hover:border-slate-300 active:border-violet-300">
                <div class="flex grow items-center justify-between p-5">
                    <dl>
                        <dt class="text-2xl font-bold">$112,768</dt>
                        <dd class="text-sm font-medium text-slate-500">
                            Total Balance
                        </dd>
                    </dl>
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-500">
                        <svg class="hi-outline hi-currency-dollar inline-block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div class="border-t border-slate-100 px-5 py-3 text-xs font-medium text-slate-500">
                    <p>From all accounts</p>
                </div>
            </a>
            <a href="javascript:void(0)"
                class="flex flex-col rounded-lg border border-slate-200 bg-white hover:border-slate-300 active:border-emerald-300">
                <div class="flex grow items-center justify-between p-5">
                    <dl>
                        <dt class="text-2xl font-bold">$6,840</dt>
                        <dd class="text-sm font-medium text-slate-500">Income</dd>
                    </dl>
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-500">
                        <svg class="hi-outline hi-arrow-trending-up inline-block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                    </div>
                </div>
                <div class="border-t border-slate-100 px-5 py-3 text-xs font-medium text-slate-500">
                    <p>This month</p>
                </div>
            </a>
            <a href="javascript:void(0)"
                class="flex flex-col rounded-lg border border-slate-200 bg-white hover:border-slate-300 active:border-rose-300">
                <div class="flex grow items-center justify-between p-5">
                    <dl>
                        <dt class="text-2xl font-bold">$4,725</dt>
                        <dd class="text-sm font-medium text-slate-500">Expenses</dd>
                    </dl>
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-500">
                        <svg class="hi-outline hi-arrow-trending-down inline-block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                    </div>
                </div>
                <div class="border-t border-slate-100 px-5 py-3 text-xs font-medium text-slate-500">
                    <p>This month</p>
                </div>
            </a>
        </div>

        <Chart class="mt-10" />
    </div>
</template>

<style scoped></style>