<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">{{ promo.title }}</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-card style="height: 100vh;" class="mt-14">
      <v-img :src="promo.image_url"></v-img>
      <div class="desc">
        Diskon {{ converter(Math.abs(promo.discount)) }} untuk pembelian produk
        apa saja
      </div>

      <v-container>
        <h1 class="info-a mt-6">Kode Promo</h1>

        <div class="d-flex justify-space-between">
          <input
            v-on:focus="$event.target.select()"
            ref="clone"
            readonly
            :value="promo.code"
          />

          <!-- <p class="info-b mt-3 mb-5">{{ promo.code }}</p> -->
          <v-btn style="color: #4e2e8a;" icon class="copy" @click="copy">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </div>

        <p class="info-c mb-2">Syarat dan Ketentuan</p>
        <p class="info-d">
          Potongan dapat langsung diperoleh senilai
          {{ converter(Math.abs(promo.discount)) }}
          <br />
          Minimal total pembelian {{ converter(promo.required_price) }}
          <br />
          Hanya dapat digunakan {{ promo.user_limit }} kali
          <br />
          <b>
            Promo dapat berubah sewaktu-waktu tanpa pemberitahuan, segera
            lakukan transaksi
          </b>
        </p>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import converter from '../mixins/converter'
export default {
  name: 'DetailPromo',
  data() {
    return {
      promo: {},
      text: 'This will get copied!',
    }
  },

  created() {
    this.go()
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
    }),

    copy() {
      this.$refs.clone.focus()
      document.execCommand('copy')
      this.setAlert({
        status: true,
        color: 'success',
        text: 'This will get copied!',
      })
    },
    go() {
      let { id } = this.$route.params
      let url = '/promo/voucher/detail?id=' + id

      this.axios
        .get(url)
        .then((response) => {
          console.log(url)
          console.log(response.data)
          let { data } = response.data
          this.promo = data
        })
        .catch((error) => {
          let { responses } = error
          console.log(responses)
        })
    },
  },
  mixins: [converter],
}
</script>
<style scoped>
.copy {
  display: flex;
  align-items: right;
}
.desc {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4e2e8a;
  height: 30px;
  color: white;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
}
.info-a {
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
.info-b {
  height: 16px;
  left: 16px;
  top: 417px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #f05e86;
}
.info-c {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 17px;
  color: #000000;
}
.info-d {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
}
</style>
