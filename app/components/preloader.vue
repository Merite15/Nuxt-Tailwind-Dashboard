<script setup lang="ts">
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
        class="fixed top-0 left-0 z-[9999] flex items-center justify-center w-full h-screen transition-opacity duration-300 preloader bg-gray-200">
        <span class="loader" />
    </div>
</template>

<style scoped>
.hide {
    display: none !important;
}

.loader {
    width: 84px;
    height: 84px;
    position: relative;
}

.loader:before,
.loader:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #FFF;
    transform: translate(-50%, -100%) scale(0);
    animation: push 2s infinite linear;
}

.loader:after {
    animation-delay: 1s;
}

@keyframes push {

    0%,
    50% {
        transform: translate(-50%, 0%) scale(1)
    }

    100% {
        transform: translate(-50%, -100%) scale(0)
    }
}
</style>