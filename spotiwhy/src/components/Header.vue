<template>
  <v-app-bar
    app
    color="#6161c1"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="HeadFWD Logo"
        class="shrink mr-2"
        contain
        src="../assets/1563450760280.jpeg"
        transition="scale-transition"
        width="40"
      />

    </div>

    <v-toolbar-title>Spotiwhy</v-toolbar-title>
  </v-app-bar>
</template>

<script>

export default {
  name: 'header',

  data: () => ({
    drawer: false,
    group: null,
  }),

}
</script>
