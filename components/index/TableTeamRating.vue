<script setup>
import Table from "~/components/index/table/Table";

const emit = defineEmits(['arrowClick'])

</script>

<template>
  <div class="index__rating-team-table">
    <div class="index__arrow_mobile" @click="$emit('arrowClick')">
      <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.0479 9L2.21452 9M2.21452 9L12.5479 16.5M2.21452 9L12.5479 1.5" stroke="#F47934" stroke-width="3"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="index__table-header">Рейтинг команд</div>
    <Table/>
  </div>
</template>

<style>
.index__table-header {
  text-align: center;
  font-family: Inter, serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  color: #252525;

  @media screen and (max-width: 500px) {
    text-align: left;
    max-width: 300px;
  }
}

.index__arrow_mobile {
  display: none;

  padding: 20px 0;

  @media screen and (max-width: 500px) {
    display: block;
  }
}

.index__rating-team-table {
  padding: 80px 72px 80px 72px;
  gap: 60px;
  border-radius: 54px;
  background-color: #F9E9E0;

  @media screen  and (max-width: 500px) {
    background: #fff;
  }
}
</style>