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
    <div class="min-h-screen flex fle-col items-center justify-center py-6  px-4">
        <div class="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
            <div class="border rounded-lg p-6 max-w-md max-md:mx-auto">
                <h3 class="text-3xl font-extrabold">Connexion</h3>

                <p class="mt-4">Connectez-vous à votre compte et explorez un monde de
                    possibilités.Votre journée débute ici.</p>

                <UForm :state="user" class="space-y-4 mt-6" @submit="Login">
                    <UFormGroup label="Email" name="email">
                        <UInput icon="i-heroicons-envelope" required v-model="user.email"
                            placeholder="Votre adresse email" size="lg" />
                    </UFormGroup>

                    <UFormGroup class="relative" label=" Mot de passe" name="password">
                        <UInput icon="i-heroicons-lock-closed" required v-model="user.password"
                            :type="showPassword ? 'text' : 'password'" placeholder="Votre mot de passe" size="lg"
                            :ui="{ icon: { trailing: { pointer: '' } } }">
                            <template #trailing>
                                <Icon class="cursor-pointer" size="20"
                                    :name="`${showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'}`"
                                    @click="showPassword = !showPassword" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <div class="text-sm text-end">
                        <a class="text-blue-600 hover:underline">
                            Mot de passe oublié?
                        </a>
                    </div>

                    <UButton type="submit" color="blue" :loading="loading"
                        class="w-full px-6 py-2 flex justify-center font-medium uppercase rounded-lg border-0">
                        Se connecter
                    </UButton>

                    <p class="text-sm !mt-10 text-center">Pas encore de compte ? <a
                            class="text-blue-600 hover:underline ml-1 whitespace-nowrap">S'inscrire</a></p>
                </UForm>
            </div>

            <div class="max-md:mt-10">
                <img src="~/assets/img/bg.png" class="w-full h-full object-cover" alt="Dining Experience" />
            </div>
        </div>
    </div>
</template>

<style></style>