<template>
  <v-app>
    <v-main>
      <app-toolbar></app-toolbar>

      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import AppToolbar from "./components/AppToolbar.vue";
</script>
