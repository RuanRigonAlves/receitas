<template>
  <p v-if="categorias.length === 0">Nao encontrado</p>
  <v-container fluid="" class="bg-bgprimary">
    <h1>Categorias</h1>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="3"
        xl="2"
        v-for="categoria in categorias"
        class="d-flex justify-center"
      >
        <app-card-principal
          :item="categoria"
          variant="lista"
          :rota="'/categorias/'"
          class="bg-bgprimary text-white"
          elevation="0"
        >
        </app-card-principal>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import _receitas from "@/services/_receitas.js";
import AppCardPrincipal from "@/components/AppCardPrincipal.vue";

const categorias = ref([]);

onMounted(async () => {
  categorias.value = await _receitas.listarCategorias();

  console.log(categorias);
});
</script>

<style scoped>
.lista-categorias {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
