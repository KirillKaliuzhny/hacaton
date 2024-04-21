export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path == '/team/') {
        return navigateTo('/', {redirectCode: 301})
    }
    
})