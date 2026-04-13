<template>
  <v-container v-if="receita" fluid>
    <v-row min-height="400px">
      <v-col cols="12" sm="4" class="d-flex">
        <v-img
          :src="receita.strMealThumb"
          height="400px"
          width="100%"
          cover
          rounded
        ></v-img>
      </v-col>

      <v-col cols="12" sm="8" class="" style="max-height: 400px">
        <v-card-title
          class="my-4 d-flex justify-center text-primary"
          style="font-size: 20pt"
        >
          {{ receita.strMeal }}
        </v-card-title>

        <v-list
          class="d-flex flex-wrap flex-column bg-bgprimary"
          height="320px"
        >
          <v-list-item
            v-for="(item, index) in receita.ingredients"
            :key="index"
          >
            <v-list-item-title class="text-textprimary">
              {{ item.nome }}
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ item.medida }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <section class="d-flex flex-column justify-space-between align-center mt-5">
      <p class="pl-2 text-ptext" style="font-size: 13pt">
        {{ receita.strInstructions }}
      </p>
    </section>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import _receitas from "@/services/_receitas.js";
import { useRoute } from "vue-router";

const route = useRoute();
const receita = ref();

const carregarReceita = async () => {
  receita.value = await _receitas.buscarReceitaPorId(route.params.Id);
};

onMounted(carregarReceita);
</script>
