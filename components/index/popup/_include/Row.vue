<script setup>

const nums = [0, 1, 2, 3, 4, 5]

</script>

<template>
  <div>
    <div class="index__inner-block-marks-header">
      <slot/>
    </div>
    <div class="index__inner-block-marks-nums">
      <template v-for="item in nums">
        <div class="v-stick">
          <div class="vertical"></div>
          <div class="number">{{ item }}</div>
        </div>
      </template>

    </div>
  </div>
</template>

<style scoped>
.v-stick .number {
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: Inter,serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  text-align: center;
}

.v-stick {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.index__inner-block-marks-nums {
  display: flex;
  justify-content: space-between;
}

.vertical {
  background-color: #252525;
  height: 10px;
  width: 1px;
}
.index__inner-block-marks-header {
  margin-bottom: 10px;
  font-family: Inter,serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  text-align: left;
}
</style>