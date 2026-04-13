<template>
  <v-app>
    <v-main>
      <app-toolbar></app-toolbar>

      <router-view />

      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script setup>
import AppToolbar from "./components/AppToolbar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
