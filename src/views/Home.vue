<template>
  <div style="overflow: hidden">
    <v-app-bar class="d-bg-purple" fixed dark>
      <v-img
        src="../../public/img/logo-digitiket-white.png"
        style="max-width: 113px"
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn icon @click="setDialogComponent('search')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="setDialogComponent('Notification')">
        <v-badge color="pink" overlap>
          <!-- <template v-slot:badge v-if="countCart > 0">
            <span class="white--text">{{ countCart }}</span>
          </template> -->
          <template v-slot:badge>
            <span class="white--text"></span>
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
          <v-avatar color="primary" size="36" v-if="user.image_ext != null">
            <v-img src=""></v-img>
          </v-avatar>
          <v-avatar color="grey" size="36" v-else>
            <v-icon dark>mdi-account</v-icon>
          </v-avatar>
          <p class="ms-2 mt-4 white--text">
            {{ user.firstname + " " + user.lastname }}
          </p>
        </div>
        <div class="d-flex align-center mt-15 mb-4" v-else>
          <v-avatar color="grey" size="36">
            <v-icon dark>mdi-account</v-icon>
          </v-avatar>
          <p class="ms-2 mt-4 white--text">Hi, Welcome</p>
        </div>
        <point-kredit />
        <!-- <v-container class="mx-auto">
          <kategori class="w-100 px-4"></kategori>
        </v-container> -->
        <h5 class="my-3 white--text">Kategori</h5>
        <div class="kategori">
          <v-card class="d-flex justify-space-around">
            <div class="mt-2">
              <v-btn to="/attraction" class="d-bg-purple ma-2" outlined dark>
                <v-img
                  src="../../public/img/icons/flying-chairs.svg"
                  width="30"
                  style="margin: 10px"
                ></v-img>
              </v-btn>
              <h5 class="text-center">Attraction</h5>
            </div>
            <div class="mt-2">
              <v-btn class="d-bg-purple ma-2" outlined dark to="event">
                <v-img src="../../public/img/icons/calendar.svg"></v-img>
              </v-btn>
              <h5 class="text-center">Event</h5>
            </div>
            <div class="mt-2">
              <v-btn class="d-bg-purple ma-2" outlined dark to="/tour">
                <v-img src="../../public/img/icons/location.svg"></v-img>
              </v-btn>
              <h5 class="text-center">Tour</h5>
            </div>
            <div class="mt-2">
              <v-btn class="d-bg-purple ma-2" outlined dark to="/virtual-tour">
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
        <a href="/promo-terkini" class="text-purple">Lihat Semua</a>
      </div>
      <keep-alive>
        <v-slide-group class="mr-2">
          <v-slide-item v-for="itempromo in promo" :key="itempromo.index">
            <v-card :to="'/detail-promo/' + itempromo.id">
              <v-img :src="itempromo.image_url" class="banner mr-2"></v-img>
              <!-- :to="'/detail-wisata/' + item.slug" -->
            </v-card>
            <!-- <v-imgp -->
          </v-slide-item>
        </v-slide-group>
      </keep-alive>
    </v-container>
    <hr class="mt-5" />
    <v-container>
      <div class="my-5">
        <div class="d-flex justify-space-between my-2 align-center">
          <h3>Disarankan Untuk Anda</h3>
          <a href="/tickets" class="text-purple">Lihat Semua</a>
        </div>
        <v-slide-group class="mr-2">
          <v-slide-item v-for="item in rekomendasi" :key="item.slug">
            <v-card
              class="card-shadow card-radius mr-2 mb-2"
              style="width: 15rem"
              :to="'/detail-wisata/' + item.slug"
            >
              <v-img
                :src="item.image"
                class="card-image card-image-top"
                aspect-ratio="1.7"
              ></v-img>

              <v-card-title>
                {{ item.title }}
              </v-card-title>

              <!-- <v-card-text> -->
              <div class="d-flex ml-2">
                <v-icon>mdi-map-marker</v-icon>
                <div class="text-subtitle-2">
                  {{ item.cityprov }}
                </div>
              </div>

              <div class="d-flex justify-space-between align-center mx-4">
                <div class="my-4 text-subtitle-1 price purple--text">
                  IDR
                  {{ converter(item.price && item.price.price_ori) }}
                </div>

                <v-rating
                  :value="item.specialrate"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-container>
    <hr />
    <v-container>
      <div class="mt-5">
        <div class="d-flex justify-space-between my-2 align-center">
          <h3>Wisata Populer</h3>
          <a href="/tickets" class="text-purple">Lihat Semua</a>
        </div>

        <v-slide-group class="mr-2">
          <v-slide-item v-for="itemPopuler in populer" :key="itemPopuler.id">
            <v-card
              class="card-shadow card-radius mr-2 mb-2"
              style="width: 15rem"
              :to="'/detail-wisata/' + itemPopuler.slug"
            >
              <v-img
                :src="itemPopuler.image"
                class="card-image card-image-top"
                aspect-ratio="1.7"
              ></v-img>

              <v-card-title>
                {{ itemPopuler.title }}
              </v-card-title>

              <!-- <v-card-text> -->
              <div class="d-flex ml-2">
                <v-icon>mdi-map-marker</v-icon>
                <div class="text-subtitle-1">
                  {{ itemPopuler.cityprov }}
                </div>
              </div>

              <div class="d-flex justify-space-between align-center mx-4">
                <div class="my-4 text-subtitle-1 price purple--text">
                  IDR
                  {{
                    converter(itemPopuler.price && itemPopuler.price.price_ori)
                  }}
                </div>

                <v-rating
                  :value="itemPopuler.specialrate"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-container>
    <hr class="mt-5" />
    <v-container>
      <div class="mt-5">
        <div class="d-flex justify-space-between my-2 align-center">
          <h3>Wisata Terbaru</h3>
          <a href="/tickets" class="text-purple">Lihat Semua</a>
        </div>

        <v-slide-group class="mr-2">
          <v-slide-item v-for="itemBaru in terbaru" :key="itemBaru.id">
            <v-card
              class="card-shadow card-radius mr-2 mb-2"
              style="width: 15rem"
              :to="'/detail-wisata/' + itemBaru.slug"
            >
              <v-img
                :src="itemBaru.image"
                class="card-image card-image-top"
                aspect-ratio="1.7"
              ></v-img>

              <v-card-title>
                {{ itemBaru.title }}
              </v-card-title>

              <!-- <v-card-text> -->
              <div class="d-flex ml-2">
                <v-icon>mdi-map-marker</v-icon>
                <div class="text-subtitle-1">
                  {{ itemBaru.cityprov }}
                </div>
              </div>

              <div class="d-flex justify-space-between align-center mx-4">
                <div class="my-4 text-subtitle-1 price purple--text">
                  IDR
                  {{ converter(itemBaru.price && itemBaru.price.price_ori) }}
                </div>

                <v-rating
                  :value="itemBaru.specialrate"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-container>

    <div class="mt-15"></div>
    <bottom-navigation />
  </div>
