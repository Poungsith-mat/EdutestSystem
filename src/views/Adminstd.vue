<template>
  <div id="adminstd">
    <v-row>
      <v-col cols="2" style="background-color:grey;height:100%">
        <adminbar></adminbar>
      </v-col>
      <v-col cols="5" style="background-color:red">
        <h1>บัญชีนักศึกษา</h1>
        <v-row>
          <v-col>
            <v-text-field v-model="model" label="คณะ"></v-text-field>
          </v-col>

          <v-col>
            <v-text-field v-model="model" label="ภาควิชา"></v-text-field>
          </v-col>

          <v-col>
            <v-text-field v-model="model" label="กลุ่มเรียน"></v-text-field>
          </v-col>
        </v-row>
        <tablestd1></tablestd1>
      </v-col>
      <v-col cols="5">
        <tablestd2></tablestd2>
        <tablestd3></tablestd3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import adminbar from "@/components/Adminbar.vue";
/*import tablestd1 from "@\components\Tablestd1.vue";
import tablestd2 from "@\components\Tablestd2.vue";
import tablestd3 from "@\components\Tablestd3.vue";*/
export default {
  name: "adminstd",
  components: {
    adminbar,
    /* tablestd1,
    tablestd2,
    tablestd3,*/
  },
};
</script>

<style></style>
