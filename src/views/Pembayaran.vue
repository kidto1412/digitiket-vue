<template>
  <div>
    <v-app-bar dark class="d-bg-purple" fixed>
      <v-btn icon dark @click.stop="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h3 class="mx-auto">Metode Pembayaran</h3>
      <v-spacer></v-spacer>
      <div></div>
    </v-app-bar>
    <v-list two-line class="mt-15">
      <v-container>
        <h5>ATM/Bank Transfer</h5>
      </v-container>
      <v-list-item-group active-class="purple--text" multiple>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Metode Pembayaran</v-list-item-title>
            <v-list-item-subtitle>Mandiri</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-content>
            <v-img
              src="../assets/img/bank-mandiri.svg"
              class="logo-bank"
              max-height="43"
              max-width="120"
            ></v-img>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Nomor VA / Billing</v-list-item-title>
            <v-list-item-subtitle class="font-weight-light">
              097656789092782971
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="lighten-1" class="text-purple">
                mdi-content-copy
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Nominal</v-list-item-title>
            <v-list-item-subtitle>40.000</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="lighten-1" class="text-purple">
                mdi-content-copy
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>

        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <div style="margin-top: 22%;"></div>
    <div class="footer">
      <v-card>
        <h5 class="text-center mt-5">
          Sisa waktu pembayaran
        </h5>
        <h3 class="text-center text-purple pb-5">02 : 43 : 25</h3>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pembayaran',
  data: () => ({
    items: [
      {
        action: 'mdi-ticket',
        items: [{ title: 'List Item' }],
        title: 'Internet Banking Mandiri',
      },
      {
        action: 'mdi-silverware-fork-knife',
        // active: true,
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
        ],
        title: 'ATM Mandiri / Link',
      },
      {
        action: 'mdi-school',
        items: [{ title: 'List Item' }],
        title: 'ATM Mandiri / Bersama',
      },
      {
        action: 'mdi-human-male-female-child',
        items: [{ title: 'List Item' }],
        title: 'ATM BCA / Prima',
      },
    ],
  }),
}
</script>
<style scoped>
.logo-bank {
  position: absolute;
  right: 0;
}
</style>
