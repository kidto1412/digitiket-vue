<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <alert />
    <!-- <keep-alive>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialogbottom-transition"
      >
        <component :is="currentComponent" @closed="setDialogStatus"></component>
        <cart @closed="closeDialog" />
      </v-dialog>
    </keep-alive> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Alert: () => import('@/components/Alert.vue'),
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user',
      prevUrl: 'prevUrl',
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
    }),
    dialog: {
      get() {
        return this.dialogStatus
      },
      set(value) {
        return this.setDialogStatus(value)
      },
    },
  },
  ...mapActions({
    setDialogStatus: 'dialog/setStatus',
    setDialogComponent: 'dialog/setComponent',
    setAlert: 'alert/set',
    setAuth: 'auth/set',
  }),
  closeDialog(value) {
    this.dialog = value
  },
}
</script>
