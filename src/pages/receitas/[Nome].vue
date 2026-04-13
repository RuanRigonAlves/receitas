<template>
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

  <v-container height="70%" class="d-flex justify-center align-center">
    <p v-if="!receitas">
      Opss... algo deu errado, nao consegui encontrar receita com nome de:
      {{ route.params.Nome }}
    </p>
  </v-container>
</template>

<script setup>
import AppCardPrincipal from "@/components/AppCardPrincipal.vue";
import _receitas from "@/services/_receitas.js";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const receitas = ref(null);

onMounted(async () => {
  receitas.value = await _receitas.buscarReceitaNome(route.params.Nome);
});

watchEffect(async () => {
  const nome = route.params.Nome;

  if (!nome) return;

  receitas.value = await _receitas.buscarReceitaNome(nome);
});
</script>
