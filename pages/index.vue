<script setup lang="ts">
interface User {
    email: string
    password: string
}

const user = ref<User>({
    email: '',
    password: '',
})

const showPassword = ref<boolean>(false)

const display_error = ref<string>('')

const display_errors = ref<string>('')

const loading = ref<boolean>(false)

async function Login() {
    loading.value = true
    display_error.value = ''
    display_errors.value = ''
}
</script>

<template>
    <div class="flex justify-between min-h-screen">
        <div class="lg:w-1/2 w-full relative p-6  text-black ">

            <div class="w-3/5 lg:px-0 px-6 flex ml-20 flex-col">
                <NuxtLink to="/">
                    <h1 class="text-2xl mt-5 w-1/2 font-semibold">DASHBOARD</h1>
                </NuxtLink>

                <div class="space-y-2 mt-36">
                    <h3 class="uppercase text-2xl font-semibold">Connexion</h3>
                </div>

                <div class="flex gap-x-2 my-4">
                    <UButton icon="i-logos:google-icon" size="sm" color="white" variant="solid"
                        label="Connexion avec Google" :trailing="false" />

                    <UButton icon="i-logos:facebook" size="sm" color="white" variant="solid"
                        label="Connexion avec Facebook" :trailing="false" />
                </div>

                <p>Ou</p>

                <UAlert icon="i-heroicons-exclamation-triangle" color="red" v-show="display_error"
                    :title="display_error" class="mt-3" />

                <UAlert v-for="(error, i) in display_errors" :key="i" icon="i-heroicons-exclamation-triangle"
                    color="red" v-show="display_errors" :title="error" class="mt-3" />

                <UForm :state="user" class="lg:w-10/12 w-full space-y-4 mt-6" @submit="Login">
                    <UFormGroup label="Email" name="email">
                        <UInput class="text-white" icon="i-heroicons-envelope" required v-model="user.email"
                            placeholder="Votre adresse email" size="lg" />
                    </UFormGroup>

                    <UFormGroup label=" Mot de passe" name="password">
                        <UInput class="text-white" icon="i-heroicons-lock-closed" required v-model="user.password"
                            :type="showPassword ? 'text' : 'password'" placeholder="Votre mot de passe" size="lg"
                            :ui="{ icon: { trailing: { pointer: '' } } }">
                            <template #trailing>
                                <UIcon class="cursor-pointer text-black" size="20"
                                    :name="`${showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'}`"
                                    @click="showPassword = !showPassword" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <p class="mt-5 text-sm font-light text-end text-black">
                        <NuxtLink to="/" class="font-medium text-gray-700  hover:underline hover:text-blue-500">
                            Mot de passe oublié
                        </NuxtLink>
                    </p>

                    <UButton type="submit" color="blue" :loading="loading"
                        class="w-full px-6 py-2 flex justify-center font-medium uppercase rounded-full border-0">
                        Se connecter
                    </UButton>

                    <p class="mt-5 text-center text-[15px] font-medium text-black">
                        J'ai deja un compte. <NuxtLink to="/"
                            class=" text-gray-700 hover:underline hover:text-blue-500">
                            Se connecter
                        </NuxtLink>
                    </p>
                </UForm>
            </div>
        </div>

        <div class="bg-[url('~/assets/img/bg.jpg')]  bg-cover bg-no-repeat object-cover text-black w-1/2">
        </div>
    </div>
</template>

<style></style>