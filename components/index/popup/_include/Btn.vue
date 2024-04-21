<script setup>
</script>

<template>
  <div class="index__button">
    <slot />
  </div>
</template>

<style scoped>
.index__button {
  padding: 20px 26px 20px 26px;
  border-radius: 14px;
  background-color: var(--color-orange);
  color: var(--color-white);
  font-family: Inter,serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
  cursor: pointer;
}
</style>