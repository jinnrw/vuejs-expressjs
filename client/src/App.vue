<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/form">Form</router-link>
      <router-link to="/popup">Popup</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  width: 1080px;
  margin: 0 auto;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}

a:hover, a:focus {
  text-decoration: underline;
}

.navigation {
  text-align: center;
}

.navigation > * {
  padding: 0 5px;
}

.page-title {
  margin: 50px 0;
}
</style>
