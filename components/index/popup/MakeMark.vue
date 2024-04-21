<script setup>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css"
import Row from "~/components/index/popup/_include/Row";
import Btn from "~/components/index/popup/_include/Btn";

const emits = defineEmits(['hideModal'])
const value = ref([0,0,0,0]);

const hideModal = (evt) => {
  emits('hideModal', true);
}

</script>

<template>
  <Teleport to="body">
    <div class="index__mark-modal">
      <div class="index__modal-inner">
        <div class="index__arrow_mobile" @click="hideModal">
          <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.0479 9L2.21452 9M2.21452 9L12.5479 16.5M2.21452 9L12.5479 1.5" stroke="#F47934" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="index__modal-inner-block">
          <div class="index__inner-block-header">Оцените работу</div>
          <div class="index__inner-block-marks">
            <Row>Дизайн</Row>
            <div>
              <Slider v-model="value[0]" :min="0" :max="5" :tooltips="false" />
            </div>
          </div>
          <div class="index__inner-block-marks">
            <Row>Юзабилити</Row>
            <div>
              <Slider v-model="value[1]" :min="0" :max="5" :tooltips="false" />
            </div>
          </div>
          <div class="index__inner-block-marks">
            <Row>Верстка</Row>
            <div>
              <Slider v-model="value[2]" :min="0" :max="5" :tooltips="false" />
            </div>
          </div>
          <div class="index__inner-block-marks">
            <Row>Реализация</Row>
            <div>
              <Slider v-model="value[3]" :min="0" :max="5" :tooltips="false" />
            </div>
          </div>
          <div class="index__inner-block-send">
            <Btn @click="hideModal">Отправить</Btn>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.index__inner-block-send {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.index__inner-block-marks {
  margin-top: 40px;
}

.index__inner-block-header {
  font-family: Inter, serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: #252525;
}

.index__modal-inner-block {
  background-color: #FCF5F1;
  padding: 60px;
  border-radius: 54px;

  @media screen and (max-width: 500px){
    padding: 0;

    background: transparent;
  }
}

.index__mark-modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px);

  z-index: 10;

  @media screen and (max-width: 500px){
    background: #fff;
  }
}

.index__modal-inner {
  margin: auto;

  @media screen and (max-width: 500px){
  }
}

@media screen and (min-width: 700px ){
  .index__modal-inner-block {
    min-width: 660px;
  }
}
</style>