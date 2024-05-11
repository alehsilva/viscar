<template>
  <div>
    <h1>Análise de imagens</h1>
    <ImageUploader />
  </div>
</template>

<script>
import ImageUploader from '../components/imageUploader/ImageUploader.vue';

export default {
  name: 'HomeView',
  components: {
    ImageUploader,
  },
};
</script>
