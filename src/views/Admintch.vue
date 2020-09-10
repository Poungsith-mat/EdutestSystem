<template>
  <div id="admintch">
    <v-row>
      <v-col cols="2" style="background-color:grey;height:100%">
        <adminbar></adminbar>
      </v-col>
      <v-col cols="5" style="background-color:red">
        <h1>บัญชีอาจารย์</h1>
        <v-row>
          <v-col>
            <v-text-field v-model="model" label="คณะ"></v-text-field>
          </v-col>

          <v-col>
            <v-text-field v-model="model" label="ภาควิชา"></v-text-field>
          </v-col>
        </v-row>
        <tabletch1></tabletch1>
      </v-col>
      <v-row>
        <v-col cols="5">
          <tabletch2></tabletch2>
          <tabletch3></tabletch3>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import adminbar from "@/components/Adminbar.vue";
/*import tabletch1 from "@\components\Tabletch1.vue";
import tabletch2 from "@\components\Tabletch2.vue";
import tabletch3 from "@\components\Tabletch3.vue";*/
export default {
  name: "admintch",
  components: {
    adminbar,
    /* tabletch1,
    tabletch2,
    tabletch3,*/
  },
};
</script>
<style></style>
