<template>
  <div class="home">
    <div class="map">
      <iframe frameborder="0" :src="urlMap"></iframe>
      <!-- <div class="solicitar-servicio">
        Solicitar servicio
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      lat: "0",
      lon: "0",
      dir: "",
      com: "",
      center: { lat: -33.4526112, lng: -70.6629504 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },
  computed: {
    urlMap() {
      let base = "https://mapcity.com/#!/place/";
      let latitude = this.center.lat;
      let longitude = this.center.lng;
      let zoom = "15";
      let direccion = "AV EJERCITO LIBERTADOR 441. SANTIAGO";
      let url =
        base + latitude + "," + longitude + "," + zoom + "/" + direccion;
      return url;
    }
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
