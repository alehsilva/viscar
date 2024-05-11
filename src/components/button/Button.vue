<template>
  <div>
    <!--Botão primário-->
    <button v-if="buttonPrimary" class="primary" @click="emitClick">
      <img :src="require(`@/assets/images/${icon}`)" alt=""/>
      {{label}}
    </button>
    <!--Botão secundário-->
    <button v-if="buttonSecondary" class="secondary" @click="emitClick">
      <img :src="require(`@/assets/images/${icon}`)" alt=""/>
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    label: String,
    icon: String,
    buttonPrimary: Boolean,
    buttonSecondary: Boolean,
  },
  methods: {
    emitClick() {
      this.$emit('child-clicked', 'teste');
    },
  },
};
</script>

<style src="./style.css"></style>
