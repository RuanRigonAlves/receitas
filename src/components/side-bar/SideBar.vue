<template>
  <v-navigation-drawer permanent width="256">
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" to="/" />
      <v-list-item
        prepend-icon="mdi-format-list-bulleted"
        title="Categorias"
        to="/categorias"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup></script>
