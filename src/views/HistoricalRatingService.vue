<template>
  <div class="my-rating">
    <h1>Calificados por mi</h1>
    <div
      v-for="(calificacion, index) in calificaciones"
      v-bind:key="index"
      class="datos-calificacion"
    >
      <p class="stars">
        <i class="material-icons">star</i>
        {{ calificacion.calificacion }}/5
      </p>
      <p class="prestador">{{ calificacion.prestador }}</p>
      <p class="fecha">{{ calificacion.fecha }}</p>
      <div v-if="calificacion.reconocimiento != ''" class="cont-reconocimiento">
        <p class="reconocimiento">Reconocimiento:</p>
        <div v-if="calificacion.reconocimiento == 'excelente-servicio'">
          <img src="../assets/icons/icn_excelente-servicio.svg" alt="Excelente servicio">
          <p>Excelente servicio</p>
        </div>
        <div v-else-if="calificacion.reconocimiento == 'amable'">
          <img src="../assets/icons/icn_amable.svg" alt="Amable">
          <p>Amable</p>
        </div>
        <div v-if="calificacion.reconocimiento == 'respetuoso'">
          <img src="../assets/icons/icn_respetuoso.svg" alt="Respetuoso">
          <p>Respetuoso</p>
        </div>
        <div v-if="calificacion.reconocimiento == 'rapido-llegar'">
          <img src="../assets/icons/icn_rapido-en-llegar.svg" alt="Rápido en llegar">
          <p>Rápido en llegar</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HistoricalRatingService",
  data() {
    return {
      calificaciones: [
        {
          fecha: "12/10/2019",
          prestador: "Mecánica al paso",
          calificacion: 5,
          reconocimiento: "amable"
        },
        {
          fecha: "20/10/2019",
          prestador: "Electromecánica Román",
          calificacion: 3,
          reconocimiento: ""
        }
      ]
    }
  },
};
</script>
