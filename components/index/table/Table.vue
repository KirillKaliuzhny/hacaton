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

  @media screen and (max-width: 500px){
    margin-top: 0;

    overflow-y: scroll;

    height: 85%;

    padding: 20px 0 50px;
  }
}
</style>