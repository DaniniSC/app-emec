<template>
  <div class="eliminar-cuenta">
    <p>¿Estás seguro que deseas eliminar tu cuenta?</p>
    <form
      novalidate
      autocomplete="off"
      class="md-layout contenido"
      method="POST"
      @submit.prevent="validateForm"
    >
      <div class="md-layout-item md-size-100 input-login">
        <md-field :class="getValidationClass('textarea')">
          <label for="textarea">
            ¡Tu opinión nos importa! Por favor, cuéntamos la razón por la cual
            eliminas tu cuenta:
          </label>
          <md-textarea
            name="textarea"
            id="textarea"
            autocomplete="textarea"
            v-model="form.textarea"
            :disabled="sending"
            type="textarea"
          ></md-textarea>
          <span class="md-error" v-if="!$v.form.textarea.required">
            Ingresar la razón de tu decisión es requerido
          </span>
        </md-field>
        <md-field :class="getValidationClass('password')">
          <label for="password">
            Ingresa tu contraseña para confirmar la eliminación de tu cuenta
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
      </div>
      <div class="md-layout btn-accion">
        <div class="md-layout-item md-size-100 custom-btn">
          <button
            class="btn btn-block custom-btnsecundary"
            slot="footer"
            type="submit"
            :disabled="sending"
          >
            Eliminar cuenta
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
  name: "DeleteAccount",
  mixins: [validationMixin],
  data() {
    return {
      textarea: null,
      password: null,
      visibilityPassword: false,
      security: false,
      error: false,
      form: {
        password: null,
        textarea: null
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
      textarea: {
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
      this.form.textarea = null;
    },
    login() {},
    validateForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.onSubmit();
      }
    },
    onSubmit() {
      return this.$router.push({ name: "login" });
    }
  }
};
</script>
