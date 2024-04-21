import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
    const teamData = ref<object>({});

    const setTeam = (token : string, slug : string) : void => {
        teamData.value['token'] = token;
        teamData.value['slug'] = slug;
        localStorage.setItem('web-data', JSON.stringify(teamData.value));
    }

    const getTeam = () : object | bool => {
        if (!Object.keys(teamData.value).length) {
            const storeData = localStorage.getItem('web-data');
            if (storeData) {
                teamData.value =JSON.parse(storeData);
            }
            else {
                return false;
            }
        }
        return !Object.keys(teamData.value).length ? false : teamData.value;
    }

    return { setTeam, getTeam }

})
