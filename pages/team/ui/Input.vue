<script setup>

const {
  tip,
  title,
  value
} = defineProps(['title', 'tip', 'value'])

const emit = defineEmits(['onChange'])

</script>

<template>
  <div class="input">
    <span class="input__title">{{ title }}</span>
    <input
        @input="$emit('onChange', $event.target.value)"
        :value="value"
    />
    <span
        v-if="tip"
        class="input__tip"
    >
      {{ tip }}
    </span>
  </div>
</template>

<style>
.input__title {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;

  color: #252525;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;

  color: #252525;

  input {
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 500;

    color: #252525;

    outline: none;

    padding: 20px;

    border-radius: 12px;
    border: 1px solid #726D69;
  }

  .input__tip {
    font-size: 14px;
    font-weight: 400;

    color: #726D69;
  }
}
</style>