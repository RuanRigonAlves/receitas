<template>
  <v-row :style="mobile ? 'flex-direction: column-reverse;' : ''">
    <v-col
      sm="8"
      cols="12"
      class="d-flex flex-column justify-space-evenly pt-2"
    >
      <v-card-title>{{ props.receita.strMeal }}</v-card-title>
      <p class="pl-3">{{ props.receita.strInstructions }}</p>
      <div class="pl-3 pb-3">
        <v-btn class="px-8" :to="`/receita/${props.receita.idMeal}`" rounded>
          Conhecer mais sobre a receita
        </v-btn>
      </div>
    </v-col>

    <v-col cols="12" sm="4">
      <v-img
        :src="props.receita.strMealThumb"
        height="400px"
        width="100%"
        cover
      ></v-img>
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const props = defineProps(["receita"]);
</script>
