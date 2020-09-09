<template>
  <div id="adminstd">
    <h1>บัญชีนักศึกษา</h1>
    <v-row>
      <v-col cols="12" md="2">
        <v-text-field v-model="model" label="คณะ"></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field v-model="model" label="ภาควิชา"></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field v-model="model" label="กลุ่มเรียน"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <div>
          <tablestd1></tablestd1>
        </div>
      </v-col>
      <v-col cols="">
        <div>
          <tablestd2></tablestd2>
        </div>
        <v-row>
          <div>
            <tablestd3></tablestd3>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
/*import tablestd1 from "@\components\Tablestd1.vue";
import tablestd2 from "@\components\Tablestd2.vue";
import tablestd3 from "@\components\Tablestd3.vue";*/
export default {
  name: "adminstd",
  components: {
    /* tablestd1,
    tablestd2,
    tablestd3,*/
  },
};
</script>

<style></style>
