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
        <p class="font-weight-light mt-2">{{ arrivalDate | formatDate }}</p>
        <p>{{ order.id_event }}</p>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <h4>Pemesanan</h4>
        <h5 class="mt-3">{{ order.ticket_name + " " + event.title }}</h5>
        <div class="d-flex justify-space-between">
          <p class="font-weight-light">1 Tiket</p>
          <p>{{ order.total_price }}</p>
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
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle
                v-text="event.title"
                class=""
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-title
                class="text-purple"
                v-text="order.total_price"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        p
      </v-list>
    </v-card>
    <div style="margin-bottom: 23%"></div>
    <div class="footer">
      <v-card>
        <div class="d-flex justify-space-between" style="line-height: 12px">
          <v-container>
            <p class="text-purple">Total Harga</p>
            <p class="text-purple">{{ order.total_price }}</p>
          </v-container>
          <v-btn
            color="my-auto mx-5"
            class="btn-purple text-white"
            @click="buy"
          >
            Bayar
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "KonfirmasiPemesanan",
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    promo: [],
    inputPromo: "",
    items: [
      { text: "Tiket Masuk Anak Rinjani Waterpark", price: "IDR 17.500" },
      { text: "Tiket Masuk Dewasa Rinjani Waterpark", price: "IDR 17.500" },
      { text: "Diskon", price: "IDR 17.500" },
      { text: "Biaya Layanan", price: "IDR 17.500" },
      { text: "Penggunaan Kredit", price: "IDR 17.500" },
    ],
  }),
  computed: {
    ...mapGetters({
      arrivalDate: "order/arrivalDate",
      event: "order/event",
      order: "order/orderEvent",
      user: "auth/user",
    }),
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    ...mapActions({
      fetchUser: "auth/fetchUser",
    }),
    buy() {
      console.log(this.user.jwt_token);
      this.axios
        .post(
          `/payment/order/create-order`,
          {
            event_id: this.order.id_event,
            date: this.arrivalDate.toString(),
            ticket_id: this.order.id.toString(),
            qty: this.order.qty.toString(),
            dateFix: this.arrivalDate == this.date ? 1 : 0,
            total: this.order.total_price,
            checkout: 1,
          },
          {
            headers: {
              Authorization: "Bearer" + localStorage.getItem("jwt_token"),
            },
          }
        )
        .then((res) => {
          let { data } = res.data;
          let { midtrans } = data;
          let { url } = midtrans;
          window.location.href = url;
        });
    },
  },

  created() {
    console.log(this.arrivalDate);
    console.log(this.arrivalDate.toString());
    this.axios.get("/promo").then((response) => {
      let { data } = response.data;
      // let { image_url } = data
      this.promo = data;
      this.loading = false;
      // console.log('data promo' + response.data)
    });
  },
};
</script>
