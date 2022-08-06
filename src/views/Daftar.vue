<template>
  <div>
    <v-img
      src="../assets/img/logo2.png"
      width="162"
      class="mx-auto mt-5"
    ></v-img>
    <v-img
      src="../assets/img/circle-purple.svg"
      width="50"
      style="position: absolute; right: 0; top: 0;"
    ></v-img>
    <v-container class="mb-8">
      <h3 class="text-purple ml-2 mt-8">Buat Akun</h3>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="6" md="4">
              <label for="" class="label">Nama Depan</label>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="Nama Depan"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" md="4">
              <label for="" class="label">Nama Belakang</label>
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Nama Belakang"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <label for="" class="label">Email</label>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
          <label for="" class="label">Nomor Handphone</label>
          <v-text-field
            v-model="phoneNumber"
            label="Nomor Handphone"
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
          <label for="" class="label">Konfirmasi Kata Sandi</label>
          <v-text-field
            v-model="confirmPassword"
            :rules="passwordRules"
            label="Konfirmasi Kata Sandi"
            required
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
          ></v-text-field>
          <v-card-actions class="justify-center">
            <v-btn class="btn-purple" color="white--text" @click="submit">
              Daftar
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
      src="../assets/img/circle-pink.svg"
      style="position: absolute; bottom: 0;"
      width="70"
    ></v-img>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Daftar',
  data: () => ({
    valid: true,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    phoneNumber: '',
    showPassword: false,
    showConfirmPassword: false,
    password: '',
    confirmPassword: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 6) || 'Min 6 Characters',
    ],
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
      setAuth: 'auth/set',
    }),
    submit() {
      if (this.$refs.form.validate()) {
        let formData = new FormData()
        formData.set('firstname', this.firstname)
        formData.set('lastname', this.lastname)
        formData.set('email', this.email)
        formData.set('password', this.password)
        formData.set('cellphone', this.phoneNumber)
        formData.set('password', this.password)

        if (this.password == this.confirmPassword) {
          this.axios
            .post('https://digitiket.id/api/v1/registration', formData)
            .then((response) => {
              let { data } = response.data
              this.setAuth(data)
              this.setAlert({
                status: true,
                color: 'success',
                text: 'Register success',
              })
              // this.close()
              this.$router.push({ name: 'Home' })
            })
            .catch((error) => {
              let { data } = error.response.data
              this.setAlert({
                status: true,
                color: 'error',
                text: data.message,
              })
            })
        } else {
          this.setAlert({
            status: true,
            color: 'error',
            text: 'Kata Sandi Tidak Sama',
          })
        }
      }
    },
    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style scoped>
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
