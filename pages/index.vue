<script setup lang="ts">
interface User {
    email: string
    password: string
}

const user = ref<User>({
    email: 'email@gmail.com',
    password: 'password',
})

const showPassword = ref<boolean>(false)


const loading = ref<boolean>(false)

async function Login() {
    loading.value = true

    setTimeout(() => {
        loading.value = false

        navigateTo('/dashboard')
    }, 1000)
}
</script>

<template>
    <div class="flex justify-between min-h-screen">
        <div class="lg:w-1/2 w-full  transition-colors ease-in-out duration-200 delay-75  relative p-6  text-black ">
            <div class=" lg:px-0 px-6 flex ml-20 flex-col">

                <div class="flex justify-between items-center">
                    <NuxtLink to="/">
                        <h1 class="text-2xl mt-5 font-semibold">DASHBOARD</h1>
                    </NuxtLink>
                </div>

                <div class="w-4/6">
                    <div class="space-y-2 mt-40">
                        <h3 class="uppercase text-2xl font-semibold">Connexion</h3>
                    </div>

                    <UForm :state="user" class="lg:w-10/12 w-full space-y-6 mt-6" @submit="Login">
                        <UFormGroup label="Email" name="email">
                            <UInput class="text-white" icon="i-heroicons-envelope" required v-model="user.email"
                                placeholder="Votre adresse email" size="lg" />
                        </UFormGroup>

                        <UFormGroup label=" Mot de passe" name="password">
                            <UInput class="text-white" icon="i-heroicons-lock-closed" required v-model="user.password"
                                :type="showPassword ? 'text' : 'password'" placeholder="Votre mot de passe" size="lg"
                                :ui="{ icon: { trailing: { pointer: '' } } }">
                                <template #trailing>
                                    <UIcon class="cursor-pointer text-black " size="20"
                                        :name="`${showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'}`"
                                        @click="showPassword = !showPassword" />
                                </template>
                            </UInput>
                        </UFormGroup>

                        <p class="text-sm font-light text-end text-black">
                            <NuxtLink to="/" class="font-medium hover:underline text-blue-500 ">
                                Mot de passe oublié
                            </NuxtLink>
                        </p>

                        <UButton type="submit" color="blue" :loading="loading"
                            class="w-full px-6 py-2 flex justify-center font-medium uppercase rounded-full border-0">
                            Se connecter
                        </UButton>

                        <p class="text-center text-[15px] font-medium text-black ">
                            J'ai deja un compte. <NuxtLink to="/"
                                class=" text-blue-500 hover:underline hover:text-blue-700">
                                Se connecter
                            </NuxtLink>
                        </p>
                    </UForm>
                </div>
            </div>
        </div>

        <div class=" z-[1] col-start-9 col-span-4 lg:col-start-7 lg:col-span-6 relative hidden md:block">
            <div class="w-[50vw] h-full" style="min-height:300px">
                <div
                    class="absolute z-[1] left-0 top-0 w-full h-full bg-no-repeat bg-cover z-index--1 vw-md-50 bg-[url('~/assets/img/bg.jpg')]">
                </div>
            </div>

            <div
                class="absolute z-[2] left-0 right-0 top-0 bottom-0 text-white dark:text-slate-900 transition-colors ease-in-out duration-200 delay-75 overflow-hidden">
                <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="scale-[2] w-auto h-full">
                    <path d="M0 0h100v386l-50 772v386H0V0z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<style></style>