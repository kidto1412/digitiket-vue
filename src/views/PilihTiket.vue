<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Pemesanan Tiket</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-card>
      <v-container class="mt-15">
        <h5>Tanggal Kedatangan</h5>
      </v-container>
    </v-card>
    <v-card>
      <v-list>
        <v-container>
          <h5>Tiket Masuk Anak Rinjani Waterpak</h5>
          <p class="font-weight-light">Usia antara 2 s.d 15 tahun</p>
        </v-container>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Masa Aktif :</v-list-item-title>
            <v-list-item-title>Harga :</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>: asd</v-list-item-title>
            <v-list-item-title>: asdsa</v-list-item-title>
          </v-list-item-content>

          <div class="d-flex">
            <v-btn class="" light small>
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
            <p class="mx-2">1</p>
            <v-btn class="" light small>
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card>
      <v-list>
        <v-container>
          <h5>Tiket Masuk Anak Rinjani Waterpak</h5>
          <p class="font-weight-light">Usia antara 2 s.d 15 tahun</p>
        </v-container>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Masa Aktif :</v-list-item-title>
            <v-list-item-title>Harga :</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>: asd</v-list-item-title>
            <v-list-item-title>: asdsa</v-list-item-title>
          </v-list-item-content>

          <div class="d-flex">
            <v-btn class="" light small>
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
            <p class="mx-2">1</p>
            <v-btn class="" light small>
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card>
      <v-list>
        <v-container>
          <h5>Tiket Masuk Anak Rinjani Waterpak</h5>
          <p class="font-weight-light">Usia antara 2 s.d 15 tahun</p>
        </v-container>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Masa Aktif :</v-list-item-title>
            <v-list-item-title>Harga :</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>: asd</v-list-item-title>
            <v-list-item-title>: asdsa</v-list-item-title>
          </v-list-item-content>

          <div class="d-flex">
            <v-btn class="" light small>
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
            <p class="mx-2">1</p>
            <v-btn class="" light small>
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
    <div style="margin-bottom: 23%;"></div>
    <div class="footer">
      <v-card>
        <div class="d-flex justify-space-between" style="line-height: 12px;">
          <v-container>
            <p class="text-purple">Total Harga</p>
            <p class="text-purple">IDR 40.000</p>
          </v-container>
          <v-btn color="my-auto mx-5" class="btn-purple text-white">
            Konfirmasi
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PilihTiket',
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
}
</script>

<style>
.v-date-picker-header {
  display: none !important;
}
.footer {
  box-shadow: 2px -5px 18px rgba(0, 0, 0, 0.1) !important;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
