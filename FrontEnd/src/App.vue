<template>
  <div id="app">
    <app-nav v-if="['login', 'register', 'home'].includes($route.name)"/>
    <sys-nav v-else/>
    <router-view class="page" />
  </div>
</template>

<script>
import AppNav from './components/AppNav'
import SysNav from './components/SysNav'

export default {
  components: {
    AppNav,
    SysNav
  }
}
document.getElementsByTagName("body")[0].style.margin= 0;

</script>

<style scoped>
#app {
  display: flex;
  align-content: flex-start;
  flex-flow:column;
  font-family: Museo-sans, Helvetica, Arial, sans-serif;
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(rgba(55, 63, 70, 0.8), rgba(55, 63, 70, 0), rgba(55, 63, 70, 0)), url(views/images/s2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  //height:100vh;
}
</style>
