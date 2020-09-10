<template>
  <div id="adminbar">
      <img alt="Vue logo" src="../assets/logo.png" />
      <v-btn block no-gutters style="margin-top:17%" to="/admin/teacher"
        >บัญชีอาจารย์
      </v-btn>
      <v-btn block no-gutters to="/admin/student">บัญชีนักศึกษา</v-btn>

      <div style="margin-top:120%"></div>

      <v-btn block no-gutters>Setting</v-btn>
      <v-btn block no-gutters>Log out</v-btn>
  </div>
</template>

<script>
export default {
  name: "adminbar",
};
</script>

<style></style>
