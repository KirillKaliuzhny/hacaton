<script setup>

</script>

<template>
    <div class="master">
        <section class="login">
            <div class="login__cancel">
                <nuxt-link to="/">
                    <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0479 9L2.21452 9M2.21452 9L12.5479 16.5M2.21452 9L12.5479 1.5" stroke="#F47934" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </nuxt-link>
            </div>
            <h1 class="login__title font-getvoip">
                Вход
            </h1>
            <form class="login-form font-inter">
                <input type="text" placeholder="Логин">
                <input type="password" placeholder="Пароль">
                <div class="login-checkbox">
                    <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
                    <label for="happy">Запомнить меня</label>
                </div>
                <div class="login-buttons">
                    <button class="login-btn primary-btn font-inter">
                        Войти
                    </button>
                    <nuxt-link to="/auth/reg" class="login-redirect font-inter">
                        Зарегистрироваться
                    </nuxt-link>
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
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100%;
    }
    .login {
        max-width: 480px;
        width: 100%;
        margin: 0 auto;
        padding: 40px 16px;
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
    .login-form > input {
        border: 1px solid var(--color-black);
        border-radius: 14px;
        outline: none;
        padding: 14px 8px;
        color: var(--color-grey);
        font-size: 16px;
    }
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox:checked+label::before {
        background: var(--color-orange);
        border-color: var(--color-orange);
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
    .login-redirect {
        font-size: 1rem;
        color: var(--color-orange);
        text-decoration: none;
    }
</style>