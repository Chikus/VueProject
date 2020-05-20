<template>
    <div class="wrapper">
        <form class="login-box" @submit.prevent="register">
            <input class="inputs" v-model="user" type="text" name="user" placeholder="User name">
            <input class="inputs" v-model="name" type="text" name="name" placeholder="Full Name">
            <input class="inputs" v-model="noword" name="noword" type="text" onfocus="this.value=''; this.type='password'" placeholder="Password" value>
            <input class="inputs" v-model="email" type="email" name="email" placeholder="Email address">
            <button class="login" type="submit" name="button">Register</button>
            <ul>
                <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: '',
                name: '',
                noword: '',
                email: '',
                errors: null,
                enc: new TextEncoder(),
            }
        },
        methods: {
            async register () {
                this.noword = await crypto.subtle.digest('SHA-256', this.enc.encode(this.noword));
                this.noword = await Array.from(new Uint8Array(this.noword)).map(b => b.toString(16).padStart(2, '0')).join('');
                alert('Check your email to active your account');
                this.$store
                    .dispatch('register', {
                        user: this.user,
                        name: this.name,
                        noword: this.noword,
                        email: this.email
                    })
                    .then(() => {
                        this.$router.push({ name: 'home' })
                    })
                    .catch(err => {
                        this.errors = err.response.data.errors
                    })
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .login-box{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        margin:10%;
        width: 20%;
        height: 400px;
        border: 1px solid #dedcdc;
        background-color: whitesmoke;
    }
    .inputs, .login {
        height: 45px;
        width: 70%;
        border: 1px solid #dedcdc;
        border-radius: 2px;
        margin: 10px auto;
        padding: 0 16px;
        font-size: 12px;
        font-weight: 600;
        background-color: white;
        text-align: center;
    }

    .login{
        background-color: #0097fe;
        color: white;
    }
    .login:hover{
        opacity: .8;
    }

    @media screen and (max-width: 683px) {
        .login-box {
            width: 80%;
            height: 400px;
            margin: 10%;
        }
    }
</style>
