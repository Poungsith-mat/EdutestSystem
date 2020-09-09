<template>
  <div id="tablestd2">
    <h5>เพิ่มรายชื่ออาจารย์</h5>
          <hr color="grey" />
          <v-row>
            <v-col>
              <v-text-field v-model="model" label="ชื่อ"></v-text-field>
              <v-text-field v-model="model" label="รหัสประจำตัว"></v-text-field>
              <v-select
                v-model="select"
                :items="items"
                label="คณะ"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field v-model="model" label="นามสกุล"></v-text-field>
              <v-text-field v-model="model" label="E-mail"></v-text-field>
              <v-select
                v-model="select"
                :items="items"
                label="ภาควิชา"
                required
              ></v-select>
            </v-col>
          </v-row>
          <center><v-btn class="mr-4" @click="submit">submit</v-btn></center>
          <br />
  </div>
</template>

<script>
export default {
  name: "tablestd2",
};
</script>

<style></style>
