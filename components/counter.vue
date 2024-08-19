<script setup lang='ts'>
const count = defineModel<number>({ required: true })
</script>

<template>
    <div>
        <p>Augmente {{ count }}</p>

        <button @click="count++"> Incrémenter</button>

        <button @click="count--"> Décrémenter</button>
    </div>
</template>

<style lang="css" scoped></style>