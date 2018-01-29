<template>
<div>
  <h1 class="page-title">Login</h1>
  <input type="email" name="email" placeholder="email" v-model="email">
  <input type="password" name="password" placeholder="password" v-model="password">
  <button type="submit" @click="login">Login</button>
  <p v-show="isInvalid" class="invalid fail">{{invalidInput}}</p>
  
  <div v-if="isloggedIn" class="signed-in">
    <h4>Hello, {{ user }}</h4>
    <h4>Your number is {{ number }}</h4>
    <button @click="getUpdateNumber">Update</button>
    <!-- <div>
      <label for="">Select a number</label>
      <input type="text" v-model="updateNumber">
      <button type="submit" @click="submitNumber" action="/submitNumber">Submit</button>
    </div> -->
  </div>
  <div v-if="logInFailed" class="fail">
    <p>{{ logInFailed }}</p>
  </div>
</div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Login",
  methods: {
    async login() {
      // If input valid, send post request
      if (this.email && this.password) {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        // Server sent response, user is now logged in
        this.isInvalid = false;

        if (response.data.error) {
          this.logInFailed = response.data.error;
          this.isloggedIn = false;

          return;
        }
        this.user = response.data.user;
        this.number = response.data.number;
        this.isloggedIn = true;
        this.logInFailed = false;
        return;
      }
      //  If input invalid
      this.isInvalid = true;
    },

    async getUpdateNumber() {
      const response = await AuthenticationService.getNumber({
        // number: this.updateNumber,
        email: this.email
      });
      // debugger;
      // console.log(this.user);
      // Send back the number stored in the server
      this.number = response.data.number;
    }

    // async submitNumber() {
    //   const response = await AuthenticationService.submitNumber({
    //     number: this.updateNumber
    //   });
    // }
  },
  data() {
    return {
      email: "",
      password: "",
      isInvalid: false,
      invalidInput: "Please enter your email and password",
      isloggedIn: false,
      user: "",
      number: "",
      updateNumber: "",
      logInFailed: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.invalid,
.fail {
  color: red;
}
</style>
