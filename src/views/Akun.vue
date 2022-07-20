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
    <v-card tile>
      <v-list style="width: 100% !importany;">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6 mb-2">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
            <v-list-item-subtitle>0812 8362 9283</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-container>
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
        </v-container>
      </v-list>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-container>
        <h4>Akun</h4>
      </v-container>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" class="d-purple">
          <v-list-item v-for="(item, i) in akun" :key="i">
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
    <v-card class="mb-14">
      <v-container>
        <h4>Umum</h4>
      </v-container>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" class="d-purple">
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
    <bottom-navigation />
  </div>
</template>
<script>
import BottomNavigation from '../components/BottomNavigation.vue'
export default {
  components: { BottomNavigation },
  name: 'Akun',
  data: () => ({
    // selectedItem: 0,
    akun: [
      { text: 'Ubah Profil', icon: 'mdi-account' },
      { text: 'Undang Teman', icon: 'mdi-account-group' },
    ],
    umum: [
      { text: 'Syarat dan Ketentuan', icon: 'mdi-note-multiple' },
      { text: 'Kebijakan Privasi', icon: 'mdi-shield-lock' },
      { text: 'Pusat Bantuan', icon: 'mdi-help-circle' },
      { text: 'Berita Rating Aplikasi', icon: 'mdi-star-settings' },
    ],
  }),
}
</script>
<style scoped></style>
