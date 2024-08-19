<script setup lang="ts">
import { onMounted, ref, unref } from 'vue';

const preloaderRef = ref();

onMounted(() => {
    const fadeEffect = setInterval(() => {

        if (unref(preloaderRef)) {
            if (!unref(preloaderRef).style.opacity) {
                unref(preloaderRef).style.opacity = 1;
            }

            if (unref(preloaderRef).style.opacity > 0) {
                unref(preloaderRef).style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);

                unref(preloaderRef).classList.add("hide");
            }
        }
    }, 300);
});
</script>

<template>
    <div ref="preloaderRef"
        class="fixed top-0 left-0 z-[9999] flex items-center justify-center w-full h-screen transition-opacity duration-300 preloader bg-cyan-500">
        <span class="loader" />
    </div>
</template>

<style scoped>
.hide {
    display: none !important;
}

.loader {
    width: 70px;
    height: 35px;
    position: relative;
    overflow: hidden;
}

.loader:before {
    content: "";
    width: 70px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    border: 5px solid #0000;
    border-color: #fff #fff #0000 #0000;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotate 3s ease-in-out infinite;
    transform: rotate(-200deg);
}

@keyframes rotate {
    0% {
        border-width: 10px;
    }

    25% {
        border-width: 3px;
    }

    50% {
        transform: rotate(115deg);
        border-width: 10px;
    }

    75% {
        border-width: 3px;
    }

    100% {
        border-width: 10px;
    }
}
</style>