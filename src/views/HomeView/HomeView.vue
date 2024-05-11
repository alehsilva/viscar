<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="body">
    <div class="content">
      <div class="wrapper">
        <div class="logo">
          <img src="@/assets/images/logo_fundo_branco.png" alt="" />
        </div>
        <div class="text">
          <h1>Vistoria Inteligente e Instantânea</h1>
          <p>
            Revolucione sua Gestão de Vistorias com a VisCar! Nossa plataforma SaaS
            com Inteligência Artificial simplifica e automatiza suas vistorias veiculares:
            100% online, relatórios gerados por IA a partir de fotos, e aumento de produtividade.
          </p>
        </div>
        <div class="gadget">
          <img src="@/assets/images/gadgetLP.png" alt="" />
        </div>
        <div class="button">
          <ButtonComponent
            @child-clicked="handleClick"
            buttonPrimary
            icon="icon-button-arrow.png"
            label="INICIAR TESTE"
          >
          </ButtonComponent>
        </div>
      </div>
      <div class="wrapper-video">
        <div class="text">
          <h1>
            Economize tempo e dinheiro: assista ao vídeo e conheça a VisCar:
          </h1>
          <div class="player">
            <img src="@/assets/images/playerImg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../../components/button/Button.vue';

export default {
  name: 'HomeView',
  methods: {
    handleClick(data) {
      console.log(data);
    },
  },
  components: {
    // ImageUploader,
    ButtonComponent,
  },
};
</script>
<style src="./style.css"></style>
