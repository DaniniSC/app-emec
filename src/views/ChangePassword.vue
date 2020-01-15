<template>
  <div class="eliminar-cuenta">
    <form
      novalidate
      autocomplete="off"
      class="md-layout contenido"
      method="POST"
      @submit.prevent="validateForm"
    >
      <div class="md-layout-item md-size-100 input-login">
        <md-field :class="getValidationClass('password')">
          <label for="password">
            Ingresa tu contraseña actual
          </label>
          <md-input
            name="password"
            id="password"
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
        <md-field :class="getValidationClass('newpassword1')">
          <label for="newpassword1">
            Ingresa tu nueva contraseña
          </label>
          <md-input
            name="newpassword1"
            id="newpassword1"
            autocomplete="new-password"
            v-model="form.newpassword1"
            :disabled="sending"
            type="password"
          />
          <span class="md-error" v-if="!$v.form.newpassword1.required">
            La contraseña es requerida
          </span>
          <span class="md-error" v-else-if="!$v.form.newpassword1.minlength">
            Ingresa una contraseña válida
          </span>
        </md-field>
        <md-field :class="getValidationClass('newpassword2')">
          <label for="newpassword2">
            Ingresa nuevamente tu nueva contraseña
          </label>
          <md-input
            name="newpassword2"
            id="newpassword2"
            autocomplete="new-password"
            v-model="form.newpassword2"
            :disabled="sending"
            type="password"
          />
          <span class="md-error" v-if="!$v.form.newpassword2.required">
            La contraseña es requerida
          </span>
          <span class="md-error" v-else-if="!$v.form.newpassword2.minlength">
            Ingresa una contraseña válida
          </span>
        </md-field>
      </div>
      <div class="md-layout btn-accion">
        <div class="md-layout-item md-size-100 custom-btn">
          <button
            class="btn btn-block custom-btnsecundary"
            slot="footer"
            type="submit"
            :disabled="sending"
          >
            Cambiar contraseña
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "ChangePassword",
  mixins: [validationMixin],
  data() {
    return {
      newpassword1: null,
      newpassword2: null,
      password: null,
      visibilityPassword: false,
      security: false,
      error: false,
      form: {
        password: null,
        newpassword1: null,
        newpassword2: null
      },
      sending: false
    };
  },
  mounted() {
    this.clearForm();
  },
  validations: {
    form: {
      password: {
        required
      },
      newpassword1: {
        required
      },
      newpassword2: {
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
      this.form.newpassword1 = null;
      this.form.newpassword2 = null;
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
    }
  }
};
</script>
