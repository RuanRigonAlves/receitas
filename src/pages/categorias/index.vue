<template>
  <h1>Categorias</h1>

  <p v-if="categorias.length === 0">Nao encontrado</p>

  <v-list v-else class="lista-categorias">
    <v-list-item v-for="categoria in categorias" :key="categoria.idCategory">
      <categorias-card :categoria="categoria"></categorias-card>
    </v-list-item>
  </v-list>
</template>

<script setup>
import CategoriasCard from "@/components/categorias-page/CategoriasCard.vue";
import { ref, onMounted } from "vue";
import _receitas from "@/services/_receitas.js";

const categorias = ref([]);

onMounted(async () => {
  categorias.value = await _receitas.listarCategorias();

  console.log(categorias.value);
});
</script>

<style scoped>
.lista-categorias {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
