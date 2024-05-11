<template>
  <div class="content">
    <LoadingComponent :isVisible="isVisible"></LoadingComponent>
    <ImageUploader @response-ai="onResponseAi" @add="onAddImgs"></ImageUploader>
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
    };
  },
  methods: {
    onResponseAi(data) {
      setTimeout(() => {
        this.isVisible = false;
        console.log(data);
      }, 2000);
    },
    onAddImgs() {
      this.isVisible = true;
    },
  },
};
</script>
<style src="./style.css"></style>
