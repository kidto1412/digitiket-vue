<template>
  <v-row no-gutters class="my-3 font-weight-bold">
    <v-card align="center" class="point-card mr-3" style="border-radius: 10px;">
      <div class="d-flex align-center pl-2">
        <v-img
          src="../assets/icons/icon-money.svg"
          style="width: 20px; height: 20px;"
        ></v-img>
        <v-card-text v-if="!guest">{{ point + ' Point ' }}</v-card-text>
        <v-card-text v-else>0 Point</v-card-text>
      </div>
    </v-card>
    <v-card align="center" class="point-card" style="border-radius: 10px;">
      <div class="d-flex align-center pl-2">
        <v-img
          src="../assets/icons/icon-credit-card.svg"
          style="width: 20px; height: 20px;"
        ></v-img>
        <v-card-text v-if="!guest">
          {{ credit + ' Kredit' }}
        </v-card-text>
        <v-card-text v-else>
          0 Kredit
        </v-card-text>
      </div>
    </v-card>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PointKredit',
  data() {
    return {
      point: null,
      kredit: null,
    }
  },
  computed: {
    ...mapGetters({
      countCart: 'cart/count',
      guest: 'auth/guest',
      user: 'auth/user',
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
    }),
  },
  created() {
    let config = {
      headers: {
        Authorization: 'Bearer ' + this.user.jwt_token,
      },
    }
    this.axios
      .get('https://digitiket.id/api/v1/get/point', config)
      .then((response) => {
        let { data } = response.data
        this.point = data.content
      })

    this.axios
      .get('https://digitiket.id/api/v1/get/credit', config)
      .then((response) => {
        let { data } = response.data
        this.credit = data.content
      })
  },
}
</script>
<style scoped>
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  height: 36px;
}
</style>
