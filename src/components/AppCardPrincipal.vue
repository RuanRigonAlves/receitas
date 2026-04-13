<template>
  <v-card
    :height="variant === 'carousel' ? '400px' : '200px'"
    :width="variant === 'carousel' ? '600px' : '350px'"
    :to="rota + (item.idMeal || item.strCategory)"
    rounded="lg"
    :class="['card-hover', variant]"
  >
    <v-img
      :src="item.strMealThumb || item.strCategoryThumb"
      class="img-zoom d-flex align-end"
      cover
    >
      <span class="d-flex mb-10 pl-5 title">
        <b>
          {{ item.strMeal || item.strCategory }}
        </b>
      </span>
    </v-img>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: Object,
  rota: String,
  variant: {
    default: "principal",
  },
});
</script>

<style scoped>
.card-hover {
  overflow: hidden; /* importante pra cortar o zoom */
}

.img-zoom {
  transition: transform 0.4s ease;
}

.card-hover:hover .img-zoom {
  transform: scale(1.1);
}

.carousel .title {
  font-size: 21pt;
  text-shadow: 2px 2px #303030;
}

.lista .title {
  font-size: 12pt;
  text-shadow: 1px 1px #303030;
}
</style>
