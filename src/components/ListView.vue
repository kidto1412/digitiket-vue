<template>
  <div>
    <v-card class="overflow-hidden d-flex justify-space-between card-radius">
      <v-row align="center" no-gutters>
        <v-col cols="6">
          <v-img :src="ticket.image" class="card-img"></v-img>
        </v-col>
        <v-col cols="5" class="ml-1">
          <v-card-title class="text-title">
            {{ ticket.title }}
          </v-card-title>
          <v-card-subtitle class="text-desc mt-1" style="">
            {{ ticket.cityprov }}
          </v-card-subtitle>
          <v-card-subtitle class="text-price">
            IDR {{ converter(ticket.price && ticket.price.price_ori) }}
          </v-card-subtitle>
          <div class="d-flex align-center ml-2">
            <v-rating
              style="position: relative; top: -10px;"
              class="rating-icon"
              color="orange "
              background-color="orange"
              size="14"
              dense
              v-model="ticket.rate.avarage"
            ></v-rating>
            <div class="text-ulasan ml-2 mt-1">
              {{ ticket.rate && ticket.rate.user_count + ' ' + 'Ulasan' }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!-- <v-card>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-img
            src="https://pinhome-blog-assets-public.s3.amazonaws.com/2022/03/dummy.png"
            width="170"
            max-height="100"
          ></v-img>
        </div>
        <div>
          <v-card-title>
            SRIBOGA UKM CLASS 2
          </v-card-title>

          <v-card-subtitle>
            Ciptakan Kemasan yang mampu menjual
          </v-card-subtitle>
          <v-card-subtitle>
            IDR 35.000
          </v-card-subtitle>
          <v-rating></v-rating>
        </div>
      </div>
    </v-card> -->
  </div>
</template>
<script>
import converter from '../mixins/converter'
export default {
  name: 'ListView',
  props: ['ticket'],
  data: () => {
    return {}
  },
  methods: {
    converter(nominal) {
      const currency = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      })
      return currency.format(nominal).slice(3)
    },
  },
  mixins: [converter],
}
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .v-card {
    max-width: 540px;
  }
  .card-img {
    position: relative;
    /* top: 10%; */
    /* left: 5%; */
    border-radius: 20px 20px 20px 20px;
    padding: 10px 0px 10px 10px;
    margin: 10px;
    width: 210px;
    height: 130px;
  }
}

.card-img {
  position: relative;
  /* top: 10%; */
  /* left: 5%; */
  border-radius: 20px 20px 20px 20px;
  padding: 10px 0px 10px 10px;
  margin: 10px;
  width: 210px;
  height: 130px;
}

.text-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
}
.text-desc {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
  position: relative;
  top: -10px;
}

.text-price {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1px;
  /* identical to box height */
  position: relative;
  top: -10px;
  /* purple */

  color: #4e2e8a;
}
.text-ulasan {
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 1px;
  /* identical to box height */
  color: #c4c4c4;
  white-space: nowrap;
  position: relative;
  top: -10px;
}

.card-radius {
  border-radius: 10px;
}
</style>
