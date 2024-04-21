<script setup>

const {
  tip,
  title
} = defineProps(['title', 'tip'])

const emit = defineEmits(['onChange'])

</script>

<template>
  <div class="input">
    <span class="input__title">{{ title }}</span>
    <button class="button">
      Выбрать изображение
    </button>
    <span
        v-if="tip"
        class="input__tip"
    >
      {{ tip }}
    </span>
  </div>
</template>

<style>
.input {

}
.button {
  cursor: pointer;

  padding: 20px 0;

  border-radius: 12px;
  border: 1px solid #726D69;

  background: transparent;

  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;

  color: #F47934;
}
</style>