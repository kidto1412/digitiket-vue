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
                arrivalDate == date ? ticket.price_today : ticket.price_ori
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
            >
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>

            <p class="mx-5">{{ ticket.qty }}</p>
            <v-btn light small @click="addQty(ticket.id, ticket.qty)">
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
            <p class="text-purple">{{ totalPrice || totalHarga }}</p>
          </v-container>
          <v-btn
            color="my-auto mx-5"
            class="btn-purple text-white"
            @click="handleConfirmation()"
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
    ticketOrder: [],
    totalPrice: 0,
    i: 0,
  }),
  computed: {
    ...mapGetters({
      arrivalDate: "order/arrivalDate",
      event: "order/event",
      order: "order/oder",
      user: "auth/user",
    }),
    totalHarga() {
      return this.tickets.reduce((sum, i) => {
        return this.date == this.arrivalDate
          ? sum + i.price_today * i.qty
          : sum + i.price_ori * i.qty;
      }, 0);
    },
  },
  methods: {
    ...mapActions({
      fetchUser: "auth/fetchUser",
      setOrder: "order/setOrder",
      // insertListTiket: "order/insertListTiket",
      // add: "order/add",
    }),
    addQty(id, qty) {
      this.tickets.forEach((obj) => {
        if (id == obj.id) {
          obj.qty = qty + 1;
          this.totalPrice = this.totalHarga;
          // console.log(
          //   obj.id,
          //   obj.id_event,
          //   obj.qty,
          //   obj.ticket_name,
          //   this.totalPrice
          // );
          this.ticketOrder = {
            id: obj.id,
            id_event: obj.id_event,
            title: this.event.title,
            qty: obj.qty,
            ticket_name: obj.ticket_name,
            total_price: this.totalPrice,
          };
          // obj = this.ticketOrder;
          console.log(this.ticketOrder);
        }
      });
    },
    removeQty(id, qty) {
      this.tickets.forEach((obj) => {
        if (id == obj.id) {
          obj.qty = qty - 1;
          // obj = this.ticketOrder;
          // console.log(this.ticketOrder);
        }
      });
    },
    handleConfirmation() {
      this.setOrder(this.ticketOrder);
      // this.insertListTiket(this.ticketOrder);
      this.$router.push("/konfirmasi-pemesanan");
    },
  },
  mounted() {
    this.fetchUser();
  },
  created() {
    this.axios
      .get(
        `/payment/order/tiket?event_id=${this.event.id}&date=${
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
