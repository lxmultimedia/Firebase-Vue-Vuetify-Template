<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>LX ToDo</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main><to-do-list></to-do-list> </v-main>
  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
export default {
  components: { ToDoList },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
