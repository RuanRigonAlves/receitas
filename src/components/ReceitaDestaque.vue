<template>
  <v-container>
    <v-row max-height="300">
      <v-col cols="8" class="d-flex flex-column justify-space-evenly">
        <div>{{ props.receita.strMeal }}</div>
        <div>{{ props.receita.strInstructions }}</div>
        <div>ir para receita</div>
      </v-col>
      <v-col cols="4">
        <v-img :src="props.receita.strMealThumb"></v-img>
      </v-col>
    </v-row>
  </v-container>
  <pre>
    {{ props.receita }}
  </pre>
</template>

<script setup>
const props = defineProps(["receita"]);
</script>