</template>

<script>
import BottomNavigation from "../components/BottomNavigation.vue";
// import CardItem from '../components/CardItem.vue'
import { mapActions, mapGetters } from "vuex";
import PointKredit from "../components/PointKredit.vue";
import converter from "../mixins/converter";

// import Kategori from '../components/Kategori.vue'

// import CardItem from '../components/CardItem.vue'

export default {
  name: "Home",
  components: {
    // CardItem,
    BottomNavigation,

    Search: () =>
      import(/* webpackChunkName: "search" */ "@/components/Search.vue"),
    Notification: () =>
      import(
        /* webpackChunkName: "Notification" */ "@/components/Notification.vue"
      ),
    PointKredit,
  },
  data() {
    return {
      promo: [],
      rekomendasi: [],
      populer: [],
      terbaru: [],
      keyword: "",
    };
  },
  computed: {
    ...mapGetters({
      dialogStatus: "dialog/status",
      currentComponent: "dialog/component",
      guest: "auth/guest",
      user: "auth/user",
    }),
    dialog: {
      set(value) {
        return this.setDialogStatus(value);
      },
      get() {
        return this.dialogStatus;
      },
    },
  },
  created() {
    this.axios.get("/promo").then((response) => {
      let { data } = response.data;
      // let { image_url } = data
      this.promo = data;
      // console.log('data promo' + response.data)
    });
    this.axios.get("/cardInfo?status=selling").then((response) => {
      let { data } = response.data;
      this.rekomendasi = data;
    });
    this.axios.get("/cardInfo?sort=view=10").then((response) => {
      let { data } = response.data;
      this.populer = data;
    });
    this.axios.get("/cardInfo?sort=rand=10").then((response) => {
      let { data } = response.data;
      this.terbaru = data;
    });
  },

  methods: {
    ...mapActions({
      setDialogStatus: "dialog/setStatus",
      setDialogComponent: "dialog/setComponent",
      setAuth: "auth/set",
    }),
    closeDialog(value) {
      this.dialog = value;
    },
  },

  mixins: [converter],
};
</script>

<style scoped>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
  border: none !important;
  position: fixed;
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
  content: "";
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
  width: 328px;
  height: 121.5px;
}

.card-radius {
  border-radius: 10px;
}
/* .v-image {
  background-repeat: no-repeat;
  height: 200px !important;
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
  object-fit: cover !important;
  background-size: cover !important;
} */
.v-card__title {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
}

.price {
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
}

.card-img,
.card-img-top {
  border-top-left-radius: 18px !important;
  border-top-right-radius: 18px !important;
  object-fit: cover !important;
}
.card-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
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
