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

const showRatingModal = ref(false)

const changeRatingView = () => {
  console.log('click')
  showRatingModal.value = !showRatingModal.value
}

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
  <div class="main-page">
    <div class="index__header container">
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
          initial-slide="1"
          :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2,
      slideShadows: true,
    }"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide>
          <div class="team-card">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="team-card">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="team-card">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="index__wrapper">
      <div class="index__rating">
        <div class="index__rating-btn">
          <MarkBtn @click="setVisibleModal">Оценить команду</MarkBtn>
        </div>
        <div
            class="index__rating-team"
            :class="{
              'index__rating-team_open': showRatingModal,
              'index__rating-team_close': !showRatingModal
            }"
        >
          <TableTeamRating @arrowClick="changeRatingView"/>
        </div>
        <div class="index__rating-team-btn_mobile" @click="changeRatingView">
          Посмотреть рейтинг команд
        </div>
      </div>
    </div>

    <MakeMark v-if="showModal" @hideModal="setHideModal"></MakeMark>
  </div>
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

.swiper-pagination-bullet {
  width: 6px;
  height: 6px;

  background: #FCF5F1;

  transition: all .3s;
}
.swiper-pagination-bullet-active {
  width: 24px;
  height: 6px;

  border-radius: 10px;
}

@media screen and (min-width: 550px) {
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 300px;
  }
}

.swiper-slide {

}

.slide_active {

  .team-card {
    background: yellow;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.team-card {
  width: 100%;
  height: 100%;

  background: #000;

  border-radius: 20px;
}

.index__rating-team_open {
  @media screen and (max-width: 500px){
    display: block;
  }
}
.index__rating-team_close {
  @media screen and (max-width: 500px){
    display: none;
  }
}

</style>

<style>
.main-page {
  padding: 40px 0 70px;

  @media screen and (max-width: 500px){
    padding: 20px 0;
  }
}

.index__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 0 20px;
}

.index__rating-team {
  margin-top: 60px;

  @media screen and (max-width: 500px){
    margin-top: 0;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    z-index: 10;


    .index__rating-team-table {
      width: 100%;
      height: 100%;

      border-radius: 0;
      padding: 20px 15px;
    }
  }
}

.index__rating-team-btn_mobile {
  display: none;

  margin-top: 40px;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: #FCF5F1;

  text-decoration: underline;

  text-align: center;

  @media screen and (max-width: 500px) {
    display: block;
  }
}

.index__rating-btn {
  margin-top: 20px;

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
  font-family: Inter, serif;
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  color: var(--color-orange);
  text-shadow: 1px 0 1px var(--color-black),
  0 1px 1px var(--color-black),
  -1px 0 1px var(--color-black),
  0 -1px 1px var(--color-black);
  word-break: break-all;

  @media screen and (max-width: 500px){
    font-size: 62px;
  }
}

.index__header {
  display: flex;
  justify-content: end;

  padding: 0;

  max-width: 1344px;
  margin: 0 auto;

  @media screen and (max-width: 1400px){
    padding: 0 20px;
  }
}

.container {
}

</style>