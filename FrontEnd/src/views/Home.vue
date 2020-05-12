<template>
  <div class="home">
    <h1>Welcome </h1>
    <div class="video">
      <iframe  width="100%" height="100%" src="https://youtube.com/embed/RJkmd5DbWIA" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>

      </iframe>
    </div>
    <footer>
      <p class="copyright">All rights reserved. Copyright by Pixela Labs LLC. </p>
    </footer>
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
  .home{
    display: flex;
    flex-direction: column;
    align-items:center;
    color:beige;
  }
  .video{
    width: calc(65% - 20px);
    height: 80vh;
    margin:5%;
  }
  footer {
    width: 100%;
    background-color: #262b30;
    opacity:.6;
  }
  p.copyright {
    color: darkgrey;
    text-align: center;
  }
</style>
