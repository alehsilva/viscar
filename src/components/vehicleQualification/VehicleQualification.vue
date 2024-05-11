<template>
  <div class="flex-circle" v-if="qualification">
    <div class="text-result">
      Numa escala de 0 a 5 esse é o resultado dos danos em seu veículo
    </div>
    <div class="circles">
      <div v-if="qualification == 0" class="circle-0">0</div>
      <div v-if="qualification == 1" class="circle-1">1</div>
      <div v-if="qualification == 2" class="circle-2">2</div>
      <div v-if="qualification == 3" class="circle-3">3</div>
      <div v-if="qualification == 4" class="circle-4">4</div>
      <div v-if="qualification == 5" class="circle-5">5</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VehicleQualification',
  props: {
    qualification: Number,
  },
};
</script>
<style src="./styles.css"></style>
