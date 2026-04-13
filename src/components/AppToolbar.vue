<template>
  <v-toolbar height="70" elevation="2">
    <v-row>
      <!-- logo -->
      <v-col cols="3">
        <router-link to="/" class="d-flex justify-center">
          <v-img
            src="@/assets/receitaLogo.webp"
            width="100%"
            height="100%"
            max-width="174px"
          >
          </v-img>
        </router-link>
      </v-col>

      <!-- menu -->
      <v-col cols="6">
        <div class="teleport-search-field d-flex justify-center"></div>
        <teleport defer to=".teleport-menus" :disabled="!mobile">
          <div v-if="mobile" class="d-flex justify-center align-center pa-0">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                  <v-icon icon="mdi-menu" size="28"> </v-icon>
                </v-btn>
              </template>

              <v-list class="bg-bgprimary text-ptext">
                <v-list-item
                  v-for="(item, index) in itensMenu"
                  :key="index"
                  style="font-size: 11pt"
                  color="primary"
                  :to="item.url"
                >
                  <v-list-item-title>{{ item.nome }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <div
            v-else
            class="d-flex justify-center align-center pa-0"
            style="height: 100%"
          >
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
        </teleport>
      </v-col>

      <!-- search bar -->
      <v-col cols="3">
        <div class="teleport-menus"></div>

        <teleport defer to=".teleport-search-field" :disabled="!mobile">
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
              <v-btn
                variant="flat"
                color="primary"
                icon
                size="35"
                @click="buscar"
              >
                <v-icon class=""> mdi-magnify </v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </teleport>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const itensMenu = [
  { nome: "frango", url: "/categorias/chicken" },
  { nome: "carnes", url: "/categorias/beef" },
  { nome: "massas", url: "/categorias/pasta" },
  { nome: "sobremesas", url: "/categorias/dessert" },
  { nome: "vegano", url: "/categorias/vegan" },
  { nome: "peixes", url: "/categorias/seafood" },
  { nome: "categorias", url: "/categorias" },
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
