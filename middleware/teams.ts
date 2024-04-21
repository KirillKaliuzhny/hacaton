import {useAuthStore} from '~/stores/auth.ts';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { getTeam } = useAuthStore();
    const data = getTeam();

    if (to.path == '/team/' && !data) {
        return navigateTo('/', {redirectCode: 301})
    }
    
})