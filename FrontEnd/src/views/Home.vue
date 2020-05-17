<template>
  <div class="home">
    <h1>Welcome </h1>
    <div class="video">
      <iframe  width="100%" height="100%" src="https://youtube.com/embed/bANjQqUVgvM" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>

      </iframe>
    </div>
    <div class="footer">
        <p class="copyright">All rights reserved. Copyright by Abe Corp. </p>
        <div class="social-media">
            <p class="follow">Following on:</p>
            <i class="social-roll" id="yo"></i>
            <i class="social-roll" id="fe"></i>
            <i class="social-roll" id="ins"></i>
            <i class="social-roll" id="tw"></i>
            <i class="social-roll" id="in"></i>
        </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
export default {
  computed: {
    ...authComputed
  },
    beforeMount() {
        document.getElementById("app").style.flexFlow = "column";
    }
}
</script>
<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: beige;
    }
    .video{
        width: 50%;
        margin:2%;
        height:50vh;
    }
    .footer {
        display: flex;
        font-size: 1.5vh;
        flex-flow: row;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #262b30;
    }

    p.copyright {
        color: darkgrey;
        width:50%;
    }
    .social-media {
        align-items:center;
        width: 50%;
        display: flex;
    }
    .follow {
        margin-left:50%;
    }
    .social-roll {
        margin:0 4px 0 4px;
        height: 20px;
        width: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
    }

    #yo {
        background-image: url("images/yo.png");
    }

    #fe {
        background-image: url("images/fe.png");
    }

    #ins {
        background-image: url("images/ins.png");
    }

    #tw {
        background-image: url("images/tw.png");
    }

    #in {
        background-image: url("images/in.png");
    }
    .social-roll:hover {
        opacity: 1;
    }
    @media screen and (max-width: 960px) {
        .follow {
            margin-left: 10%;
        }
    }
</style>
