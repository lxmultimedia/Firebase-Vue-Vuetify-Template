<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>{{ appName }}</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main><to-do-list></to-do-list> </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth";
import ToDoList from "./components/ToDoList.vue";
export default {
  components: { ToDoList },
  name: "App",
  data: () => ({
    username: process.env.VUE_APP_FIREBASE_USER,
    password: process.env.VUE_APP_FIREBASE_PW,
    appName: process.env.VUE_APP_NAME,
  }),
  created() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.username, this.password)
      .then(() => {
        console.log("login ok");
      })
      .catch(err => {
        console.log(err.message);
      });    
  }
};
</script>
