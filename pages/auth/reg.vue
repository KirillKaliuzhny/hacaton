<script setup>
    import {useAuthStore} from '~/stores/auth.ts';
    const teamName = ref('');
    const bannerImg = ref('');
    const email = ref('');
    const login = ref('');
    const password = ref('');

    const passErrorMsg = 'Некорректно введен пароль';
    const fileErrorMsg = 'Введен не тот тип файла';
    const formErrorText = ref('');
    const formErrorTextView = ref(false);
    const viewFileError = ref(false)
    const viewPassError = ref(false);


    async function blobToBase64(blob) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result); // Получаем Base64 данные после запятой
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    const submitter = async (e) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password.value)) {
            viewPassError.value = true;
            return;
        }
        else {
            viewPassError.value = false;
        }
        const file = document.querySelector('input[type=file]').files[0];
        if (file.type.includes('image')) {
            viewFileError.value = false;
        }
        else {
            viewFileError.value = true;
            return;
        }
        const blob = await file.arrayBuffer().then(buffer => new Blob([buffer], { type: file.type }))
        const banner = await blobToBase64(blob);
        const config = useRuntimeConfig();
        const { data: teamData, error } = await useFetch(
            config.public.apiUrl + '/teams/',
            {
                method: 'post',
                body: {
                    team_name: teamName.value,
                    email: email.value,
                    login: login.value,
                    password: password.value,
                    image: banner,
                    team_users: [
                        {
                            surname: 'Тестовый участнк',
                            patronymic: '',
                            image: banner,
                            description: 'Мега разраб, в 7 лет написал компилятор для своего языка, опыт коммерческой разработки 20 лет, мне 22 года',
                        }
                    ]
                }
            }
        );
        if (error.value) {
            formErrorTextView.value = true;
            formErrorText.value = error.value.data.detail;
            return;
        }
        const { setTeam } = useAuthStore();
        setTeam(teamData.value.token, teamData.value.slug);
        navigateTo('/', {redirectCode: 301})
    }

</script>

<template>
    <div class="master">
        <section class="login">
            <div class="login__cancel">
                <nuxt-link to="/auth/login">
                    <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0479 9L2.21452 9M2.21452 9L12.5479 16.5M2.21452 9L12.5479 1.5" stroke="#F47934" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </nuxt-link>
            </div>
            <h1 class="login__title font-getvoip">
                Регистрация
            </h1>
            <form class="login-form font-inter" @submit.prevent>
                <div class="login-input">
                    <p class="login-title">Название команды <span>( * )</span></p>
                    <input type="text" maxlength="20" v-model="teamName" required>
                    <p class="login-text">
                        *не более 20 символов
                    </p>
                </div>
                <div class="login-input">
                    <p class="login-title">Баннер <span>( * )</span></p>
                    <input type="file" required>
                    <p class="login-error" v-if="viewFileError">
                        {{ fileErrorMsg }}
                    </p>
                </div>
                <div class="login-input">
                    <p class="login-title">Почта <span>( * )</span></p>
                    <input type="email" v-model="email" required>
                </div>
                <div class="login-input">
                    <p class="login-title">Логин <span>( * )</span></p>
                    <input type="text" v-model="login" required>
                </div>
                <div class="login-input">
                    <p class="login-title">Пароль <span>( * )</span></p>
                    <input type="password" v-model="password" required>
                    <p class="login-error" v-if="viewPassError">
                        {{ passErrorMsg }}
                    </p>
                    <p class="login-text">
                        *минимальное количество символов 8, в них должны присутствовать: заглавная буква, строчная буква, цифра, символ
                    </p>
                </div>
                <p class="login-description font-inter">
                    <span>( * )</span>
                    обязательное поле
                </p>
                <p class="login-error" v-if="formErrorTextView">
                    {{ formErrorText }}
                </p>
                <div class="login-buttons">
                    <button class="login-btn primary-btn font-inter" @click="submitter">
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<style scoped>
    .master {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login {
        padding: 40px 16px;
        max-width: 480px;
        width: 100%;
        margin: 0 auto;
    }
    .login__cancel {
        margin-bottom: 40px;
    }
    .login__title {
        margin-bottom: 72px;
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        color: var(--color-orange);
    }
    .login-form {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .login-form input {
        width: 100%;
        border: 1px solid var(--color-black);
        border-radius: 14px;
        outline: none;
        padding: 14px 8px;
        color: var(--color-grey);
        font-size: 16px;
    }
    .login-input {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .login-title {
        font-family: 'Super-Inter';
        font-weight: 500;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }
    .login-input p span {
        color: var(--color-orange);
    }
    .login-text {
        font-family: 'Super-Inter';
        font-size: 12px;
        color: var(--color-grey);
    }
    .login-description {
        font-weight: 500;
        color: var(--color-grey);
    }
    .login-description span {
        color: var(--color-orange);
    }
    .login-buttons {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
    }
    .login-btn {
        background: var(--color-orange);
        color: var(--color-white);
        border: none;
        border-radius: 14px;
        width: 182px;
        height: 55px;
        font-size: 1rem;
    }
    .login-error {
        font-family: 'Super-Inter';
        color: red;
    }
</style>