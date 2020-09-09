<template>
  <div id="tablestd3">
    <v-card>
      <v-card-title>
        ลบรายชื่อ
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table :headers="headers" :items="desserts"></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "tablestd3",
};
</script>

<style></style>
