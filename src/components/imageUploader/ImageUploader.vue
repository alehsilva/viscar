<template>
 <div>
   <DropzoneContent>
  <vue-dropzone @vdropzone-success="handleDropzoneSuccess" id="dropzone"
  :options="dropzoneOptions" :useCustomSlot=true>
      <h3 v-if="isVisibleText" class="dropzone-custom-title">
        Arraste e solte as imagens do seu veículo!
      </h3>
      <div v-if="isVisibleText" class="subtitle">
        ...ou clique e selecione do seu computador
      </div>
      <div class="dz-image">
        <div data-dz-thumbnail-bg></div>
      </div>
    </vue-dropzone>
  </DropzoneContent>
 </div>
</template>

<script>
import VueDropzone from 'vue2-dropzone';
import fileToGenerativePart from '../../utils/fileUtils';
import generateContent from '../../services/generativeAI.ts';
import { DropzoneContent } from './imageUploader.styles.ts';

export default {
  name: 'ImageUploader',
  components: {
    DropzoneContent,
    VueDropzone,
  },
  data() {
    return {
      isVisibleText: true,
      imgList: [],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 300,
        addRemoveLinks: true,
      },
    };
  },
  methods: {
    async handleErrorMultiples(files, message) {
      console.error(files, message);
    },
    async handleDropzoneSuccess(file) {
      this.isVisibleText = !this.imgList?.length;
      const imagePart = await fileToGenerativePart(file);
      this.imgList.push(imagePart);

      if (this.imgList.length >= 7) {
        const prompt = `analise essas imagens que pertencem apenas a um veiculo e monte um json com os campos caso não souber alguma informação basta deixar o campo em branco
        Modelo:, Marca:, Cor: Danos: de 0 a 10, Ano:, Câmbio:, Carroceria:, Combustível:, Potencia:, Motor:, Há Danos?:,
        tudo isso em formato JSON sem pontos do começo e sem escrever json também tomar cuidado com espaços no começo do arquivo apenas o arquivo mesmo`;
        generateContent(prompt, this.imgList).then((res) => {
          let text = res;
          text = text.replace('json', ' ');
          text = text.replace('```', ' ');
          text = text.replace('.', ' ');
          console.log(JSON.parse(text));
        });
      }
    },
  },
};
</script>

<style>
.vue-dropzone {
  height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.dz-details {
  display: none
}

.dz-success-mark {
  display: none
}

.dz-error-mark {
  display: none;
}

.dz-remove {
  display: none;
}

.dz-preview img{
  width: 50px;
  height: 50px;
}

</style>
