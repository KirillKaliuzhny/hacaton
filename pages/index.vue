<script setup>
import '@/assets/css/global.css'
import HeaderBtn from "~/components/index/ui/HeaderBtn";
import MarkBtn from "~/components/index/ui/MarkBtn";
import TableTeamRating from "~/components/index/TableTeamRating";
import MakeMark from "~/components/index/popup/MakeMark";
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {EffectCoverflow, Pagination} from 'swiper/modules';

const modules = ref([EffectCoverflow, Pagination]);
const showModal = ref(false);

const setVisibleModal = () => {
  showModal.value = true;
}

const setHideModal = (value) => {
  showModal.value = !value;
}

definePageMeta({
  layout: 'main'
})
</script>

<template>
  <div class="index__header">
    <HeaderBtn>Профиль</HeaderBtn>
  </div>
  <div class="main__text">
    <div>зарегистрированные команды</div>
  </div>
  <div>
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide>
    </swiper>
  </div>
  <div class="index__wrapper">
    <div class="index__rating">
      <div class="index__rating-btn">
        <MarkBtn @click="setVisibleModal">Оценить команду</MarkBtn>
      </div>
      <div class="index__rating-team">
        <TableTeamRating/>
      </div>
    </div>
  </div>

  <MakeMark v-if="showModal" @hideModal="setHideModal"></MakeMark>
</template>

<style>
.swiper-slide-active img {
  transform: scale(1.2);
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

@media screen and (min-width: 550px) {
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 300px;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}

</style>

<style scoped>
.index__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.index__rating-team {
  margin-top: 60px;
}

.index__rating-btn {
  text-align: center;
}

.index__rating {
  width: 100%;
  max-width: 1344px;
}

.main__text {
  position: relative;
  bottom: -20px;
  text-transform: uppercase;
  font-family: GetVoIP Grotesque, serif;
  font-size: 90px;
  font-weight: 700;
  line-height: 90px;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--color-orange);
  text-shadow: 1px 0 1px var(--color-black),
  0 1px 1px var(--color-black),
  -1px 0 1px var(--color-black),
  0 -1px 1px var(--color-black);
  word-break: break-all;
}

.index__header {
  display: flex;
  justify-content: end;
  padding: 40px;
}
</style>