<script setup lang='ts'>
interface message {
    message: string
}

defineProps<message>()
</script>

<template>
    <p v-show="message && message.length > 0" class="p-2 m-2 ml-2 text-white bg-red-500 rounded-md"><i
            class="mr-2 fa-solid fa-warning"></i>{{
                message
            }}</p>
</template>
