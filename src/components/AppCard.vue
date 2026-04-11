<template>
  <v-card>
    <v-container fluid>
      <v-row density="comfortable">
        <v-col class="d-flex flex-wrap ga-5">
          <v-card
            class="cursor-pointer"
            :class="{ categoria: !props.tipoSimples }"
          >
            <v-img
              :src="categoria.strCategoryThumb"
              class="align-start"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              width="200px"
              cover
              style="border-radius: 0px"
            >
              <v-chip
                class=""
                rounded="0"
                color="corChip"
                variant="flat"
                style="border-radius: 0px 0px 10px 0px"
                v-if="props.tipoSimples"
              >
                <b>{{ categoria.strCategory }}</b>
              </v-chip>
            </v-img>

            <div v-if="!props.tipoSimples">
              <v-card-title class="flex justify-center mb-1">
                {{ categoria.strCategory }}
              </v-card-title>

              <v-card-text>
                {{ categoria.strCategoryDescription }}
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["categoria", "tipoSimples"]);
</script>

<style scoped>
.categoria {
  padding: 10px;
  max-width: 300px;
  height: 300px;
  border: 2px solid #413113;
}
</style>

<!-- :to="`/categorias/${categoria.strCategory}`" -->
