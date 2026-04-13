<template>
  <v-container fluid="">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="3"
        xl="2"
        class="d-flex justify-center"
        v-for="receita in receitas"
      >
        <app-card-principal
          class="text-white"
          :item="receita"
          variant="lista"
          :rota="'/receita/'"
        ></app-card-principal>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppCardPrincipal from "@/components/AppCardPrincipal.vue";
import _receitas from "@/services/_receitas.js";
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
