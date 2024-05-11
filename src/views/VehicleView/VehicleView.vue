<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="body-vehicle">
    <div class="content-vehicle">
      <div class="logo-vehicle">
        <img src="@/assets/images/logo_fundo_branco.png" alt="" />
      </div>
      <div class="vehicle-info">
        <div class="vehicle-img">
          <img :src="imgUrl" alt="" />
        </div>
        <div class="vehicle-data">
          <div class="h1-vehicle">Resultados da Vistoria VisCar</div>
          <div class="h2-vehicle">Dados do Veículo</div>
          <div class="main-data">
            <div><b>Ano de fabricação</b>: <span>{{ infoVehicle?.Ano }}</span></div>
            <div><b>Chassi</b>: <span>{{ infoVehicle?.Chassi }}</span></div>
            <div><b>Cor</b>: <span>{{ infoVehicle?.Cor }}</span></div>
            <div><b>Marca</b>: <span>{{ infoVehicle?.Marca }}</span></div>
            <div><b>Modelo</b>: <span>{{ infoVehicle?.Modelo }}</span></div>
            <div><b>Número do motor</b>: <span>{{ infoVehicle?.Motor }}</span></div>
            <div><b>Placa</b>: <span>{{ infoVehicle?.Placa }}</span></div>
            <div><b>FIPE</b>: <span>{{ infoVehicle?.Fipe }}</span></div>
          </div>
          <div class="h2-vehicle">Nível de gravidade dos problemas</div>
          <VehicleQualification :qualification="infoVehicle.Danos"></VehicleQualification>
          <div class="buttons">
            <ButtonComponent
              @child-clicked="handleClick"
              buttonSecondary
              icon="icon-button-arrow.png"
              label="COMPARTILHAR"
            >
            </ButtonComponent>
            <ButtonComponent
              @child-clicked="handleClick"
              buttonPrimary
              icon="icon-button-arrow.png"
              label="BAIXAR RELATÓRIO"
            >
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from '@/components/button/Button.vue';
import VehicleQualification from '@/components/vehicleQualification/VehicleQualification.vue';

export default {
  name: 'VehicleView',
  components: {
    ButtonComponent,
    VehicleQualification,
  },
  data() {
    return {
      infoVehicle: JSON.parse(JSON.parse(localStorage.getItem('vehicleInformation'))),
      imgUrl: `data:image/jpeg;base64,${
        JSON.parse(localStorage.getItem('img')).inlineData?.data
      }`,
    };
  },
  mounted() {
    console.log(JSON.parse(JSON.parse(localStorage.getItem('vehicleInformation'))));
  },
  methods: {
    handleClick(data) {
      console.log(data);
    },
  },
};
</script>

<style src="./style.css"></style>
