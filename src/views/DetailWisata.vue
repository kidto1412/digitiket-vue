<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Judul Wisata</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-tabs class="mt-15" fixed-tabs color="text-purple">
      <v-tab>Ticket</v-tab>
      <v-tab>Informasi</v-tab>
      <v-tab>Lokasi</v-tab>
      <v-tab>Ulasan</v-tab>
    </v-tabs>
    <div>
      <v-img src="../assets/img/rinjani.png"></v-img>
      <div class="d-flex">
        <v-img
          src="../assets/img/rinjani1.png"
          style="max-width: 146px !important;"
        ></v-img>
        <v-img
          src="../assets/img/rinjani2.png"
          style="max-width: 146px !important;"
        ></v-img>
        <div class="thumbnail">
          <v-img
            src="../assets/img/rinjani3.png"
            style="max-width: 146px !important;"
            class="image-text"
          ></v-img>
          <div class="middle">
            Lihat Semua
          </div>
        </div>
      </div>
    </div>
    <v-card>
      <v-container>
        <v-list>
          <h4>Tiket Masuk Anak Rinjani Waterpark</h4>
          <p class="font-weight-light">Usia antara 2 s.d 15 tahun</p>
          <v-list-item style="padding: 0 !important;">
            <v-list-item-content>
              <v-list-item-title>Masa Aktif :</v-list-item-title>
              <v-list-item-title>Harga :</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>1 Hari</v-list-item-title>
              <v-list-item-title>IDR 22.500</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <h4>Ketentuan</h4>
        <div class="d-flex">
          <v-icon class="text-purple">
            mdi-ticket-confirmation
          </v-icon>
          <p class="mt-3 ml-2">Maksimal jumlah tiket per transaksi 15</p>
        </div>
        <div class="d-flex align-center">
          <v-img
            src="../assets/icons/money.svg"
            max-width="20"
            max-height="20"
          ></v-img>
          <p class="mt-4 ml-2 red--text">
            Maksimal jumlah tiket per transaksi 15
          </p>
        </div>
        <div class="d-flex">
          <v-icon class="text-purple">
            mdi-printer
          </v-icon>
          <p class="mt-4 ml-2">Maksimal jumlah tiket per transaksi 15</p>
        </div>
        <div class="d-flex align-center">
          <v-img
            src="../assets/icons/movie.svg"
            max-width="20"
            max-height="20"
            class="ml-1"
          ></v-img>
          <p class="mt-3 ml-2">Maksimal jumlah tiket per transaksi 15</p>
        </div>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <h4 class="mt-2">Informasi Tentang Rinjani Waterpark</h4>
        <p class="mt-5">
          Rinjani Waterpark Lombok merupakan tempat hiburan keluarga yang
          terletak di Lombok Timur. Water park ini mengusung konsep resort
          dengan membangun lebih banyak taman hijau. Dengan begitu pengunjung
          bisa menikmati pemandangan hijau ketika berenang. Wisata liburan
          keluarga ini merupakan tempat wisata terbesar di Nusa Tenggara Barat.
          Dibangun di atas lahan seluas 1,8 hektare juga bisa menjadi lokasi
          resepsi kecil-kecilan atau acara ulang tahun. Taman yang luas bisa
          digunakan untuk acara yang mendatangkan banyak orang.
        </p>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <h4>Lokasi Rinjani Waterpark</h4>
        <div>
          <p>
            Selong JI. Pajanggik. Majidi. Selang Lombok Timur - Nusa Tenggara
            Barat
          </p>
        </div>
        <div style="height: 170px; width: 100%;">
          <l-map
            @click="onCustomClick"
            @update:zoom="updateZoom"
            @update:center="updateCenter"
            :zoom="zoom"
            :center="center"
            style="height: 100%;"
          >
            <l-circle
              :lat-lng="circle.center"
              fillColor="black"
              :fillOpacity="0.7"
              color="red"
              :radius="100000"
            />
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
              :draggable="true"
              @update:latLng="onDrag"
              @click="onLogMarker(item)"
              :lat-lng="getCoord(item.lat, item.long)"
              v-for="item in coordArray"
              :key="item.id"
            >
              <!-- <l-icon :icon-url="icon" :icon-size="iconSize" /> -->
              <l-popup>
                {{ item.name }}
              </l-popup>
            </l-marker>
          </l-map>
        </div>
      </v-container>
    </v-card>

    <div style="margin-bottom: 25%;">
      <v-card>
        <v-container>
          <div class="d-flex mb-3 mt-3">
            <h5>Ulasan Pengunjung Rinajani Waterpark</h5>
            <v-spacer></v-spacer>
            <a href="" class="text-purple">Lihat semua</a>
          </div>
          <v-slide-group v-model="model">
            <v-slide-item v-for="n in 15" :key="n" class="mr-2">
              <v-card>
                <v-row align="center" class="mt-2 mx-2">
                  <v-avatar color="primary" size="36"></v-avatar>
                  <h5 class="mx-2">Nur Ali</h5>
                  <v-rating
                    v-model="rating"
                    class="rating"
                    color="orange"
                    background-color="orange"
                    dense
                    half-increments
                    size="19"
                  ></v-rating>
                </v-row>
                <v-container>
                  <p>Tempatnya bagus, luas dan bersih</p>
                </v-container>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-container>
      </v-card>
    </div>
    <!-- </v-card> -->
    <div class="footer" style="z-index: 9999 !important; margin-top: 22%;">
      <v-card style="z-index: 9999 !important;">
        <div class="d-flex justify-space-between" style="line-height: 12px;">
          <v-container>
            <p class="text-purple">Total Harga</p>
            <p class="text-purple">IDR 40.000</p>
          </v-container>
          <v-btn color="my-auto mx-5" class="btn-purple text-white">
            Beli Sekarang
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { latLng, Icon } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup, LCircle } from 'vue2-leaflet'
import markerimage from './../assets/img/marketimage.png'
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
export default {
  name: 'DetailRinjani',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    // LIcon,
    LCircle,
  },
  methods: {
    getCoord(a, b) {
      return latLng(a, b)
    },
    updateZoom(zoom) {
      console.log('zoom', zoom)
    },
    updateCenter(center) {
      console.log('center', center)
    },
    onDrag({ lat, lng }) {
      console.log('Sürüklenen enlem ve boylam bilgisi', lat, lng)
    },
    onLogMarker(item) {
      console.log('item', item)
    },
    onCustomClick(item) {
      const { latlng } = item
      console.log('enlem boylam bilgisi', latlng)
    },
  },
  data() {
    return {
      rating: 4,
      zoom: 12,
      center: latLng(39.903416, 32.8589),
      url:
        'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=b90e089c365242a3a08dbb49a7084a61',
      attribution: 'Haritamız',
      coordArray: [
        { id: 1, lat: 39.749434, long: 30.520655, name: 'Eskişehir' },
        { id: 2, lat: 39.903416, long: 32.8589, name: 'Ankara' },
      ],
      icon: markerimage,
      iconSize: [20, 20],
      circle: {
        center: latLng(39.903416, 32.8589),
        radius: 100000,
      },
    }
  },
}
</script>
<style scoped>
.lihat-galeri {
  width: 120px;
  height: 60px;
  background: rgba(229, 229, 229, 0.8);
}
.v-tab {
  justify-content: space-evenly !important;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  /* min-width: 90px; */
  max-width: 360px !important;
  padding: 0 !important;
}
.thumbnail {
  position: relative;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  white-space: nowrap;
}

.image-text {
  width: 100%;
  height: 100%;
  opacity: 0.3;
}
</style>
