<template>
    <div class="sysnav" >
        <router-link v-if="loggedIn" to="/player">
            <p>PLAYER </p>
        </router-link>
        <router-link v-if="loggedIn" to="/mycv" class="blogin">
            <p>CURRICULUM</p>
        </router-link>
        <router-link v-if="loggedIn" to="/upload" class="bcreate">
            <p>UPLOAD</p>
        </router-link>
        <router-link  v-if="loggedIn" to="/stat" class="bcreate">
            <p>STATISTICS</p>
        </router-link>
        <router-link v-if="loggedIn" to="/shared" class="bcreate">
            <p>SHARED</p>
        </router-link>
        <button v-if="loggedIn" type="button" class="logoutButton" @click="logout">
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
        logout() {
            this.$store.dispatch('logout')
            //this.$router.push({ name: 'home' })
            this.$router.push('/')
        }
    },
    beforeMount() {
        document.getElementById("app").style.flexFlow = "row";
    }
}

</script>

<style scoped>
    .sysnav {
        display: flex;
        flex-flow: column;
        background-color: black;
        opacity: .8;
    }
    .logoutButton {
        background-color:wheat;
        cursor: pointer;
        margin-top:auto;
    }
    a.active {
        background-color: #4CAF50;
        color: white;
    }
</style>