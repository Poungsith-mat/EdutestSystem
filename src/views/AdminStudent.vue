<template>
  <div id="adminstu">
    <v-container>
      <div class="float-inline">
        <h1>บัญชีนักศึกษา</h1>
        <v-spacer></v-spacer>
      </div>
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
          <v-card>
            <v-card-title>
              รายชื่อนักศึกษา
              <v-spacer></v-spacer>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts"></v-data-table>
          </v-card>
        </v-col>
        <v-col cols="4" >
          <h5>เพิ่มรายชื่อนักศึกษา</h5>
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
              <v-select
                v-model="select"
                :items="items"
                label="กลุ่มเรียน"
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
              <center><v-btn block height="50px" class="mr-4" @click="submit">submit</v-btn></center>
            </v-col>
          </v-row>
          <br />
          <v-row>
            <v-card>
              <v-card-title>
                ลบรายชื่อ
                <v-spacer></v-spacer>
              </v-card-title>
              <v-data-table :headers="headers" :items="desserts"></v-data-table>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "adminstu",
};
</script>

<style></style>
