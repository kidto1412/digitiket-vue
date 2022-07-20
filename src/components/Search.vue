<template>
  <div>
    <v-toolbar dark class="d-bg-purple">
      <v-btn icon dark @click.native="close">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-text-field
        hide-details
        clearable
        flat
        autofocus
        label="Cari..."
        v-model="keyword"
        @input="doSearch"
        background-color="white"
        light
        class="rounded"
      ></v-text-field>
    </v-toolbar>
    <v-card style="height: 100vh;">
      <v-card-text>
        <v-subheader v-if="keyword.length > 0">
          Hasil Pencarian: "{{ keyword }}"
        </v-subheader>
        <!-- <v-alert
          :value="books.length == 0 && keyword.length > 0"
          color="warning"
        >
          Sorry, but no results were found.
        </v-alert> -->
        <!-- Hasil pencarian ditampilkan di sini -->

        <!-- <div v-for="book in books" :key="`book-` + book.id">
          <book-item :book="book" />
        </div> -->
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'search',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    doSearch() {},
    close() {
      this.$emit('closed', false)
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
