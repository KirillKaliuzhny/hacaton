<script setup>
import Row from "~/components/index/table/Row";
</script>

<template>
  <div class="index__table">
    <Row/>
    <Row/>
    <Row/>
  </div>
</template>

<style scoped>
.index__table {
  overflow: auto;
  margin-top: 60px;
}
</style>