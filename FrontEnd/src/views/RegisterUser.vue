<template>
    <div class="wrapper">
        <form class="login-box" @submit.prevent="register" >
            <input  class="inputs" v-model="name" type="text" name="name" placeholder="Name" >
            <input  class="inputs" v-model="lastName" type="text" name="lastName" placeholder="Last Name" >
            <input class="inputs" v-model="password" name="password" type="text" onfocus="this.value=''; this.type='password'" placeholder="Password" >
            <input class="inputs"  v-model="email" type="email" name="email" placeholder="Email address" >
            <button class="login" type="submit" name="button" >Register</button>

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
                name: '',
                lastName:'',
                email: '',
                password: '',
                errors: null,
                enc: new TextEncoder()
            }
        },
        methods: {
            async register () {
                this.password = await crypto.subtle.digest('SHA-256', this.enc.encode(this.password));
                this.password = await Array.from(new Uint8Array(this.password)).map(b => b.toString(16).padStart(2, '0')).join('');
                this.$store
                    .dispatch('register', {
                        name: this.name,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password
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
    .inputs, .login{
        height: 45px;
        width: 70%;
        border: 1px solid #dedcdc;
        border-radius: 2px;
        margin: 10px auto;
        padding: 0 16px;
        font-size: 12px;
        font-weight: 600;
        background-color: white;
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
