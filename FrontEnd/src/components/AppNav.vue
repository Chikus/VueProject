<template>
  <div id="nav">
    <router-link to="/" class="logo">
    </router-link>
    <router-link v-if="loggedIn" to="/player">
      Player
    </router-link>
    <router-link v-if="!loggedIn" to="/login" class="blogin">
      <p>LOG IN</p>
    </router-link>
    <router-link v-if="!loggedIn" to="/register" class="bcreate">
      <p>SIGN UP</p>
    </router-link>
    <button v-else type="button" class="logoutButton" @click="logout">
      <p>LOGOUT</p>
    </button>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  min-height: 80px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #364A5F, #21456B);
}
.logo {
  background-image: url("../views/images/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 30%;
}
a {
  font-weight: bold;
  text-decoration: none;
}
.bcreate:hover, .blogin:hover {opacity: .8}

.bcreate, .blogin {
  border-radius: 8px;
  color: white;
  width:10%;
&.router-link-active {
   color: #2c3e50;
 }
}
.bcreate{
  margin: 20px 10px 20px 10px;
  background-color: #E0A905;
}

.blogin{
  margin: 20px 10px 20px auto;
  background-color: #31ABED;
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}

footer {
  display:flex;
  justify-content: center;
  width: 100%;
}
</style>
