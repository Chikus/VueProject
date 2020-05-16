<template>
    <div class="wrapper">
        <form class="login-box" @submit.prevent="login">
            <input class="input-name" v-model="email" type="email" name="email" placeholder="Email address">
            <input class="input-password" v-model="password" name="password" type="text" onfocus="this.value=''; this.type='password'" placeholder="Password" value>
            <button class="login" type="submit" name="button">Login</button>
            <div class="psw"><a href="#">Forgot password?</a></div>
        </form>
     </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password:null,
                enc: new TextEncoder(),
                error: null,
            }
        },
        methods: {
             async login () {
                 this.password = await crypto.subtle.digest('SHA-256', this.enc.encode(this.password));
                 this.password = await Array.from(new Uint8Array(this.password)).map(b => b.toString(16).padStart(2, '0')).join('');
                 this.$store
                    .dispatch('login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        this.$router.push({ name: 'player' })
                    })
                    .catch(err => {
                        this.error = err.response.data.error
                    })
            }
        }
    }
</script>
<style scoped>

.wrapper {
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.login-box{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:10%;
    background-color: white;
    width: 20%;
    height: 400px;
}

.input-name, .input-password{
height: 45px;
width: 70%;
border: 1px solid #dedcdc;
border-radius: 2px;
margin: 10px auto;
padding: 0 16px;
font-size: 12px;
font-weight: 600;
}

.input-name{
margin-top: 35px;
}


.login{
    width: calc(70% + 32px);
    height: 45px;
    background-color: #0097fe;
    color: white;
    margin-top:45px;
}

    .psw {
        text-decoration: none;
        color: #0097fe;
        font-size: 1.5vh;
        margin: 5%;
    }


@media screen and (max-width: 683px) {
    .login-box {
        width: 80%;
        margin: 1%;
        height: 300px;
    }
}


</style>
