<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-2)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Konfirmasi Pemesanan</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-card class="mt-16">
      <v-container>
        <h5 class="text-purple">Silahkan periksa kembali pesanan anda</h5>
        <h4 class="mt-5">Tanggal kedatangan</h4>
        <p class="font-weight-light mt-2">Senin, 18 Oktober 2020</p>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <h4>Pemesanan</h4>
        <h5 class="mt-3">Tiket Masuk Anak Rinjani Waterpark</h5>
        <div class="d-flex justify-space-between">
          <p class="font-weight-light">1 Tiket</p>
          <p>IDR 17.500</p>
        </div>
        <h5 class="mt-3">Tiket Masuk Anak Rinjani Waterpark</h5>
        <div class="d-flex justify-space-between">
          <p>1 Tiket</p>
          <p>IDR 17.500</p>
        </div>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <h6 class="mb-2">Promo</h6>
        <div class="d-flex">
          <v-text-field label="Masukkan kode promo" outlined></v-text-field>
          <v-btn class="mt-2 mx-2" disabled>Promo Aktif</v-btn>
        </div>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <h4>Rincian Pembayaran</h4>
      </v-container>
      <v-list>
        <v-list-item-group multiple>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-title
                class="text-purple"
                v-text="item.price"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div style="margin-bottom: 23%"></div>
    <div class="footer">
      <v-card>
        <div class="d-flex justify-space-between" style="line-height: 12px">
          <v-container>
            <p class="text-purple">Total Harga</p>
            <p class="text-purple">IDR 40.000</p>
          </v-container>
          <v-btn color="my-auto mx-5" class="btn-purple text-white">
            Bayar
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "KonfirmasiPemesanan",
  data: () => ({
    items: [
      { text: "Tiket Masuk Anak Rinjani Waterpark", price: "IDR 17.500" },
      { text: "Tiket Masuk Dewasa Rinjani Waterpark", price: "IDR 17.500" },
      { text: "Diskon", price: "IDR 17.500" },
      { text: "Biaya Layanan", price: "IDR 17.500" },
      { text: "Penggunaan Kredit", price: "IDR 17.500" },
    ],
  }),
};
</script>
