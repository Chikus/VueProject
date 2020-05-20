<template>
    <div class="wrapper">
        <form class="login-box" @submit.prevent="login">
            <input class="input-name" v-model="user" type="text" name="text" placeholder="User name">
            <input class="input-noword" v-model="pass" name="pass" type="text" onfocus="this.value=''; this.type='password'" placeholder="Password" value>
            <span class="eformat">{{emsg}}</span>
            <button class="login" type="submit" name="button">Login</button>
            <router-link to="/forgot" class="psw">Forgot password or user?</router-link>         
        </form>
     </div>
</template>

<script>
    export default {
        data () {
            return {
                pass:'',
                emsg:'',
                user: '',
                noword:null,
                enc: new TextEncoder(),
                error: null,
            }
        },
        methods: {
            async login() {
                this.noword = this.pass;
                this.noword = await crypto.subtle.digest('SHA-256', this.enc.encode(this.noword));
                this.noword = await Array.from(new Uint8Array(this.noword)).map(b => b.toString(16).padStart(2, '0')).join('');
                this.emsg = '';
                this.$store
                    .dispatch('login', {
                        user: this.user,
                        noword: this.noword
                    })
                    .then(() => {
                        this.$router.push({ name: 'player' })
                    })
                    .catch(err => {
                        if (err.response.status === 401) {
                            this.emsg="User doesn't exist";
                        } else {
                            this.emsg = 'Wrong password';
                        }

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
    .eformat {
        font-size: 1.5vh;
        color:red;
        font-weight:bold;
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

.input-name, .input-noword{
height: 45px;
width: 70%;
border: 1px solid #dedcdc;
border-radius: 2px;
margin: 10px auto;
padding: 0 16px;
text-align:center;
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
