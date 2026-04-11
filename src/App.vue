<template>
  <v-app>
    <v-main>
      <side-bar></side-bar>

      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from "@/components/side-bar/SideBar.vue";
</script>
