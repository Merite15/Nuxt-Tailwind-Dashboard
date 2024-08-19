<script setup>
import { onMounted, onUnmounted, ref } from "vue";

let scrollTopButton = ref(null);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const handleScroll = () => {
    if (window.scrollY > 0) {
        scrollTopButton.value.classList.remove("invisible");
    } else {
        scrollTopButton.value.classList.add("invisible");
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div ref="scrollTopButton" class="fixed bottom-0 flex justify-end invisible w-full pb-3 pr-5 transition lg:pr-16">
        <div class="text-gray-400 transition hover:text-blue-400">
            <UButton @click="scrollToTop" icon="i-heroicons-arrow-up" size="sm" color="primary" square
                variant="solid" />
        </div>
    </div>
</template>

<style lang="css" scoped></style>