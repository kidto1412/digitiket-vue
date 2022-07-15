<template>
  <v-card style="height: 100vh;">
    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
    <div class="desc">Diskon 10.000 untuk pembelian produk apa saja</div>

    <v-container>
      <h1 class="info-a mt-6">Kode Promo</h1>
      
      <div class="d-flex justify-space-between">
        <p class="info-b mt-3 mb-5">MOBILE10</p>
        <v-btn style="color: #4E2E8A;" icon class="copy">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </div>

      <p class="info-c mb-2">Syarat dan Ketentuan</p>
      <p class="info-d">Potongan dapat langsung diperoleh senilai 10.000<br>Minimal total pembelian 90.000<br>Hanya dapat digunakan 1 kali<br><b>Promo dapat berubah sewaktu-waktu tanpa pemberitahuan, segera lakukan transaksi</b></p>
    </v-container>
  </v-card>
</template>

<style scoped>
  .copy{
    display: flex;
    align-items: right;
  }
  .desc{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4E2E8A;
    height: 30px;
    color: white;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
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
    font-size: 18px;
    line-height: 17px;
    color: #000000;
  }
  .info-d{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    color: #000000;
  }
</style>