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
        <div class="d-flex">
          <v-icon color="purple">mdi-calendar</v-icon>
          <p class="mt-4 ml-2">{{ arrivalDate | formatDate }}</p>
        </div>
      </v-container>
    </v-card>
    <v-card>
      <v-list v-for="ticket in tickets" :key="ticket.id">
        <v-container>
          <h5>{{ ticket.ticket_name }}</h5>

          <p class="font-weight-light"></p>
        </v-container>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Masa Aktif :</v-list-item-title>
            <v-list-item-title>Harga :</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title
              >: {{ ticket.info["Masa Aktif"] }}</v-list-item-title
            >
            <v-list-item-title
              >:
              {{
                arrivalDate == date ? ticket.price_today_ori : ticket.price_ori
              }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <div class="d-flex">
            <v-btn
              class=""
              light
              small
              @click="removeQty(ticket.id, ticket.qty)"
              id="dec"
            >
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>

            <p class="mx-5">{{ ticket.qty }}</p>
            <v-btn
              class="inc"
              light
              small
              @click="addQty(ticket.id, ticket.qty)"
              id="inc"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
    <div style="margin-bottom: 23%"></div>
    <div class="footer">
      <v-card>
        <div class="d-flex justify-space-between" style="line-height: 12px">
          <v-container>
            <p class="text-purple">Total Harga</p>
            <p class="text-purple">{{ price || totalHarga }}</p>
          </v-container>
          <v-btn
            color="my-auto mx-5"
            class="btn-purple text-white"
            to="/konfirmasi-pemesanan"
          >
            Konfirmasi
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// let incrementButton = document.getElementsByClassName("inc");
// let decrementButton = document.getElementById("dec");
export default {
  name: "PilihTiket",
  props: ["item"],
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    tickets: [],
    ticketInfo: {},
    price: 0,
    i: 0,
  }),
  computed: {
    ...mapGetters({
      arrivalDate: "arrivalDate",
      idEvent: "idEvent",
      user: "auth/user",
    }),
    totalHarga() {
      return this.tickets.reduce((sum, i) => {
        return sum + i.price_ori * i.qty;
      }, 0);
    },
  },
  methods: {
    ...mapActions({
      fetchUser: "auth/fetchUser",
      setOrder: "setOrder",
    }),
    addQty(id, qty) {
      this.tickets.forEach((obj) => {
        if (id == obj.id) {
          obj.qty = qty + 1;
        }
      });
    },
    removeQty(id, qty) {
      this.tickets.forEach((obj) => {
        if (id == obj.id) {
          obj.qty = qty - 1;
        }
      });
    },
  },
  mounted() {
    this.fetchUser();
  },
  created() {
    this.axios
      .get(
        `/payment/order/tiket?event_id=${this.idEvent}&date=${
          this.arrivalDate
        }&dateFix=${this.arrivalDate == this.date ? 1 : 0}`,
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("jwt_token"),
          },
        }
      )
      .then((response) => {
        let { data } = response.data;
        this.tickets = data;
        this.tickets.forEach((obj, idx) => {
          this.$set(this.tickets[idx], "qty", 0);
        });
        console.log(this.tickets);
      });
    // console.log(this.item);
  },
};
</script>

<style>
.v-date-picker-header {
  display: none !important;
}
</style>
