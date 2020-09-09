<template>
  <div id="tabletch3">
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
  name: "tabletch3",
};
</script>

<style></style>
