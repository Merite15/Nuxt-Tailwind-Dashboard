export default defineAppConfig({
    ui: {
        breadcrumb: {
            ol: 'bg-white dark:bg-gray-800 dark:border-gray-800 border-gray-100 p-2 rounded-lg border shadow-sm',
            active: "text-green-500 dark:text-green-400",
            default: {
                divider: '/',
            },
        },
        button: {
            default: { size: 'lg' }
        },
        table: {
            th: {
                base: 'border-t border-b border-b-2',
                color: 'text-black'
            },
            default: {
                loadingState: {
                    icon: 'i-heroicons-arrow-path-20-solid',
                    label: 'Chargement des données......',
                },
                progress: {
                    color: 'primary',
                    animation: 'carousel',
                },
                emptyState: {
                    icon: 'i-heroicons-circle-stack-20-solid',
                    label: 'Aucun element trouvé.',
                },
            }
        },
        notification: {
            default: {
                timeout: 1500,
            },
        },
        pagination: {
            wrapper: 'flex items-center gap-x-2',
            rounded: '!rounded-full min-w-[32px] justify-center',
            default: {
                size: "lg",
                activeButton: {
                    "color": "green"
                },
                inactiveButton: {
                    "color": "gray"
                },
            }
        },
        notifications: {
            position: 'top-0 bottom-auto'
        },
        icons: {
            dynamic: true
        }
    },
})