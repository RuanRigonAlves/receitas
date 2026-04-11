<template>
  <v-card height="96vh">
    <v-container v-if="receita">
      <v-row style="height: 400px">
        <v-col cols="4" class="h-100">
          <v-img :src="receita.strMealThumb" cover></v-img>
        </v-col>

        <v-col cols="8" class="" style="max-height: 400px">
          <v-card-title
            class="my-4 d-flex justify-center"
            style="font-size: 20pt"
          >
            {{ receita.strMeal }}
          </v-card-title>

          <v-divider></v-divider>

          <v-list class="d-flex flex-wrap flex-column" height="320px">
            <v-list-item
              v-for="(item, index) in receita.ingredients"
              :key="index"
            >
              <v-list-item-title>
                {{ item.nome }}
              </v-list-item-title>

              <v-list-item-subtitle>
                {{ item.medida }}
              </v-list-item-subtitle>
              <v-divider></v-divider>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-divider class="my-5"></v-divider>

      <section class="d-flex flex-column justify-space-between align-center">
        <p class="pl-2" style="font-size: 13pt">
          {{ receita.strInstructions }}
        </p>
      </section>
    </v-container>
  </v-card>
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
