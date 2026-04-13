<template>
  <app-carousel :dados="receitasPais" v-if="receitasPais" variant="principal">
    <template v-slot:default="{ item }">
      <app-card-principal :item="item" variant="carousel"> </app-card-principal>
    </template>
  </app-carousel>

  <v-container fluid class="mt-8">
    <v-card-title>Receitas Canadense</v-card-title>
    <app-carousel
      :dados="receitasPaisDois"
      v-if="receitasPaisDois"
      variant="secundaria"
    >
      <template v-slot:default="{ item }">
        <app-card-avatar :item="item"></app-card-avatar>
      </template>
    </app-carousel>
  </v-container>

  <receita-destaque :receita="receitaAleatoria"> </receita-destaque>
</template>

<script setup>
import AppCarousel from "@/components/AppCarousel.vue";
import _receitas from "@/services/_receitas.js";
import AppCardPrincipal from "@/components/AppCardPrincipal.vue";
import AppCardAvatar from "@/components/AppCardAvatar.vue";
import ReceitaDestaque from "@/components/ReceitaDestaque.vue";

const receitaAleatoria = ref([]);
const receitasPais = ref([]);
const receitasPaisDois = ref([]);
const categorias = ref([]);

onMounted(async () => {
  receitaAleatoria.value = await _receitas.buscarReceitaAleatoria();
  receitasPais.value = await _receitas.buscarReceitasPorPais("mexican");
  receitasPaisDois.value = await _receitas.buscarReceitasPorPais("canadian");
});
</script>
