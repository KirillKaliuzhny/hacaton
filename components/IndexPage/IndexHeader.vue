<script setup>

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <button class="header__auth font-inter default">
                    Личный кабинет
                </button>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .header__body {
        padding-top: 20px;
    }
    .header__auth {
        padding: 16px 26px 16px 26px;
        border-radius: 14px;
        width: 100%;
        border: none;
        font-size: 14px;
        font-weight: 500;
    }
    .header__auth.default {
        color: var(--color-orange);
        background: var(--color-white);
    }
</style>