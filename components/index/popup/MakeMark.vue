<script setup>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css"
import Row from "~/components/index/popup/_include/Row";
import Btn from "~/components/index/popup/_include/Btn";

const emits = defineEmits(['hideModal'])
const value = ref(0);

const hideModal = (evt) => {
  if (evt.target !== evt.currentTarget) {
    return;
  }

  emits('hideModal', true);
}

</script>

<template>
  <Teleport to="body">
    <div class="index__mark-modal" @click="hideModal">
      <div class="index__modal-inner">
        <div class="index__modal-inner-block">
          <div class="index__inner-block-header">Оцените работу</div>
          <div class="index__inner-block-marks">
            <Row>Дизайн</Row>
            <div>
              <Slider v-model="value" :min="0" :max="5" :tooltips="false" />
            </div>
          </div>
          <div class="index__inner-block-marks">
            <Row>Дизайн</Row>
            <div>
              <Slider v-model="value" :min="0" :max="5" :tooltips="false" />
            </div>
          </div>
          <div class="index__inner-block-marks">
            <Row>Дизайн</Row>
            <div>
              <Slider v-model="value" :min="0" :max="5" :tooltips="false" />
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
  font-family: GetVoIP Grotesque, serif;
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
}

.index__modal-inner {
  margin: auto;
}

@media screen and (min-width: 700px ){
  .index__modal-inner-block {
    min-width: 660px;
  }
}
</style>