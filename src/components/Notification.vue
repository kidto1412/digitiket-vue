<template>
    <div class="notification-screen">
        <div v-for="(notif, i) in notif" :key="i">
            <v-col>
                <h3 class="title">{{ notif.judul }}</h3>
                <p class="description">{{ notif.deskripsi }}</p>
                <div class="time">{{ notif.waktu }}</div>
            </v-col>
            <hr>
        </div>
    </div>
</template>

<style scoped>
    .notification-screen{
        padding: 24px 16px;
        margin: 0;
    }
    .title{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */
        padding: 16px 0;

        color: #000000;
    }
    .description{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;

        color: #000000;
    }
    .time{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 15px;
        /* identical to box height */

        text-align: right;

        color: rgba(0, 0, 0, 0.5);
    }
</style>

<script>
  export default {
    name: 'Notification',

    data: () => ({
      notif: [
        {
          judul: 'Pembayaran Berhasil',
          deskripsi: 'Pembayaran pesanan #27383 untuk Virtual Tour Raja Ampat (Wisata Kelas Dunia Rumah Wisatawan) berhasil.',
          waktu: '10/01/21 22:09',
        },
        {
          judul: 'Pembayaran Berhasil',
          deskripsi: 'Pembayaran pesanan #27383 untuk Virtual Tour Raja Ampat (Wisata Kelas Dunia Rumah Wisatawan) berhasil.',
          waktu: '10/01/21 22:09',
        },
        {
          judul: 'Pembayaran Berhasil',
          deskripsi: 'Pembayaran pesanan #27383 untuk Virtual Tour Raja Ampat (Wisata Kelas Dunia Rumah Wisatawan) berhasil.',
          waktu: '10/01/21 22:09',
        },
      ],
    }),
  }
</script>