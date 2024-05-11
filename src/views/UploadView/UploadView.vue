<template>
  <div class="content">
    <ImageUploader></ImageUploader>
  </div>
</template>

<script>
import ImageUploader from '../../components/imageUploader/ImageUploader.vue';

export default {

  name: 'UploadView',
  comments: {
    ImageUploader,
  },
};
</script>
<style src="./style.css"></style>
