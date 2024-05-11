<template>
  <div>
    <DropzoneContent>
      <vue-dropzone @vdropzone-success="handleDropzoneSuccess"
      @vdropzone-files-added="handleDropzoneAdd" id="dropzone"
      :options="dropzoneOptions" :useCustomSlot=true>
        <div class="drop">
          <div class="img-cloud" v-if="isVisibleText">
            <img src="@/assets/images/upload-cloud.png" alt="">
          </div>
          <div v-if="isVisibleText" class="text">
            <h3 class="dropzone-custom-title">
              Arraste e solte as fotos do seu veículo aqui
            </h3>
            <div class="subtitle">
              ...ou clique e selecione do seu computador.
            </div>
          </div>
        </div>
        <div class="dz-image">
          <div data-dz-thumbnail-bg></div>
        </div>
      </vue-dropzone>
    </DropzoneContent>
    <div class="length-imgs">
      <div>{{ this.imgList?.length + ' arquivos de ' + 5 }}</div>
    </div>
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
    async handleDropzoneAdd() {
      this.isVisibleText = false;
    },
    async handleErrorMultiples(files, message) {
      console.error(files, message);
    },
    async handleDropzoneSuccess(file) {
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
  width: 100%;
  height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;
}

.img-cloud img{
  max-width: 80px
}

.text {
  width: 100%;
  font-size: 14px
}

.drop {
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 96%;
  margin: 0 auto;
  text-align: center;
}

.length-imgs {
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

.dz-preview img {
  width: 50px;
  height: 50px;
}
</style>
