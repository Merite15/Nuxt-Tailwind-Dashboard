<script setup lang='ts'>
import { computed } from 'vue';

interface ButtonType {
    status?: boolean
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'default'
    title: string
}

const props = withDefaults(defineProps<ButtonType>(), ({
    status: false,
    variant: 'default'
}))

const variantClasses = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'bg-blue-500 hover:bg-blue-600 text-white';
        case 'secondary':
            return 'bg-gray-500 hover:bg-gray-600 text-white';
        case 'success':
            return 'bg-green-500 hover:bg-green-600 text-white';
        case 'danger':
            return 'bg-red-500 hover:bg-red-600 text-white';
        case 'warning':
            return 'bg-yellow-500 hover:bg-yellow-600 text-white';
        case 'info':
            return 'bg-cyan-500 hover:bg-cyan-600 text-white';
        case 'default':
            return 'bg-[#023f73] hover:bg-[#035a9c] text-white'
    }
});

const loadingClasses = computed(() => {
    if (props.status) {
        return 'opacity-50 cursor-not-allowed'
    }
})

const btnClasses = computed(() => {
    return `${variantClasses.value} ${loadingClasses.value}`;
});

// defineProps<ButtonType>()
</script>

<template>
    <div class="p-2">
        <button :class="btnClasses" :disabled="status"
            class="flex items-center justify-center w-full px-4 py-2 font-bold text-center rounded focus:outline-none focus:shadow-outline">

            <svg v-if="status" class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                </circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>

            <span> {{ status ? 'En cours...' : title }}</span>
        </button>
    </div>

</template>