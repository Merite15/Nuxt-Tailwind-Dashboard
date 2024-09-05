<template>
    <div class="overflow-y-auto bg-white  w-72 text-black transition-colors ease-in-out duration-200 delay-75">
        <aside class="flex flex-col  h-full pt-4 ">
            <p class="flex items-center justify-center gap-x-3 my-2 mx-4 mb-6 px-4  text-black ">
                <img class="w-10 rounded-lg" alt="Logo" src="~/assets/img/logo.svg">

                <span class="font-medium"> DASHBOARD</span>
            </p>

            <div class="justify-between flex flex-col h-full rounded-tr-[40px] text-white bg-[#0D1F2B]">

                <div class="flex flex-col gap-y-3 mt-10 px-2">
                    <NavigationLink link="/dashboard" title="Tableau de bord" icon="material-symbols:dashboard" />

                    <NavigationLink link="/dashboard/test" title="Test" icon="bx:bar-chart-square" />
                </div>

                <div>
                    <hr class='bg-gray-400 my-4' />

                    <div
                        class='flex pb-6 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200'>

                        <div class='flex items-center gap-2'>
                            <Icon name="heroicons:user-circle" size="36" />

                            <div>
                                <p class='text-base font-semibold  capitalize'>Eric</p>

                                <p class='text-xs'>eric@gmail.com</p>
                            </div>
                        </div>

                        <Icon @click="navigateTo('/')" name="octicon:sign-out" size="20" />
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>