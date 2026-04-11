<template>
  <h1>Categorias</h1>

  <p v-if="categorias.length === 0">Nao encontrado</p>

  <v-list v-else class="lista-categorias">
    <v-list-item v-for="categoria in categorias" :key="categoria.idCategory">
      <app-card :categoria="categoria"></app-card>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref, onMounted } from "vue";
import _receitas from "@/services/_receitas.js";
import AppCard from "@/components/AppCard.vue";

const categorias = ref([]);

onMounted(async () => {
  categorias.value = await _receitas.listarCategorias();
});
</script>

<style scoped>
.lista-categorias {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
