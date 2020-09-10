<template>
  <div id="login">
    <v-row no-gutters>
      <v-col cols="">
        <img alt="Vue logo" src="../assets/logo.png" />
      </v-col>
      <v-col cols="">
        <form>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            label="Password"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Remember me"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>
          <v-btn color="success" class="mr-4" @click="submit">Login</v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style>
body {
  text-align: center;
  justify-self: center;
}

</style>
