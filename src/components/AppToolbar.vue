<template>
  <v-toolbar height="70" elevation="2">
    <v-container
      class="d-flex justify-space-evenly align-center pa-0"
      height="100%"
    >
      <v-btn height="100%" :to="'/'" :active="false">
        <v-img src="@/assets/receitaLogo.webp" width="170px"> </v-img>
      </v-btn>

      <div class="d-flex justify-center align-center pa-0" color="primary">
        <v-hover v-for="item in itensMenu">
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              style="font-size: 11pt"
              v-bind="props"
              :variant="isHovering ? 'flat' : 'text'"
              color="primary"
              :to="item.url"
              rounded=""
            >
              {{ item.nome }}
            </v-btn>
          </template>
        </v-hover>
      </div>

      <v-text-field
        placeholder="procurar receita"
        rounded=""
        variant="solo"
        hide-details=""
        density="compact"
        max-width="250"
        class="meu-input"
        v-model="search"
        @keyup.enter="buscar"
      >
        <template v-slot:append-inner>
          <v-btn variant="flat" color="primary" icon size="35" @click="buscar">
            <v-icon class=""> mdi-magnify </v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-container>
  </v-toolbar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const itensMenu = [
  { nome: "frango", url: "/categorias/chicken" },
  { nome: "carnes", url: "/categorias/beef" },
  { nome: "massas", url: "/categorias/pasta" },
  { nome: "sobremesas", url: "/categorias/dessert" },
  { nome: "vegano", url: "/categorias/vegan" },
  { nome: "peixes", url: "/categorias/seafood" },
];

const search = ref("");
const router = useRouter();

async function buscar() {
  if (!search.value) return;
  console.log(router);

  router.push(`/receitas/${search.value}`);
}
</script>

<style>
.v-field--appended {
  /* Ma pratica */
  padding-inline-end: 2px;
  /* Ma pratica */
}
</style>
