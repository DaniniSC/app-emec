<template>
  <div class="login">
    <div class="md-layout">
      <div class="card-login">
        <form
          novalidate
          autocomplete="off"
          class="md-layout contenido"
          method="POST"
          @submit.prevent="validateForm"
        >
          <div class="md-layout-item md-size-100 contenedor-logo">
            <img alt="Logo" width="160" src="../assets/images/logo.svg" />
            <h1>e-mec</h1>
          </div>
          <div class="md-layout-item md-size-100">
            <!-- Email -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="nope"
                  v-model="form.email"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.email.required">
                  El email es requerido
                </span>
                <span class="md-error" v-else-if="!$v.form.email.email">
                  Email inválido
                </span>
              </md-field>
            </div>
            <!-- Contraseña -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('password')">
                <label for="password">Contraseña</label>
                <md-input
                  name="new-password"
                  id="new-password"
                  autocomplete="new-password"
                  v-model="form.password"
                  :disabled="sending"
                  type="password"
                />
                <span class="md-error" v-if="!$v.form.password.required">
                  La contraseña es requerida
                </span>
                <span class="md-error" v-else-if="!$v.form.password.minlength">
                  Ingresa una contraseña válida
                </span>
              </md-field>
            </div>
          </div>

          <div class="md-layout btn-accion">
            <div class="md-layout-item md-size-100 custom-btn">
              <button
                class="btn btn-block custom-btnsecundary"
                slot="footer"
                type="submit"
                :disabled="sending"
              >
                Ingresa
              </button>
              <button
                class="btn btn-block custom-btnsecundary no-border"
                @click="signUp()"
              >
                Registrate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "login",
  mixins: [validationMixin],
  data() {
    return {
      email: null,
      password: null,
      visibilityPassword: false,
      security: false,
      error: false,
      form: {
        password: null,
        email: null
      },
      sending: false
    };
  },
  mounted() {
    this.clearForm();
    if (this.$store.getters.isLoggedIn) {
      this.$router.push({ name: "home" });
    }
  },
  validations: {
    form: {
      password: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.password = null;
      this.form.email = null;
    },
    login() {},
    validateForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.onSubmit();
      }
    },
    onSubmit() {
      return this.$router.push({ name: "home" });
    },
    signUp() {
      return this.$router.push({ name: "signup" });
    }
  }
};
</script>
