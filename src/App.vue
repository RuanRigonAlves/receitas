<template>
  <v-app>
    <v-main class="bg-bgprimary">
      <app-toolbar class="bg-bgsecondary"></app-toolbar>

      <router-view />
    </v-main>

    <app-footer class="bg-bgsecondary"></app-footer>
  </v-app>
</template>

<script setup>
import AppToolbar from "./components/AppToolbar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
