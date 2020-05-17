<template>
  <div id="nav">
    <router-link to="/" class="logo">
    </router-link>
    <router-link v-if="loggedIn" to="/player">
      Player
    </router-link>
    <router-link v-if="!loggedIn" to="/login" class="blogin">
      LOG IN
    </router-link>
    <router-link v-if="!loggedIn" to="/register" class="bcreate">
      REGISTER
    </router-link>
    <button v-else type="button" class="logoutButton" @click="logout">
      LOGOUT
    </button>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
    export default {
        computed: {
            ...authComputed
        }
}
</script>

<style scoped>
#nav {
    display: flex;
    min-height: 80px;
    padding: 0.2em 1em;
    background: linear-gradient(to right, #364A5F, #21456B);
    align-content:center;
}
.logo {
    background-image: url("../views/images/Home.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
    min-width:10%;
}
a {
    font-weight: bold;
    text-decoration: none;
    font-size:x-small;
}
.bcreate:hover, .blogin:hover {opacity: .8}

.bcreate, .blogin {
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 8px;
    padding: 0px 2% 0px 2%;
    width:auto;
    color: white;
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

</style>
