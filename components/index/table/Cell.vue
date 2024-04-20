<script setup>
</script>

<template>
  <div>
    <div class="index__table-cell-header"><slot name="header" /></div>
    <div class="index__table-cell-content"><slot name="content" /></div>
  </div>
</template>

<style scoped>
.index__table-cell-content {
  font-family: GetVoIP Grotesque,serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 27px;
  margin-bottom: 20px;
}

.index__table-cell-header {
  font-family: Inter,serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: center;
}
</style>