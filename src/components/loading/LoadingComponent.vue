<template>
  <div class="loading" v-if="isVisible">
    <div class="wheel-container">
      <img src="@/assets/images/wheelloading.png" alt="" />
    </div>
    <h1>{{loadingMessage}}</h1>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    isVisible: Boolean,
  },
  data() {
    return {
      loadingMessages: [
        'Analisando a lataria...',
        'Inspecionando cada pixel...',
        'Desvendando os segredos da pintura...',
        'Buscando detalhes que escapam ao olhar humano...',
        'Diagnosticando a saúde da carroceria...',
      ],
      loadingMessage: 'Carregando...',
      intervalId: null,
    };
  },
  mounted() {
    // Define o intervalo para atualizar a mensagem a cada 2 segundos
    this.intervalId = setInterval(() => {
      // Obtém um índice aleatório para a mensagem
      const randomIndex = Math.floor(
        Math.random() * this.loadingMessages.length,
      );

      // Atualiza a mensagem exibida
      this.loadingMessage = this.loadingMessages[randomIndex];
    }, 2000);
  },
  beforeDestroy() {
    // Limpa o intervalo quando o componente for destruído
    clearInterval(this.intervalId);
  },
};
</script>
<style src="./style.css">

</style>
