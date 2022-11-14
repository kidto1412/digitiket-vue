<template>
  <div>
    <div>
      <v-img
        src="../assets/img/logo2.png"
        width="162"
        class="mx-auto mt-5"
      ></v-img>
      <v-img
        src="../assets/img/circle-purple.svg"
        width="50"
        style="position: absolute; right: 0; top: 0"
      ></v-img>
      <v-container class="mb-8">
        <h3 class="text-purple text-center mt-6 mb-3">
          Selamat datang kembali !
        </h3>
        <v-form v-model="valid" ref="form" lazy-validation>
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
            <div v-if="loading">
              <v-container fill-height fluid>
                <v-row align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="purple"
                  ></v-progress-circular>
                </v-row>
              </v-container>
            </div>
            <v-card-actions class="justify-center">
              <v-btn class="btn-purple" color="white--text" @click="submit">
                Masuk
              </v-btn>
            </v-card-actions>
            <div class="separator">Atau</div>
            <v-card-actions class="justify-center">
              <v-btn class="btn-purple" color="white--text">
                <v-icon left dark> mdi-google </v-icon>
                Daftar Dengan Google
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-form>
      </v-container>
      <v-img
        src="../assets/img/circle-pink.svg"
        style="position: absolute; bottom: 0"
        width="70"
      ></v-img>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Masuk",
  data: () => ({
    loading: false,
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    showPassword: false,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Min 6 Characters",
    ],
  }),
  computed: {
    ...mapGetters({
      user: "auth/user",
      prevUrl: "prevUrl",
    }),
  },
  methods: {
    ...mapActions({
      setAlert: "alert/set",
      setAuth: "auth/set",
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = !false;
        let formData = {
          email: this.email,
          password: this.password,
        };
        this.axios
          .post("/login", formData)
          .then((response) => {
            let { data } = response.data;
            console.log(response.data);
            localStorage.setItem("jwt_token", data.jwt_token);
            this.setAuth(data);
            if (this.user.id > 0) {
              this.setAlert({
                status: true,
                color: "success",
                text: "Login success",
              });
              this.loading = false;
              if (this.prevUrl.length > 0) {
                this.$router.push(this.prevUrl);
              } else {
                this.$router.push({ name: "Home" });
              }
              // this.close();
            } else {
              this.loading = false;
              this.setAlert({
                status: true,
                color: "error",
                text: "Login failed",
              });
            }
          })
          .catch((error) => {
            this.loading = false;
            let responses = error.response;
            this.setAlert({
              status: true,
              text: responses.data.message,
              color: "error",
            });
          });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
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
  content: "";
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
