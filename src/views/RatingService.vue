<template>
  <div class="calificar-servicio">
    <p class="texto-p">
      Con la finalidad de mejorar la calidad del servicio, te agradeceremos calificar la atención recibida.
    </p>
    <div class="rating-5s">
      <fieldset class="rating-stars">
        <input type="radio" id="star5" name="rating" value="5" />
        <label class = "full" for="star5" title="Awesome - 5 stars"></label>
        <input type="radio" id="star4half" name="rating" value="4 and a half" />
        <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
        <input type="radio" id="star4" name="rating" value="4" />
        <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
        <input type="radio" id="star3half" name="rating" value="3 and a half" />
        <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
        <input type="radio" id="star3" name="rating" value="3" />
        <label class = "full" for="star3" title="Meh - 3 stars"></label>
        <input type="radio" id="star2half" name="rating" value="2 and a half" />
        <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
        <input type="radio" id="star2" name="rating" value="2" />
        <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
        <input type="radio" id="star1half" name="rating" value="1 and a half" />
        <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
        <input type="radio" id="star1" name="rating" value="1" />
        <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
        <input type="radio" id="starhalf" name="rating" value="half" />
        <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
      </fieldset>
    </div>
    
    <div class="rating">
      <form class="rating-form">

        <label for="excelente-servicio">
          <input type="radio" name="rating" class="excelente-servicio" id="excelente-servicio" value="excelente-servicio" />
          <img src="../assets/icons/icn_excelente-servicio.svg" alt="Excelente servicio">
          <p>Excelente servicio</p>
        </label>

        <label for="amable">
          <input type="radio" name="rating" class="amable" id="amable" value="amable" />
          <img src="../assets/icons/icn_amable.svg" alt="Amable">
          <p>Amable</p>
        </label>

        <label for="respetuoso">
          <input type="radio" name="rating" class="respetuoso" id="respetuoso" value="respetuoso" />
          <img src="../assets/icons/icn_respetuoso.svg" alt="Respetuoso">
          <p>Respetuoso</p>
        </label>

        <label for="rapido-llegar">
          <input type="radio" name="rating" class="rapido-llegar" id="rapido-llegar" value="rapido-llegar" />
          <img src="../assets/icons/icn_rapido-en-llegar.svg" alt="Rápido en llegar">
          <p>Rápido en llegar</p>
        </label>
      </form>
    </div>

    <button>Enviar calificación</button>
  </div>
</template>
<script>
export default {
  name: "RatingService"
};
</script>
