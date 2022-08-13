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
    <v-card tile class="mt-15">
      <v-list style="width: 100% !importany;">
        <v-container>
          <v-list-item-title class="text-h6 mb-2">
            Foto Profile
          </v-list-item-title>
        </v-container>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>

          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn-menu ma-2" v-bind="attrs" v-on="on">
                Ubah Foto Profil
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="() => {}"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card>
      <v-container>
        <h4 class="mb-5">Data Diri</h4>
        <v-form ref="form" v-model="valid" lazy-validation>
          <label for="" class="label">Nama Depan</label>
          <v-text-field v-model="user.firstname" value=""></v-text-field>
          <label for="" class="label">Nama Belakang</label>
          <v-text-field v-model="user.lastname" value=""></v-text-field>
          <label for="" class="label">Tanggal Lahir</label>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                append-icon="mdi-calendar-month-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <label for="" class="label">Jenis Kelamin</label>
          <v-text-field value="" disabled></v-text-field>
        </v-form>
      </v-container>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-container>
        <h4 class="mb-3">Kontak</h4>
        <label for="" class="label">Email</label>
        <v-text-field
          v-model="user.email"
          append-icon="mdi-checkbox-marked"
        ></v-text-field>
        <label for="" class="label">Nomor Handphone</label>
        <v-text-field
          v-model="user.phone"
          append-icon="mdi-checkbox-marked"
        ></v-text-field>
      </v-container>
    </v-card>
    <v-card class="py-3">
      <v-container>
        <div class="d-flex">
          <h5>Ubah Kata Sandi</h5>
          <v-spacer></v-spacer>
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </v-container>
    </v-card>
    <bottom-navigation />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    BottomNavigation: () =>
      import(
        /* webpackChunkName: "search" */ '@/components/BottomNavigation.vue'
      ),
  },
  name: 'UbahProfil',
  // props: ['profil'],
  data() {
    return {
      valid: true,
      profil: {},
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      items: [
        {
          title: 'Pilih foto dari galeri',
        },
        {
          title: 'Hapus foto',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      guest: 'auth/guest',
      user: 'auth/user',
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
    }),
  },
  created() {},
  methods: {
    load() {
      this.axios
        .post('https://digitiket.id/api/v1/login')
        .then((response) => {
          let { data } = response.data
          this.user = data
        })
        .catch((error) => {
          let responses = error.response
          console.log(responses.data.message)
        })
    },
    edit(user) {
      this.form.email = user.email
    },
    // go() {
    //   let { id } = this.$route.params
    //   let url = 'https://digitiket.id/users/id/' + id
    //   url = url + '?page=' + this.page
    //   url = encodeURI(url)
    //   this.axios
    //     .get(url)
    //     .then((response) => {
    //       let { data } = response.data
    //       this.book = data
    //       this.loading = false
    //     })
    //     .catch((error) => {
    //       let { responses } = error
    //       console.log(responses)
    //     })
    // },
  },

  update() {},
}
</script>

<style>
.btn-menu {
  background-color: transparent !important;
  box-shadow: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
}
.v-input__icon--append .v-icon {
  color: purple !important;
}
.v-input__icon--append .v-icon.mdi-checkbox-marked {
  color: #90ebb7 !important;
}
</style>
