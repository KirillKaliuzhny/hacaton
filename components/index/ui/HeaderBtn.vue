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
  background-color: #F9E9E0;
  color: #F47934;
  font-family: Inter,serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
  cursor: pointer;

  @media screen and (max-width: 500px){
    width: 100%;
    padding: 15px 0;

    text-align: center;

    background: transparent;

    color: #fff;

    border: 2px solid #FCF5F1
  }
}
</style>