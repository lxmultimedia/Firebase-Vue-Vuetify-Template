<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-text-field
          label="New Todo"
          outlines
          v-model="newItem"
          @keyup.enter="addItem"
        >
        </v-text-field>
      </v-col>
      <v-col cols="1" class="text-right">
        <v-btn block large color="primary" @click="addItem">Add</v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="7">
        <transition-group name="fade">
          <v-card
            class="mx-auto pa-5 ma-4 text-left"
            v-for="ToDo in ToDos"
            :key="ToDo.id"
          >
            <v-row class="">
              <v-col cols="11">
                <v-list-item-title class="text-wrap headline">{{
                  ToDo.name
                }}</v-list-item-title>
              </v-col>
              <v-col cols="1"
                ><v-btn icon color="red" @click="deleteToDo(ToDo.id)"
                  ><v-icon>mdi-delete</v-icon></v-btn
                ></v-col
              >
            </v-row>
          </v-card>
        </transition-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return {
      ToDos: {},
      newItem: "",
    };
  },
  methods: {
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ name: this.newItem });
        this.newItem = "";
      }
    },
    deleteToDo(id) {
      db.collection("ToDos")
        .doc(id)
        .delete();
    },
  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },
};
</script>

<style scoped></style>
