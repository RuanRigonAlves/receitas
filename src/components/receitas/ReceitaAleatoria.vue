<template>
  <v-row density="compact">
    <v-col class="pa-0" cols="3">
      <v-img
        style="border-radius: 6px 12px"
        :src="receita.strMealThumb"
        alt=""
      />
    </v-col>

    <v-col class="pa-0" cols="9">
      <v-card min-height="100%" class="d-flex flex-column">
        <v-card-title class="my-4" style="font-size: 20pt">
          {{ receita.strMeal }}
        </v-card-title>

        <v-card-subtitle class="d-flex align-center">
          <v-chip variant="flat" label>
            <b>{{ receita.strArea }}</b>
          </v-chip>
        </v-card-subtitle>

        <v-card-text style="font-size: 11pt" class="flex-grow-1">
          {{ receita.strInstructions?.substring(0, 600) }}...
        </v-card-text>

        <v-card-actions class="pb-6">
          <v-btn
            variant="elevated"
            color="warning"
            rounded
            style="font-size: 14pt"
            class="pa-5"
            :to="`/receita/${receita.idMeal}`"
            >Acessar Receita</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineProps, ref } from "vue";
import _receitas from "@/services/_receitas.js";

const props = defineProps({
  receita: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.aleatoria-main {
  min-height: 300px;
  display: flex;
  background-color: rgb(36, 36, 36);
  border-radius: 10px;
}

.aleatoria-main img {
  width: 30%;
  height: 300px;
  object-fit: cover;
}

.info-layout {
  display: flex;
  padding-left: 40px;
  align-items: center;
  width: 50%;
}

.info {
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info h2 {
  font-size: 25px;
}

.ver-receita {
  width: 200px;
  padding: 10px;
  background-color: rgb(66, 56, 66);
  border-radius: 200px;
}
</style>
