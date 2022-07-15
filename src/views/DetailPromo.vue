<template>
  <v-card
    max-width="360"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="#4E2E8A"
      height="84"
    >
      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer class="title-bar">Promo Ekstra</v-spacer>
    </v-app-bar>
    
    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

    <v-app-bar
      dark
      color="#4E2E8A"
      height="30"
    >
      <v-spacer class="desc">Diskon 10.000 untuk pembelian produk apa saja</v-spacer>
    </v-app-bar>

    <v-container>
      <v-card-title class="info-a">Kode Promo</v-card-title>
        <v-card-text class="info-b">MOBILE10</v-card-text>
        <v-btn style="color: #4E2E8A;" icon class="copy">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
        <v-card-text class="info-c">Syarat dan Ketentuan</v-card-text>
        <v-card-text class="info-d">Potongan dapat langsung diperoleh senilai 10.000</v-card-text>
        <v-card-text class="info-d">Minimal total pembelian 90.000</v-card-text>
        <v-card-text class="info-d">Hanya dapat digunakan 1 kali</v-card-text>
        <v-card-text class="info-e">Promo dapat berubah sewaktu-waktu tanpa pemberitahuan, segera lakukan transaksi. </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }),
  }
</script>

<style scoped>
.mdi-content-copy::before {
    content: "\F018F";
    color: red;
}


  .title-bar{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #FFFFFF;

  }
  .desc{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }
  .info-a{
    height: 17px;
    left: 16px;
    top: 388px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  .info-b{
    height: 16px;
    left: 16px;
    top: 417px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #F05E86;
  }
  .info-c{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    height: 17px;
    left: 16px;
    top: 459px;
  }
  .info-d{
    height: 20px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .info-e{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .copy{
    position: absolute;
    width: 20px;
    height: 20px;
    left: 324px;
    top: 415px;
  }
</style>