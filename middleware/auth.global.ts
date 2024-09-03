export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) return;

    const user = localStorage.getItem('user')

    if (user === 'merite' && to?.path === '/') {
        return navigateTo('/dashboard');
    }

    if (user !== 'merite' && to?.path !== '/') {
        abortNavigation();

        return navigateTo('/');
    }
})
