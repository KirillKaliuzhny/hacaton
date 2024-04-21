<script setup>

import Input from "~/pages/team/ui/Input.vue";
import Banner from "~/pages/team/ui/Banner.vue";

const {
  isShow,
  user
} = defineProps(['isShow', 'user'])

const emit = defineEmits(['onAdd', 'onDelete', 'onClose'])

</script>

<template>
  <div
      class="reg-user"
      :class="{
        'reg-user_open': isShow
      }"
  >
    <div class="reg-user__container">
      <div class="reg-user__close-btn" @click="$emit('onClose')">
        <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.5 9.5L1.5 9.5M1.5 9.5L11.9 17M1.5 9.5L11.9 2" stroke="#F47934" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <Input
          title="ФИО участника"
          :value="user?.fio || ''"
          @onChange="e =>  user['fio'] = e"
      />
      <Banner
          title="Фото участника"
          tip="*jpeg, png, pdf, не больше - 2 MB"
      />
      <Input
          title="Информация об участнике"
          tip="*не более 255 знаков"
      />
      <div class="reg-user__btns">
        <button
            class="reg-user__add-btn"
            @click="$emit('onAdd', { fio: user.fio, })"
        >
          Сохранить
        </button>
        <button
            class="reg-user__del-btn"
            @click="$emit('onDelete', { fio: user.fio, })"
        >
          Удалить участника
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.reg-user {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: #fff;

  display: none;
}

.reg-user__container {
  padding: 30px 15px;

  max-width: 700px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reg-user__close-btn {
  cursor: pointer;
}

.reg-user__btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.reg-user__add-btn,
.reg-user__del-btn  {
  padding: 20px 50px;

  font-family: Inter, sans-serif;
  font-size: 16px;

  background: #F47934;
  border-radius: 14px;

  border: none;

  color: #fff;

  cursor: pointer;
}
.reg-user__del-btn {
  background: transparent;

  color: #F22A2A;
}
.reg-user_open {
  display: block;
}
</style>