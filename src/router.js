import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import RatingService from "./views/RatingService.vue";
import MyRating from "./views/MyRating.vue";
import HistoricalRatingService from "./views/HistoricalRatingService.vue";
import PersonalData from "./views/PersonalData.vue";
import CarData from "./views/CarData.vue";
import DeleteAccount from "./views/DeleteAccount.vue";
import ChangePassword from "./views/ChangePassword.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/inicio",
      name: "home",
      component: Home,
      meta: {
        title: "Inicio"
      }
    },
    {
      path: "/calificar-servicio",
      name: "ratingservice",
      component: RatingService,
      meta: {
        title: "Calificar Servicio"
      }
    },
    {
      path: "/datos-personales",
      name: "personaldata",
      component: PersonalData,
      meta: {
        title: "Datos personales"
      }
    },
    {
      path: "/datos-vehiculo",
      name: "cardata",
      component: CarData,
      meta: {
        title: "Datos del vehículo"
      }
    },
    {
      path: "/cambiar-contrasena",
      name: "changepassword",
      component: ChangePassword,
      meta: {
        title: "Cambiar contraseña"
      }
    },
    {
      path: "/eliminar-cuenta",
      name: "deleteaccount",
      component: DeleteAccount,
      meta: {
        title: "Eliminar cuenta"
      }
    },
    {
      path: "/mis-calificaciones",
      name: "myrating",
      component: MyRating,
      meta: {
        title: "Calificaciones del prestador"
      }
    },
    {
      path: "/calificados-anteriormente",
      name: "previousrating",
      component: HistoricalRatingService,
      meta: {
        title: "Calificaciones del servicio"
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
