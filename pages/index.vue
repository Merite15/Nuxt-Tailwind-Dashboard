<script setup lang='ts'>
definePageMeta({
    name: 'Accueil',
})

useSeoMeta({
    ogImage: '[og:image]',
    twitterTitle: '[twitter:title]',
    twitterDescription: '[twitter:description]',
    twitterImage: '[twitter:image]',
    twitterCard: 'summary'
})

useHead({
    htmlAttrs: {
        lang: 'fr'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/logo.ico'
        }
    ],
    title: 'Accueil'
})

defineOgImageComponent('NuxtSeo', {
    title: 'WEBSITE Accueil',
    description: 'Look what at me in dark mode',
    theme: '#fff',
    colorMode: 'white',
})
</script>

<template>
    <div>
        <Banner />
        <Partner />
        <Testimonial />
        <!-- <Text /> -->
        <!-- <Test /> -->
    </div>
</template>

<style lang="css" scoped></style>