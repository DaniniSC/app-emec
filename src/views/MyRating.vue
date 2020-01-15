<template>
  <div class="my-rating">
    <h1>Mis calificaciones</h1>
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
      <p class="comentario">"{{ calificacion.comentarios }}"</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyRating",
  data() {
    return {
      calificaciones: [
        {
          fecha: "12/10/2019",
          prestador: "Mecánica al paso",
          calificacion: 5,
          comentarios: "usuario tenía muy claro su problema y fue amable"
        },
        {
          fecha: "20/10/2019",
          prestador: "Electromecánica Román",
          calificacion: 4,
          comentarios: "Usuario molesto y no conforme con los plazos de reparación, pero respetuoso"
        }
      ]
    }
  },
};
</script>
