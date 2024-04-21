<script setup>
    import '@/assets/css/global.css'
    import IndexHeader from '@/components/IndexPage/IndexHeader.vue'
</script>

<template>
    <div class="wrapper">
        <MainHeader />
        <main class="main">
            <slot />
        </main>
    </div>
</template>

<style>
    body, html {
        background-color: #fff;
    }
</style>