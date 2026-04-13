<template>
  <v-card
    height="270px"
    width="215px"
    :to="`/receita/${item.idMeal}`"
    class="d-flex flex-column justify-center align-center ga-2 bg-transparent pt-4"
  >
    <div>
      <v-avatar size="200">
        <v-img :src="item.strMealThumb"> </v-img>
      </v-avatar>
    </div>

    <v-card-text class="" style="font-size: 17px">
      <b>
        {{ item.strMeal.toLowerCase() }}
      </b>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: Object,
});
</script>

<style scoped>
.carousel .title {
  font-size: 21pt;
  text-shadow: 2px 2px #303030;
}

.lista .title {
  font-size: 12pt;
  text-shadow: 1px 1px #303030;
}
</style>
