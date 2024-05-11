<template>
  <div class="content">
    <LoadingComponent :isVisible="isVisible"></LoadingComponent>
    <ImageUploader @response-ai="onResponseAi" @add="onAddImgs"></ImageUploader>
    <img :src="img" alt="">
  </div>
</template>

<script>
import ImageUploader from '../../components/imageUploader/ImageUploader.vue';

export default {
  name: 'UploadView',
  comments: {
    ImageUploader,
  },
  data() {
    return {
      isVisible: false,
      img: null,
    };
  },
  methods: {
    onResponseAi() {
      setTimeout(() => {
        this.isVisible = false;
        // console.log(JSON.parse(localStorage.getItem('img')).inlineData?.data);
      }, 2000);
    },
    async onAddImgs() {
      this.isVisible = true;
    },
  },
};
</script>
<style src="./style.css"></style>
