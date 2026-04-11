<template>
  <v-card>
    <v-container fluid>
      <v-row density="comfortable">
        <v-col class="d-flex flex-wrap ga-5">
          <v-card
            v-for="categoria in categorias"
            :key="categoria.strCategory"
            class="cursor-pointer"
            :to="`/categorias/${categoria.strCategory}`"
          >
            <v-img
              :src="categoria.strCategoryThumb"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              width="200px"
              cover
            >
              <v-chip class="" label variant="elevated" color="warning">
                <b>{{ categoria.strCategory }}</b>
              </v-chip>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  categorias: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
