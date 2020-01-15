<template>
  <div class="login">
    <div class="md-layout">
      <div class="card-login">
        <h2>REGISTRO</h2>
        <form
          novalidate
          autocomplete="off"
          class="md-layout contenido"
          method="POST"
          @submit.prevent="validateForm"
        >
          <div class="md-layout-item md-size-100 contenedor-logo logo-registro">
            <img alt="Logo" width="160" src="../assets/images/logo.svg" />
            <h1>e-mec</h1>
          </div>
          <div class="md-layout-item md-size-100">
            <!-- Nombre -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('name')">
                <label for="name">Nombre</label>
                <md-input
                  name="name"
                  id="name"
                  autocomplete="nope"
                  v-model="form.name"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.name.required">
                  El nombre es requerido
                </span>
              </md-field>
            </div>
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
            <!-- Vehìculo - Marca -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('car.brand')">
                <label for="brand">Marca</label>
                <md-input
                  name="brand"
                  id="brand"
                  autocomplete="nope"
                  v-model="form.car.brand"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.car.brand.required">
                  Ingresa la marca del vehículo
                </span>
              </md-field>
            </div>
            <!-- Vehìculo - Modelo -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('car.model')">
                <label for="model">Modelo</label>
                <md-input
                  name="model"
                  id="model"
                  autocomplete="nope"
                  v-model="form.car.model"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.car.model.required">
                  Ingresa el modelo del vehículo
                </span>
              </md-field>
            </div>
            <!-- Vehìculo - Año -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('car.year')">
                <label for="year">Año</label>
                <md-input
                  name="year"
                  id="year"
                  autocomplete="nope"
                  v-model="form.car.year"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.car.year.required">
                  El año es requerido
                </span>
              </md-field>
            </div>
            <!-- Vehìculo - Transmisión -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('car.transmition')">
                <label for="transmition">Transmisión</label>
                <md-input
                  name="transmition"
                  id="transmition"
                  autocomplete="nope"
                  v-model="form.car.transmition"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.car.transmition.required">
                  Ingresa la transmisión (Mecánica/Automática)
                </span>
              </md-field>
            </div>
            <!-- Vehìculo - Combustible -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('car.gas')">
                <label for="gas">Combustible</label>
                <md-input
                  name="gas"
                  id="gas"
                  autocomplete="nope"
                  v-model="form.car.gas"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.car.gas.required">
                  Ingresa el combustible (Diesel/Bencina/Eléctrico)
                </span>
              </md-field>
            </div>
            <!-- Vehìculo - Cilindrada -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('car.motor')">
                <label for="motor">Cilindrada</label>
                <md-input
                  name="motor"
                  id="motor"
                  autocomplete="nope"
                  v-model="form.car.motor"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.car.motor.required">
                  Ingresa la cilindrada
                </span>
              </md-field>
            </div>
            <!-- Contraseña -->
            <div class="md-layout-item md-size-100 input-login">
              <md-field :class="getValidationClass('password')">
                <label for="password">Ingresa una contraseña</label>
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
                Regístrate
              </button>
              <button
                class="btn btn-block custom-btnsecundary no-border"
                @click="login()"
              >
                ¿Tienes una cuenta? Inicia sesión
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
  name: "SignUp",
  mixins: [validationMixin],
  data() {
    return {
      email: null,
      password: null,
      visibilityPassword: false,
      security: false,
      error: false,
      form: {
        name: null,
        email: null,
        car: {
          brand: null,
          model: null,
          year: null,
          transmition: null,
          gas: null,
          motor: null
        },
        password: null
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
      name: {
        required
      },
      car: {
        brand: { required },
        model: { required },
        year: { required },
        transmition: { required },
        gas: { required },
        motor: { required }
      },
      email: {
        required,
        email
      },
      password: {
        required
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
    validateForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.onSubmit();
      }
    },
    onSubmit() {
      return this.$router.push({ name: "home" });
    },
    login() {
      return this.$router.push({ name: "login" });
    }
  }
};
</script>
