<template>
  <v-container class="d-flex flex-wrap" height="100vh">
    <v-card
      color="#952175"
      v-for="receita in receitas"
      min-width="300px"
      class="ma-1"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-headline-small">
            {{ receita.strMeal }}</v-card-title
          >
        </div>

        <v-avatar class="ma-3" rounded="0" size="200">
          <v-img :src="receita.strMealThumb"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import _receitas from "@/services/_receitas.js";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const receitas = ref(null);

watchEffect(async () => {
  const tipo = route.params.Categoria;

  if (!tipo) return;

  receitas.value = await _receitas.buscarCategorias(tipo);
});

onMounted(async () => {
  receitas.value = await _receitas.buscarCategorias(route.params.Categoria);
});
</script>
