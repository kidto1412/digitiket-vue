<template>
    <div class="box-ulasan">
        <p class="info-ulasan mb-5">Virtual Tour Candi Prambanan</p>
        <v-rating
          class="rating"
          color="amber"
          dense
          half-increments
          size="19"
        ></v-rating>
        <textarea class="description-ulasan mt-5" placeholder="Masukkan ulasan anda ..."></textarea>
        <v-card-actions class="justify-end mt-5">
            <v-btn class="btn-purple" color="white--text">
                Kirim
            </v-btn>
        </v-card-actions>
    </div>
</template>

<style scoped>
    .box-ulasan{
        padding: 24px 16px;
        margin: 0;
    }
    .info-ulasan{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 17px;
    }
    .rating{
        display: flex;
        justify-content: center;
    }
    .description-ulasan{
        border: 1px solid #C4C4C4;
        width: 100%;
        height: 120px;
        padding: 12px;
        border-radius: 10px;
    }
</style>