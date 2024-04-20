<script>
import Cell from "./Cell";
export default {
  components: {Cell}
}
</script>

<template>
  <div class="index__rating-table-row">
    <div class="index__team-row">
      <div class="index__header">Команда</div>
      <div class="index__content">API'шный латте</div>
    </div>
    <Cell>
      <template v-slot:header>Дизайн</template>
      <template v-slot:content>12312</template>
    </Cell>
    <Cell>
      <template v-slot:header>Дизайн</template>
      <template v-slot:content>12312</template>
    </Cell>
    <Cell>
      <template v-slot:header>Дизайн</template>
      <template v-slot:content>12312</template>
    </Cell>
    <Cell>
      <template v-slot:header>Юзабилити</template>
      <template v-slot:content>12312</template>
    </Cell>
    <Cell>
      <template v-slot:header>Дизайн</template>
      <template v-slot:content>12312</template>
    </Cell>
  </div>
</template>


<style scoped>
.index__content {
  font-family: GetVoIP Grotesque,serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 27px;
  margin-bottom: 20px;
}

.index__header {
  font-family: Inter,serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
}

.index__rating-table-row {
  margin-top: 20px;
  border-bottom: 1px solid #726D69;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>