<template>
  <div class="">
    <h1 class="page-title">Popup demo</h1>

    <!-- <router-view/> -->
    <div class="users">
      <h4>Users</h4>
      <ul>
        <li v-for="(user, index) in users" class="users" v-bind:key="user.index" v-on:click="popupToggle(index)">{{ user.Firstname }}</li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="newUser.Firstname">
      <button @click="addUser">Add</button>
    </div>

    <retailer-list class="retailer-list"></retailer-list>

    <div class="user-popup" v-bind:class="{ isActive: popupIsActive }">
      <h2 class="user-popup_title">User Info</h2>
      <div v-for="(value, key, index) in currentUser" v-bind:key="index">
        <div class="avatar-container" v-if=" key === 'avatarId' ">
          <img class="avatar-img" alt="" v-bind:src="'./static/' + value + '.png'">
        </div>
        <div v-else>
          <span>{{ key }}: </span>
          <span>{{ value }}</span>
        </div>
      </div>
    </div>

    <div class="user-popup-bg" v-bind:class="{ isActive: popupIsActive }" v-on:click="popupToggle()"></div>
  </div>
</template>

<script>
import RetailerList from "./RetailerList.vue";

export default {
  name: "Popup",
  methods: {
    popupToggle: function(index) {
      this.popupIsActive = !this.popupIsActive;
      this.currentUser = this.users[index];
    },
    addUser() {
      this.users.push(this.newUser);
    }
  },
  data() {
    return {
      users: [
        {
          avatarId: 0,
          Firstname: "Jinn",
          Lastname: "Wang",
          ID: 0
        },
        {
          avatarId: 1,
          Firstname: "Mich",
          Lastname: "Gonzalez",
          ID: 1
        },
        {
          avatarId: 2,
          Firstname: "Declan",
          Lastname: "Sharkey",
          ID: 2
        },
        {
          avatarId: 3,
          Firstname: "Kevin",
          Lastname: "Leung",
          ID: 3
        },
        {
          avatarId: 4,
          Firstname: "Carlos",
          Lastname: "Lavara",
          ID: 4
        }
      ],
      currentUser: {},
      popupIsActive: false,
      newUser: {
        Firstname: ""
      }
    };
  },
  components: {
    "retailer-list": RetailerList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.users {
  padding: 10px 0;
}

.user-popup {
  display: none;
  padding: 10px 20px;

  &.isActive {
    display: block;
    position: fixed;
    top: 200px;
    left: calc(50% - 800px / 2);
    opacity: 1;
    width: 800px;
    height: 500px;
    background-color: #fff;
    z-index: 2;
  }
}

.user-popup-bg {
  &.isActive {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    background-color: #eee;
    opacity: 0.8;
  }
}

.user-popup_title {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.avatar-img {
  min-width: 96px;
  max-width: 96px;
}
</style>
