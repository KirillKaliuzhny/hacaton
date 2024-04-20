<script setup>
    import '@/assets/css/global.css'
    import IndexHeader from '@/components/IndexPage/IndexHeader.vue'
</script>

<template>
    <div class="wrapper">
        <IndexHeader />
        <main class="main">
            <slot />
        </main>
    </div>
</template>

<style scoped>

</style>