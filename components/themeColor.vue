<template>
    <div class="flex justify-between items-center">
        <div @click="() => $colorMode.value === 'dark' ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'"
            class="flex items-center justify-center h-10 w-10 hover:bg-blue-200/50 hover:dark:bg-gray-100/10 rounded-full cursor-pointer">
            <Icon v-show="$colorMode.value === 'light'" name="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                size="25" />
            <Icon v-show="$colorMode.value === 'dark'" name="line-md:moon-loop" size="25" />
        </div>
    </div>
</template>