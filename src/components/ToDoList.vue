<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center mt-4">
      <v-col cols="8" sm="8" md="8" lg="8" class="pl-0">
        <v-text-field
          label="New Todo"
          outlines
          v-model="newItem"
          @keyup.enter="addItem"
        >
        </v-text-field>
      </v-col>
      <v-col cols="2" sm="2" md="2" lg="1" class="pr-0">
        <v-btn block large color="primary" @click="addItem" class="pa-0">Add</v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="10" sm="10" md="10" lg="9" class="pa-0">
        <transition-group name="fade">
          <v-card
            class="mx-auto pa-5 mt-8 text-left"
            v-for="ToDo in ToDos"
            :key="ToDo.id"
          >
            <v-row>
              <v-col cols="10" sm="10" md="11">
                <v-list-item-title class="text-wrap headline">{{
                  ToDo.name
                }}</v-list-item-title>
              </v-col>
              <v-col cols="2" sm="2" md="1" class="text-right"
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
      loggedin: false
    };
  },
  props: {
    status
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
  watch: { 
    status: function(newVal) {
      if(newVal == true) {
        this.$bind("ToDos", db.collection("ToDos"));
      }
    }
  }
}
</script>

<style scoped></style>
