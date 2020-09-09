<template>
  <div id="admin">
    <v-row>
      <v-col cols="2" style="background-color:grey">
        <img alt="Vue logo" src="../assets/logo.png" />
        <v-btn block no-gutters style="margin-top:30px" to="/admin/teacher"
          >บัญชีอาจารย์</v-btn
        >
        <v-btn block no-gutters to="/admin/student">บัญชีนักศึกษา</v-btn>

        <div style="margin-top:200px"></div>

        <v-btn block no-gutters>Setting</v-btn>
        <v-btn block no-gutters>Log out</v-btn>
      </v-col>

      <adminstd></adminstd>
    </v-row>
  </div>
</template>

<script>
import adminstd from "@/components/Adminstd.vue";
export default {
  name: "admin",
  components: {
    adminstd,
  },
};
</script>

<style></style>
