<template>
    <div class="sysnav" >
        <router-link  to="/player">
            <p>PLAYER </p>
        </router-link>
        <router-link  to="/mycv" class="blogin">
            <p>CURRICULUM</p>
        </router-link>
        <router-link to="/upload" class="bcreate">
            <p>UPLOAD</p>
        </router-link>
        <router-link  to="/stat" class="bcreate">
            <p>STATISTICS</p>
        </router-link>
        <router-link  to="/shared" class="bcreate">
            <p>SHARED</p>
        </router-link>
        <button type="button" class="logoutButton" @click="logout">
            <p>LOGOUT</p>
        </button>
    </div>

</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout')
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