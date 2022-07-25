<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Metode Pembayaran</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-list two-line class="mt-15">
      <v-container>
        <h5>Metode Pembayaran</h5>
      </v-container>
      <v-list-item-group
        v-model="selected"
        active-class="purple--text"
        multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{}">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-content>
                <v-img
                  src="../assets/img/bank-mandiri.svg"
                  class="logo-bank"
                  max-height="43"
                  max-width="99"
                ></v-img>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-list two-line>
      <v-container>
        <h5>Direct Payment</h5>
      </v-container>
      <v-list-item-group
        v-model="selected"
        active-class="purple--text"
        multiple
      >
        <template v-for="(item, index) in directs">
          <v-list-item :key="item.title">
            <template v-slot:default="{}">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-content>
                <v-img
                  src="../assets/img/gopay.svg"
                  class="logo-bank"
                  max-height="43"
                  max-width="99"
                ></v-img>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <div style="margin-top: 22%;"></div>
    <div class="footer">
      <v-card>
        <div class="d-flex justify-space-between" style="line-height: 12px;">
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
  name: 'MetodePembayaran',
  data: () => ({
    selected: [],
    items: [
      {
        title: 'Mandiri Bill',
        image_url: '../assets/img/bank-mandiri.svg',
      },
      {
        title: 'Mandiri Bill',
        image_url: '../assets/img/bank-mandiri.svg',
      },
      {
        title: 'Mandiri Bill',
        image_url: '../assets/img/bank-mandiri.svg',
      },
      {
        title: 'Mandiri Bill',
        image_url: '../assets/img/bank-mandiri.svg',
      },
      {
        title: 'Mandiri Bill',
        image_url: '../assets/img/bank-mandiri.svg',
      },
    ],
    directs: [
      {
        title: 'GO PAY',
        image_url: '../assets/img/gopay.svg',
      },
      {
        title: 'GO PAY',
        image_url: '../assets/img/gopay.svg',
      },
    ],
  }),
}
</script>
<style>
/* .v-image__image {
  width: 100% !important;
  object-fit: unset;
} */
</style>
