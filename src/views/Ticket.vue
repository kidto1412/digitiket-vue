<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Tiket</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-tabs class="mt-14" v-model="tab" background-color="white" light>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <div v-if="guest">
      <div class="text-center mt-5">
        <h3 class="d-purple">Ayo Jalan Jalan</h3>
        <p class="text-center px-10">
          Setelah Memesan tiket, kamu bisa mengatur pesanan dan tiket kamu
          disini
        </p>
        <v-btn-toggle>
          <v-btn color="white--text" class="d-bg-purple" to="masuk">
            Masuk
          </v-btn>
          <v-btn color="white--text" class="d-bg-purple" to="daftar">
            Daftar
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <div v-else>
      <div v-if="ticketItem.length == 0">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
              <v-card-text class="text-center">{{ item.content }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <div v-else>
        <v-container class="mt-5">
          <list-view :ticket="ticket" />
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import ListView from "../components/ListView.vue";
import { mapGetters } from "vuex";
export default {
  components: { ListView },
  name: "Ticket",
  data() {
    return {
      ticket: {
        title: "Test",
        price: "50000",
        cityprov: "test",
        rate: {
          avarage: 5,
          user_coun: 1,
        },
      },
      tab: null,
      items: [
        {
          tab: "Akan Datang",
          content: "Anda tidak memiliki tiket akan datang",
          imageUrl: "",
        },
        {
          tab: "Selesai",
          content: "Anda tidak memiliki tiket selesai",
          imageUrl: "",
        },
      ],
      ticketItem: [],
    };
  },
  computed: {
    ...mapGetters({
      guest: "auth/guest",
      user: "auth/user",
    }),
  },
  created() {},
};
</script>
