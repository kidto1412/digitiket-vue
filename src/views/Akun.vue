<template>
  <div>
    <v-toolbar dark class="d-bg-purple">
      <h3 class="mx-auto">Akun</h3>
      <v-btn icon @click="setDialogComponent('Notification')">
        <v-badge color="pink" overlap>
          <template v-slot:badge v-if="countCart > 0">
            <span class="white--text">{{ countCart }}</span>
          </template>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
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
    <v-card tile>
      <v-list style="width: 100% !importany" v-if="!guest">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6 mb-2">
              {{ user.firstname + " " + user.lastname }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ user.cellphone }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-container>
          <point-kredit />
        </v-container>
      </v-list>
      <div v-else></div>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-container>
        <h4>Akun</h4>
      </v-container>
      <v-list nav dense v-if="!guest">
        <v-list-item-group class="d-purple">
          <v-card
            style="box-shadow: none !important"
            :to="'/ubah-profil/' + user.id"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="d-purple">mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Ubah Profil</v-list-item-title>
              </v-list-item-content>

              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item>
          </v-card>
        </v-list-item-group>
      </v-list>
      <div v-else>
        <v-list>
          <v-card to="/masuk" class="none-shadow">
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="d-purple">mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Masuk</v-list-item-title>
              </v-list-item-content>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item>
          </v-card>
        </v-list>
        <v-list style="margin-top: -20px">
          <v-card to="/daftar" class="none-shadow">
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="d-purple">mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Daftar</v-list-item-title>
              </v-list-item-content>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item>
          </v-card>
        </v-list>
      </div>
    </v-card>
    <v-divider></v-divider>
    <v-card class="none-shadow">
      <v-container>
        <h4>Umum</h4>
      </v-container>
      <v-list nav dense>
        <v-list-item-group class="d-purple">
          <v-list-item v-for="(item, i) in umum" :key="i">
            <v-list-item-icon>
              <v-icon class="d-purple" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-divider></v-divider>
    <v-card class="mb-13" color="none-shadow">
      <v-list-item-group class="d-purple">
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon class="d-purple"> mdi-logout </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Keluar </v-list-item-title>
          </v-list-item-content>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item>
      </v-list-item-group>
    </v-card>
    <div class="mt-15"></div>
    <bottom-navigation />
  </div>
</template>
<style scoped></style>
<script>
import BottomNavigation from "../components/BottomNavigation.vue";
import { mapActions, mapGetters } from "vuex";
import PointKredit from "../components/PointKredit.vue";
export default {
  components: {
    BottomNavigation,
    PointKredit,
  },

  name: "Akun",
  data: () => ({
    loading: false,
    // selectedItem: 0,
    akun: [
      { text: "Ubah Profil", icon: "mdi-account", to: "/ubah-profil" },
      { text: "Undang Teman", icon: "mdi-account-group" },
    ],
    umum: [
      { text: "Syarat dan Ketentuan", icon: "mdi-note-multiple" },
      { text: "Kebijakan Privasi", icon: "mdi-shield-lock" },
      { text: "Pusat Bantuan", icon: "mdi-help-circle" },
      { text: "Berita Rating Aplikasi", icon: "mdi-star-settings" },
    ],
  }),
  computed: {
    ...mapGetters({
      countCart: "cart/count",
      guest: "auth/guest",
      user: "auth/user",
      dialogStatus: "dialog/status",
      currentComponent: "dialog/component",
    }),
    isHome() {
      return this.$route.path === "/";
    },
    isLogin() {
      return this.$route.path === "/login";
    },
    isRegister() {
      return this.$route.path === "/register";
    },
    dialog: {
      get() {
        return this.dialogStatus;
      },
      set(value) {
        return this.setDialogStatus(value);
      },
    },
  },
  methods: {
    ...mapActions({
      setDialogStatus: "dialog/setStatus",
      setDialogComponent: "dialog/setComponent",
      setAuth: "auth/set",
      setAlert: "alert/set",
      fetchUser: "auth/fetchUser",
    }),

    ubahProfil(user) {
      this.$router.push({ name: "ubahprofil", params: { detail: user } });
    },

    closeDialog(value) {
      this.dialog = value;
    },

    logout() {
      this.loading = !false;
      let config = {
        headers: {
          Authorization: "Bearer " + this.user.jwt_token,
        },
      };
      this.axios
        .post("/logout", {}, config)
        .then(() => {
          localStorage.removeItem("jwt_token");
          this.$router.push({ path: "/masuk" });
          this.setAuth({});
          this.setAlert({
            status: true,
            color: "success",
            text: "Logout successfully",
          });
          this.loading = false;
        })
        .catch((error) => {
          let { data } = error.response;
          this.setAlert({
            status: true,
            color: "error",
            text: data.message,
          });
          this.loading = false;
        });
    },
  },
  created() {
    this.fetchUser();
    let config = {
      headers: {
        Authorization: "Bearer " + this.user.jwt_token,
      },
    };
    this.axios.get("/get/point", config).then((response) => {
      let { data } = response.data;
      this.point = data.content;
    });

    this.axios.get("/get/credit", config).then((response) => {
      let { data } = response.data;
      this.credit = data.content;
    });
  },
};
</script>
<style scoped>
.none-shadow {
  box-shadow: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
