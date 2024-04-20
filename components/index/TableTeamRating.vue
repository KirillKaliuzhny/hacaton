<script setup>
import Table from "~/components/index/table/Table";
</script>

<template>
  <div class="index__rating-team-table">
    <div class="index__table-header">Рейтинг команд</div>
    <Table />
  </div>
</template>

<style scoped>
.index__table-header {
  text-align: center;
  font-family: GetVoIP Grotesque,serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  color: #252525;
}

.index__rating-team-table {
  padding: 80px 72px 80px 72px;
  gap: 60px;
  border-radius: 54px;
  background-color: #F9E9E0;
}
</style>