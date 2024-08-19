export default defineAppConfig({
    ui: {
        button: {
            default: { size: 'lg' }
        },
        badge: {
            size: {
                xl: 'text-sm p-3'
            }
        },
        notification: {
            default: {
                timeout: 1500,
            },
        },
        notifications: {
            position: 'top-0 bottom-auto'
        },
        icons: {
            dynamic: true
        }
    },
})