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
    }, 100);
});
</script>

<template>
    <div ref="preloaderRef"
        class="preloader fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black  transition-opacity duration-300 z-50">
        <span class="loader" />
    </div>
</template>

<style scoped>
.hide {
    display: none !important;
}

.loader {
    width: 48px;
    height: 48px;
    display: block;
    margin: 15px auto;
    position: relative;
    color: #FFF;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

.loader::after,
.loader::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    transform: scale(0.5) translate(0, 0);
    background-color: #FFF;
    border-radius: 50%;
    animation: animLoader 1s infinite ease-in-out;
}

.loader::before {
    background-color: #FF3D00;
    transform: scale(0.5) translate(-48px, -48px);
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes animLoader {
    50% {
        transform: scale(1) translate(-50%, -50%);
    }
}
</style>