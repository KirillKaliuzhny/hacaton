<script setup>
/*definePageMeta({
    middleware: ['teams']
})*/
import Input from "~/pages/team/ui/Input.vue";
import Banner from "~/pages/team/ui/Banner.vue";
import PopUp from "~/pages/team/ui/PopUp.vue";

const team = ref({
  title: null,
  banner: null,
  email: null,
  list: [
    {
      fio: 'Казанцева Алина Дмитриевна'
    }
  ]
})

const popUpInfo = ref({})
const isPopUpOpen = ref(false)

const changeShow = () => {
  isPopUpOpen.value = !isPopUpOpen.value
  popUpInfo.value = {}
}

const openWithUser = (user) => {
  popUpInfo.value = user
  isPopUpOpen.value = true
}

const addUser = (user) => {
  if (user)
    team.value.list.push(user)

  changeShow();
}

const deleteUser = (user) => {
  if (user)
    team.value.list = team.value.list.filter(u => u.fio !== user.fio)

  changeShow();
}

</script>

<template>
  <PopUp
      :is-show="isPopUpOpen"
      :user="popUpInfo"
      @onAdd="addUser"
      @onDelete="deleteUser"
      @onClose="changeShow"
  />
  <div class="reg-team">
    <Input
        title="Название команды"
        tip="*не более 20 символов"
    />
    <Banner
        title="Баннер"
        tip="*jpeg, png, pdf, не больше - 2 MB"
    />
    <Input
        title="Электронная почта"
    />
    <div class="reg-team__team-title">
      <span class="input__title">Участники</span>
      <button
          class="button"
          v-if="team.list.length !== 6"
          @click="changeShow"
      >
        Добавить участника
      </button>
    </div>
    <div class="reg-team__list">
      <div
          class="reg-team__user"
          v-for="u in team.list"
          @click="() => openWithUser({ fio: u.fio })"

      >
        <span>{{ u.fio }}</span>
        <div>
          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 2L9.5 9.5L1.5 17" stroke="#726D69" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="reg-team__reg-btn">
      Зарегистрировать
    </div>
  </div>
</template>

<style>
.reg-team {
  padding: 30px 15px;

  max-width: 700px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .reg-team__team-title {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .reg-team__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .reg-team__user {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;

    color: #252525;

    div {
      cursor: pointer;
    }
  }

  .reg-team__reg-btn {
    cursor: pointer;

    width: fit-content;
    padding: 20px 26px;

    margin: 0 auto;

    border-radius: 14px;

    color: #FCF5F1;

    background: #F47934;

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>