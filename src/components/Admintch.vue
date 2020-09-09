<template>
  <div id="admintch">
    <v-container>
        <h1>บัญชีอาจารย์</h1>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="model" label="คณะ"></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="model" label="ภาควิชา"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <tabletch1></tabletch1>
        </v-col>
        <v-col cols="">
          <tabletch2></tabletch2>
          <v-row>
            <tabletch3></tabletch3>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/*import tabletch1 from "@\components\Tabletch1.vue";
import tabletch2 from "@\components\Tabletch2.vue";
import tabletch3 from "@\components\Tabletch3.vue";*/
export default {
  name: "admintch",
  components: {
    /* tabletch1,
    tabletch2,
    tabletch3,*/
  },
};
</script>
<style></style>
