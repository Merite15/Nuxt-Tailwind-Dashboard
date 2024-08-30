<template>
    <div class="overflow-y-auto bg-white shadow w-72 border m-4 text-black lg:rounded-l-[30px] lg:rounded-r-[30px]">
        <aside class="flex flex-col justify-between h-full pt-4 ">
            <div>
                <p class="flex items-center gap-x-3 my-2 mx-4 px-4  text-black">
                    <img class="w-10 rounded-lg" alt="Logo" src="~/assets/img/logo.svg">

                    <span class="font-medium"> DASHBOARD</span>
                </p>

                <div class="flex flex-col gap-y-3 mt-6">
                    <NavigationLink link="/dashboard" title="Tableau de bord" icon="material-symbols:dashboard" />

                    <NavigationLink link="/dashboard/test" title="Test" icon="bx:bar-chart-square" />
                </div>
            </div>

            <div>
                <NavigationLink title="Paramètres" icon="bx:bxs-cog" link="#" />

                <hr class='bg-gray-400 mx-2 my-2' />

                <div class='flex pb-4 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200'>

                    <div class='flex items-center gap-2'>
                        <Icon name="heroicons:user-circle" size="36" />

                        <div class="">
                            <p class='text-base font-semibold text-gray-800 capitalize'>Eric</p>

                            <p class='text-xs capitalize'>eric@gmail.com</p>
                        </div>
                    </div>

                    <Icon name="octicon:sign-out" size="20" />
                </div>
            </div>
        </aside>
    </div>
</template>