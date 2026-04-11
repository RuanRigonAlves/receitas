<template>
  <section class="home-secao">
    <div>
      <h1 class="titulo">Receita Aleatoria</h1>
      <receita-aleatoria :receita="receitaAleatoria"></receita-aleatoria>
    </div>

    <v-divider thickness="2"></v-divider>

    <div>
      <h1 class="titulo">Algumas Categorias</h1>
      <home-categorias :categorias="categorias"></home-categorias>
    </div>
  </section>
</template>

<script setup>
import ReceitaAleatoria from "@/components/receitas/ReceitaAleatoria.vue";
import HomeCategorias from "@/components/receitas/HomeCategorias.vue";
import _receitas from "../services/_receitas.js";

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
