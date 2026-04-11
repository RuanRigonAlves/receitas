<template>
  <v-card class="categoria" :to="`/categorias/${categoria.strCategory}`">
    <v-img height="200px" :src="categoria.strCategoryThumb" cover></v-img>

    <v-card-title class="flex justify-center mb-1">
      {{ categoria.strCategory }}
    </v-card-title>

    <!-- <v-card-subtitle> {{ categoria.strCategoryDescription }} </v-card-subtitle> -->

    <v-card-text>
      {{ categoria.strCategoryDescription }}
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  categoria: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.categoria {
  padding: 10px;
  max-width: 300px;
  height: 300px;
  border: 2px solid #413113;
}
</style>
