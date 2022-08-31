<template>
  <v-row class="vrow">
    <v-col v-for="n in 2" :key="n" class="d-flex child-flex" cols="11">
      <v-img
        :src="require(`../../public/img/dor${n}.png`)"
        :lazy-src="require(`../../public/img/dor${n}.png`)"
        aspect-ratio="1"
        class="grey lighten-2 img"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<style scoped>
.vrow {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
  align-content: space-between;
  justify-content: space-evenly;
}
.img {
  border-radius: 10px;
  object-fit: cover;
}
</style>
