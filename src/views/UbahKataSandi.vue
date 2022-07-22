<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h3 class="mx-auto">Ubah Profil</h3>
      <v-btn light>
        Simpan
      </v-btn>
    </v-app-bar>
    <v-container class="mt-15">
      <label for="" class="label">Kata Sandi Lama</label>
      <v-text-field
        v-model="oldPassword"
        :rules="passwordRules"
        label="Kata Sandi"
        required
        :append-icon="showOldPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showOldPassword = !showOldPassword"
        :type="showOldPassword ? 'text' : 'password'"
      ></v-text-field>
      <label for="" class="label">Kata Sandi Baru</label>
      <v-text-field
        v-model="newPassword"
        :rules="passwordRules"
        label="Kata Sandi"
        required
        :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showNewPassword = !showNewPassword"
        :type="showNewPassword ? 'text' : 'password'"
      ></v-text-field>
      <label for="" class="label">Konfirmasi Kata Sandi baru</label>
      <v-text-field
        v-model="confirmpassword"
        :rules="passwordRules"
        label="Konfirmasi Kata Sandi"
        required
        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showConfirmPassword = !showConfirmPassword"
        :type="showConfirmPassword ? 'text' : 'password'"
      ></v-text-field>
    </v-container>
    <bottom-navigation />
  </div>
</template>
<script>
export default {
  name: 'UbahKataSandi',
  data() {
    return {
      showOldPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      oldpassword: '',
      newPassword: '',
      confirmpassword: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 6) || 'Min 6 Characters',
      ],
    }
  },
}
</script>

<style></style>
