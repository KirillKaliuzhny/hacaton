<script>
import Cell from "./Cell";

export default {
  components: {Cell}
}
</script>

<template>
  <div class="index__rating-table-row">
    <div class="index_desktop">
      <div class="index__title">
        <div data-cell-f>Команда</div>
        <div>Дизайн</div>
        <div>Юзабилти</div>
        <div>Верстка</div>
        <div>Реализация</div>
        <div>Общая оценка</div>
      </div>
      <div class="index__metrics">
        <div data-cell-f>API'шный латте</div>
        <div>4</div>
        <div>4</div>
        <div>4</div>
        <div>4</div>
        <div>4</div>
      </div>
    </div>
    <div class="index_mobile">
      <div data-cell-2 data-cell-f>Команда</div>
      <div data-cell-team data-cell-2 data-cell-f>API'шный латте</div>
      <div>
        Дизайн
        <span>4</span>
      </div>
      <div>
        Юзабилти
        <span>4</span>
      </div>
      <div>
        Верстка
        <span>4</span>
      </div>
      <div>
        Реализация
        <span>4</span>
      </div>
      <div data-cell-2>
        Общая оценка
        <span>4</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
.index__content {
  font-family: Inter, serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 27px;
  margin-bottom: 20px;
}

.index__header {
  font-family: Inter, serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
}

.index_desktop {
  @media screen and (max-width: 500px) {
    display: none;
  }
}

.index_mobile {
  display: none;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: #726D69;

  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(2, 1fr);

  div[data-cell-team],
  span {
    font-family: Inter, sans-serif;
    font-size: 28px;
    font-weight: 700;

    color: #252525;
  }

  span {
    font-size: 16px;
  }

  div[data-cell-f] {
    align-items: flex-start;

    border: none;
  }

  div[data-cell-2] {
    grid-column-end: span 2;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5px;

    margin-top: 30px;

    border-bottom: 1px solid #726D69;
  }


  @media screen and (max-width: 500px) {
    display: grid;
  }
}

.index__title,
.index__metrics {
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);

  div {
    justify-self: center;
    align-items: center;
  }

  div[data-cell-f] {
    justify-self: flex-start;
  }
}


.index__title {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: grey;
}

.index__metrics {
  font-family: Inter, sans-serif;
  font-size: 28px;
  font-weight: 700;

  color: black;
}

.index__rating-table-row {
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin-top: 20px;
  border-bottom: 1px solid #726D69;
  padding-bottom: 5px;

  @media screen and (max-width: 500px) {
    border-bottom: none;
  }

  /*margin-top: 20px;
  border-bottom: 1px solid #726D69;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;*/
}
</style>