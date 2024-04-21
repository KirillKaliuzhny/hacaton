<script setup>

</script>

<template>
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
        <form class="login-form font-inter">
            <div class="login-input">
                <p class="login-title">Название команды <span>( * )</span></p>
                <input type="text" maxlength="20">
                <p class="login-text">
                    *не более 20 символов
                </p>
            </div>
            <div class="login-input">
                <p class="login-title">Баннер <span>( * )</span></p>
                <input type="file" maxlength="20">
            </div>
            <div class="login-input">
                <p class="login-title">Почта <span>( * )</span></p>
                <input type="text" maxlength="20">
            </div>
            <div class="login-input">
                <p class="login-title">Логин <span>( * )</span></p>
                <input type="text" maxlength="20">
            </div>
            <div class="login-input">
                <p class="login-title">Пароль <span>( * )</span></p>
                <input type="password" maxlength="20">
                <p class="login-text">
                    *минимальное количество символов 8, в них должны присутствовать: заглавная буква, строчная буква, цифра, символ
                </p>
            </div>
            <p class="login-description font-inter">
                <span>( * )</span>
                обязательное поле
            </p>
            <div class="login-buttons">
                <button class="login-btn primary-btn font-inter">
                    Зарегистрироваться
                </button>
            </div>
        </form>
    </section>
</template>

<style scoped>
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
</style>