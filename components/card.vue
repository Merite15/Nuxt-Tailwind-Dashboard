<script setup lang='ts'>
interface CardProps {
    title: string
    number: number
    icon: string
    provenance: string
    color: string
}

defineProps<CardProps>()
</script>

<template>
    <div
        class="flex flex-col rounded-lg border border-slate-200 bg-white hover:border-slate-300 active:border-violet-300">
        <div class="flex grow items-center justify-between p-5">
            <dl>
                <dt class="text-2xl font-bold">${{ number.toLocaleString('de-DE') }}</dt>
                <dd class="text-sm font-medium text-slate-500">
                    {{ title }}
                </dd>
            </dl>

            <div
                :class="`flex h-12 w-12 items-center justify-center rounded-xl border border-${color}-100 bg-${color}-50 text-${color}-500`">

                <Icon :name="icon" />
            </div>
        </div>

        <div class="border-t border-slate-100 px-5 py-3 text-xs font-medium text-slate-500">
            <p>{{ provenance }}</p>
        </div>
    </div>
</template>

<style lang="css" scoped></style>