<template>
  <div class="">
    <h1 class="page-title">Form Components</h1>
    
    <div class="form_newletter">
      <label for="newsletter">
          <input v-model="isReceiveNewsletter" type="checkbox" id="newsletter">Receive newsletter
      </label>
        <p>{{ isReceiveNewsletter? 'Yes' : 'No' }}</p>
    </div>

  <div class="form_user-message">
    <textarea name="" id="" cols="30" rows="10" v-model="userMessage" placeholder="add a message here"></textarea>
    <button v-on:click="alert(userMessage)">Send</button>
  </div>

  </div>
</template>

<script>
export default {
  name: "Form",
  methods: {
    alert: function(text) {
      alert(text);
    }
  },
  data() {
    return {
      isReceiveNewsletter: false,
      userMessage: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label,
input {
  cursor: pointer;
}

.form_newletter {
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
}

.form_user-message button {
  display: block;
}
</style>
