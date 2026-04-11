<template>
  <section class="home-secao">
    <div>
      <h1 class="titulo">Receita Aleatoria</h1>
      <receita-aleatoria :receita="receitaAleatoria"></receita-aleatoria>
    </div>

    <v-divider thickness="2"></v-divider>

    <div>
      <h1 class="titulo">Algumas Categorias</h1>
      <v-list>
        <v-list-item v-for="categoria in categorias">
          <app-card :tipo-simples="true" :categoria="categoria"> </app-card>
        </v-list-item>
      </v-list>
    </div>
  </section>
</template>

<script setup>
import ReceitaAleatoria from "@/components/receitas/ReceitaAleatoria.vue";
import _receitas from "@/services/_receitas.js";
import AppCard from "@/components/AppCard.vue";

import { ref, onMounted } from "vue";

const receitaAleatoria = ref([]);
const categorias = ref([]);

onMounted(async () => {
  receitaAleatoria.value = await _receitas.buscarReceitaAleatoria();

  categorias.value = await _receitas.listarCategorias();
});
</script>

<style scoped>
.titulo {
  font-size: 20pt;
}

.home-secao div {
  margin-bottom: 50pt;
}
</style>
