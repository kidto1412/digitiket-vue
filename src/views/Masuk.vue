<template>
  <div>
    <v-img
      src="../../public/img/logo2.png"
      width="162"
      class="mx-auto mt-5"
    ></v-img>
    <v-img
      src="../../public/img/circle-purple.svg"
      width="50"
      style="position: absolute; right: 0; top: 0;"
    ></v-img>
    <v-container ref="form" class="mb-8" lazy-validation>
      <h3 class="text-purple text-center mt-6 mb-3">
        Selamat datang kembali !
      </h3>
      <v-form v-model="valid">
        <v-container>
          <label for="" class="label">Email</label>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <label for="" class="label">Kata Sandi</label>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Kata Sandi"
            required
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
          ></v-text-field>

          <v-row justify="end" class="mt-2 mb-5">
            <a>Lupa kata sandi?</a>
          </v-row>

          <v-card-actions class="justify-center">
            <v-btn class="btn-purple" color="white--text">
              Masuk
            </v-btn>
          </v-card-actions>
          <div class="separator">Atau</div>
          <v-card-actions class="justify-center">
            <v-btn class="btn-purple" color="white--text">
              <v-icon left dark>
                mdi-google
              </v-icon>
              Daftar Dengan Google
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-form>
    </v-container>
    <v-img
      src="../../public/img/circle-pink.svg"
      style="position: absolute; bottom: 0;"
      width="70"
    ></v-img>
  </div>
</template>
<script>
export default {
  name: 'Masuk',
  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    showPassword: false,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 6) || 'Min 6 Characters',
    ],
  }),
  methods: {
    submit() {},
    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #4e2e8a;
  text-align: right;
  display: inline-block;
}
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #b9b9b9;
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}
</style>
