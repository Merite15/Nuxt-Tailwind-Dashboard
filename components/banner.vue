<script setup lang='ts'>
const technos = ref<string[]>(['Flutter', 'React Native', 'Nuxt', 'Kotlin', 'Swift', 'Firebase', 'Angular', 'VueJS', 'React', 'NodeJs'])
</script>

<template>
    <div class="flex justify-between space-x-10 items-center mt-20">
        <div class="w-2/3">
            <p class="text-[65px] font-extrabold tracking-tighter font-Raleway">We build
                custom <span class="text-blue-600">Mobile
                    apps</span> and <span class="text-blue-600">Websites</span></p>

            <div class="flex flex-wrap gap-4 my-6">
                <UBadge class="text-white text-[16px] font-normal ring-gray-700 ring-2" v-for="(techno, i) in technos"
                    :key="i" :ui="{ rounded: 'rounded-full' }" color="gray" size="xl" variant="outline">{{ techno }}
                </UBadge>
            </div>

            <NavigationWork />
        </div>

        <div class="w-1/3 flex justify-center">
            <img src="~/assets/img/banner.webp" alt="banner image" width="250" />
        </div>
    </div>
</template>

<style lang="css" scoped></style>