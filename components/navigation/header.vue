<script setup lang='ts'>
import { links } from '@/utils/links';
import NavigationLink from './link.vue';
</script>

<template>
    <header
        class='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
        <div class='flex flex-wrap items-center justify-between w-full gap-5'>
            <router-link to="/">
                <img src="@/assets/img/logo.svg" alt="logo" class='w-36' />
            </router-link>

            <div id="collapseMenu"
                class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                <ul
                    class='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>

                    <li class='hidden mb-6 max-lg:block'>
                        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
                                class='w-36' />
                        </a>
                    </li>

                    <NavigationLink v-for="link in links" :key="link.name" :title="link.name" :link="link.url" />
                </ul>
            </div>

            <div class='flex space-x-3 max-lg:ml-auto'>
                <button
                    class='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Connexion</button>
            </div>
        </div>
    </header>
</template>

<style lang="css" scoped></style>