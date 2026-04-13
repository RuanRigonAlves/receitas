<template>
  <p v-if="receitas">
    <pre>{{receitas}}</pre>
  </p>
  <p v-if="!receitas">Nao encontrei</p>
</template>

<script setup>
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
