<template>
  <div>
    <div style="position: relative; top: 10px;">
      <v-card class="mx-5" style="z-index: 99999;">
        <v-container>
          <v-row class="align-center">
            <v-icon class="text-purple ml-2">mdi-map-marker</v-icon>
            <p class="align-center mt-4 ml-3">
              Jakarta Selatan, Jakarta
            </p>
          </v-row>
        </v-container>
      </v-card>
    </div>
    <div style="height: 100%; width: 100%; position: absolute; top: 0;">
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
      <div style="position: absolute; bottom: 80px;" class="ml-4">
        <v-card style="z-index: 999;">
          <v-container>
            <v-row>
              <v-icon class="text-purple ml-2">mdi-map-marker-radius</v-icon>
              <p class="mt-4 mx-4">Lihat wisata disekitar mu</p>
            </v-row>
          </v-container>
        </v-card>
      </div>
      <bottom-navigation style="z-index: 99999;"></bottom-navigation>
    </div>
  </div>
</template>

<script>
import { latLng, Icon } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup, LCircle } from 'vue2-leaflet'
import markerimage from './../assets/img/marketimage.png'
import BottomNavigation from '../components/BottomNavigation.vue'
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
export default {
  name: 'Lokasi',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    // LIcon,
    LCircle,
    BottomNavigation,
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

<style>
.leaflet-left .leaflet-control {
  margin-left: 10px;
  display: none;
}
</style>
