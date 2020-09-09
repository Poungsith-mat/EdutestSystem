<template>
  <div id="tabletch1">
      
    <v-card>
      <v-card-title>
        รายชื่ออาจารย์
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table :headers="headers" :items="desserts"></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "tabletch1",
};
</script>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'NO', value: 'no' },
          { text: 'NAME', value: 'Name' },
          { text: 'STUDENT NAMBER', value: 'stdnum' },
          { text: 'EMAIL', value: 'email' },
          { text: 'Edit', value: '' },
        ],
        desserts: [
          {
            no: '-',
            Name: '-',
            stdnum: '-',
            email: '-',
          },
        ],
      }
    },
  }
</script>