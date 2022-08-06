<template>
  <div style="overflow: hidden;">
    <v-app-bar class="d-bg-purple" fixed dark>
      <v-img
        src="../../public/img/logo-digitiket-white.png"
        style="width: 10px;"
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn icon @click="setDialogComponent('search')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="setDialogComponent('Notification')">
        <v-badge color="pink" overlap>
          <template v-slot:badge v-if="countCart > 0">
            <span class="white--text">{{ countCart }}</span>
          </template>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <keep-alive>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialogbottom-transition"
      >
        <component :is="currentComponent" @closed="setDialogStatus"></component>
        <!-- <search @closed="closeDialog" /> -->
      </v-dialog>
    </keep-alive>
    <section class="hero pt-5">
      <v-container>
        <div class="d-flex align-center mt-15 mb-4" v-if="!guest">
          <v-avatar color="primary" size="36">
            <v-img src=""></v-img>
          </v-avatar>
          <p class="ms-2 mt-4 white--text">
            {{ user.firstname + ' ' + user.lastname }}
          </p>
        </div>
        <div class="d-flex align-center mt-15 mb-4" v-else>
          <v-avatar color="grey" size="36">
            <v-icon dark>mdi-account</v-icon>
          </v-avatar>
          <p class="ms-2 mt-4 white--text">Hi, Welcome</p>
        </div>
        <v-row no-gutters class="my-3 font-weight-bold">
          <v-card
            align="center"
            class="point-card mr-3"
            style="border-radius: 10px;"
          >
            <div class="d-flex align-center pl-2">
              <v-img
                src="../assets/icons/icon-money.svg"
                style="width: 20px; height: 20px;"
              ></v-img>
              <v-card-text>100 Poins</v-card-text>
            </div>
          </v-card>
          <v-card
            align="center"
            class="point-card"
            style="border-radius: 10px;"
          >
            <div class="d-flex align-center pl-2">
              <v-img
                src="../assets/icons/icon-credit-card.svg"
                style="width: 20px; height: 20px;"
              ></v-img>
              <v-card-text>
                15.000 Kredits
              </v-card-text>
            </div>
          </v-card>
        </v-row>
        <!-- <v-container class="mx-auto">
          <kategori class="w-100 px-4"></kategori>
        </v-container> -->
        <h5 class="my-3 white--text">Kategori</h5>
        <div class="kategori">
          <v-card class="d-flex justify-center">
            <div class="mt-2">
              <v-btn class="d-bg-purple ma-2" outlined dark>
                <v-img
                  src="../../public/img/icons/flying-chairs.svg"
                  width="30"
                  style="margin: 10px;"
                ></v-img>
              </v-btn>
              <h5 class="text-center">Attraction</h5>
            </div>
            <div class="mt-2">
              <v-btn class="d-bg-purple ma-2" outlined dark>
                <v-img src="../../public/img/icons/calendar.svg"></v-img>
              </v-btn>
              <h5 class="text-center">Event</h5>
            </div>
            <div class="mt-2">
              <v-btn class="d-bg-purple ma-2" outlined dark>
                <v-img src="../../public/img/icons/location.svg"></v-img>
              </v-btn>
              <h5 class="text-center">Tour</h5>
            </div>
            <div class="mt-2">
              <v-btn class="d-bg-purple ma-2" outlined dark>
                <v-img src="../../public/img/icons/Group.svg"></v-img>
              </v-btn>
              <h5 class="text-center align-center">
                Virtual
                <br />
                Tour
              </h5>
            </div>
          </v-card>
        </div>
      </v-container>
    </section>
    <hr class="mt-3" />
    <v-container>
      <div class="d-flex justify-space-between mt-3 mb-3 align-center">
        <h3>Promo Terkini</h3>
        <a href="" class="text-purple">Lihat Semua</a>
      </div>
      <v-slide-group class="mr-2">
        <v-slide-item v-for="n in 3" :key="n" ke>
          <v-img src="../../public/img/banner1.png" class="banner mr-2"></v-img>
        </v-slide-item>
      </v-slide-group>
    </v-container>
    <hr class="mt-5" />
    <v-container>
      <div class="my-5">
        <div class="d-flex justify-space-between my-2 align-center">
          <h3>Disarankan Untuk Anda</h3>
          <a href="" class="text-purple">Lihat Semua</a>
        </div>
        <v-slide-group class="mr-2">
          <v-slide-item v-for="n in 3" :key="n" ke>
            <card-item class="mr-2" />
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-container>
    <hr />
    <v-container>
      <div class="mt-5">
        <div class="d-flex justify-space-between my-2 align-center">
          <h3>Wisata Populer</h3>
          <a href="" class="text-purple">Lihat Semua</a>
        </div>

        <v-slide-group class="mr-2">
          <v-slide-item v-for="n in 3" :key="n" ke>
            <card-item class="mr-2" />
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-container>
    <hr class="mt-5" />
    <v-container>
      <div class="mt-5">
        <div class="d-flex justify-space-between my-2 align-center">
          <h3>Wisata Terbaru</h3>
          <a href="" class="text-purple">Lihat Semua</a>
        </div>

        <v-slide-group class="mr-2">
          <v-slide-item v-for="n in 3" :key="n" ke>
            <card-item class="mr-2" />
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-container>

    <div class="mt-15"></div>
    <bottom-navigation />
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'
import CardItem from '../components/CardItem.vue'
import { mapActions, mapGetters } from 'vuex'

// import Kategori from '../components/Kategori.vue'

// import CardItem from '../components/CardItem.vue'

export default {
  name: 'Home',
  components: {
    CardItem,
    BottomNavigation,

    Search: () =>
      import(/* webpackChunkName: "search" */ '@/components/Search.vue'),
    Notification: () =>
      import(
        /* webpackChunkName: "Notification" */ '@/components/Notification.vue'
      ),
  },
  computed: {
    ...mapGetters({
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
      guest: 'auth/guest',
      user: 'auth/user',
    }),
    dialog: {
      set(value) {
        return this.setDialogStatus(value)
      },
      get() {
        return this.dialogStatus
      },
    },
  },
  methods: {
    ...mapActions({
      setDialogStatus: 'dialog/setStatus',
      setDialogComponent: 'dialog/setComponent',
      setAuth: 'auth/set',
    }),
    closeDialog(value) {
      this.dialog = value
    },
  },
}
</script>
CardItem
<style scoped>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
  border: none !important;
  position: fixed;
}

.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  height: 36px;
}

.hero {
  position: relative;
  background-color: white;
  /* margin-top: 74px; */
}
.hero * {
  position: relative;
}
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 0;
  background: linear-gradient(165.23deg, #4e2e8a 30.28%, #f05e86 121.66%);
  border-radius: 0px 0px 25% 25%;
}

.banner {
  border-radius: 10px;
}

@media (max-width: 360px) {
  .banner {
    width: 290px;
  }
}
@media (max-width: 280px) {
  .banner {
    width: 210px;
  }
}
</style>
