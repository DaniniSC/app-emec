<template>
  <nav
    class="md-layout navbar navbar-expand-lg fixed-top navbar-light"
    id="nav"
  >
    <button
      class="navbar-toggler btn-menu"
      type="button"
      data-toggle="modal"
      data-target="#menu"
    >
      <i class="material-icons" @click="toMenu()">menu</i>
    </button>
    <div class="titulo">{{ $route.meta.title || "" }}</div>
    <div class="contenedor-logo">
      <img alt="Logo" src="../assets/images/logo.svg" />
    </div>
    <div class="solicitar-servicio" data-toggle="modal" data-target="#menu2">
      Solicitar servicio
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="menu"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div v-if="typeModal == 'menu'" class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="toMenu()"
            >
              <i class="material-icons">close</i>
            </button>
            <ul class="opciones-nav">
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'home' }"
                  >INICIO</router-link
                >
              </li>
              <li class="nav-item active" @click="toMiperfil()">
                MI PERFIL
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'ratingservice' }"
                  >CALIFICAR SERVICIO</router-link
                >
              </li>
              <li class="nav-item active" @click="toHistorial()">
                HISTORIAL
              </li>
              <li class="nav-item item-cerrar-sesion">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'login' }"
                  >CERRAR SESIÓN</router-link
                >
              </li>
            </ul>
          </div>
          <div v-else-if="typeModal == 'miperfil'" class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="material-icons">close</i>
            </button>
            <ul class="opciones-nav">
              <li class="nav-item active titulo-submenu" @click="toMenu()">
                <i class="material-icons">keyboard_arrow_left</i>
                <p>MI PERFIL</p>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'personaldata' }"
                  >Datos personales</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'cardata' }"
                  >Datos del vehículo</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'home' }"
                  >Agregar foto</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'changepassword' }"
                  >Cambiar clave</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'deleteaccount' }"
                  >Eliminar usuario</router-link
                >
              </li>
            </ul>
          </div>
          <div v-else-if="typeModal == 'historial'" class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="material-icons">close</i>
            </button>
            <ul class="opciones-nav">
              <li class="nav-item active titulo-submenu" @click="toMenu()">
                <i class="material-icons">keyboard_arrow_left</i>
                <p>HISTORIAL</p>
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'previousrating' }"
                  >Calificaciones del servicio</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  class="nav-link"
                  data-dismiss="modal"
                  :to="{ name: 'myrating' }"
                  >Calificaciones del prestador</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="menu2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div v-if="valmenu2 == 0">
            <h4>Mecánicos cercanos disponibles:</h4>
            <div
              v-for="(mecanico, index) in services"
              v-bind:key="index"
              class="datos-mecanico"
            >
              <p class="nombre">{{ mecanico.name }}</p>
              <p class="direccion">{{ mecanico.address.name }}</p>
              <button data-dismiss="modal" @click="wantService(1)">
                Solicitar
              </button>
            </div>
          </div>
          <div v-if="valmenu2 == 1">
            <h4>Has solicitado el servicio mecánico correctamente</h4>
            <button data-dismiss="modal" @click="wantService(0)">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  components: {},
  data() {
    return {
      typeModal: "menu",
      valmenu2: 0,
      mecanico: "",
      services: [
        {
          name: "MecanicoExpress",
          address: {
            lat: -33.45022788041257,
            lon: -70.66432007689728,
            name: "Sazie 2071"
          }
        },
        {
          name: "Electromecánica Don Pepito",
          address: {
            lat: -33.44614117974632,
            lon: -70.66267678747694,
            name: "Cienfuegos 5"
          }
        }
      ]
    };
  },
  mounted() {},
  watch: {
    $route() {
      window.$("#navbarNav").collapse("hide");
    }
  },
  computed: {},
  methods: {
    logout() {
      return this.$router.push({ name: "login" });
    },
    toMenu() {
      this.typeModal = "menu";
    },
    toMiperfil() {
      this.typeModal = "miperfil";
    },
    toHistorial() {
      this.typeModal = "historial";
    },
    wantService(n) {
      this.valmenu2 == n;
    }
  }
};
</script>
