<template>
    <div class="wrapper">
        <form class="login-box" @submit.prevent="newEmail">
            <input class="input-name" v-model="email" type="email" name="email" placeholder="Email">
            <button class="login" type="submit" name="button">Send Email</button>
            <span v-if="emailSent" class="psw">All information was sent to your email. Verify in the span folder</span>
            <router-link v-if="emailSent" to="/" class="">Go to home</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                emailSent: false,
                email: '',
                enc: new TextEncoder(),
            }
        },
        methods: {
            async newEmail() {
                if (this.email !== '') {
                    this.emailSent = true;
                    let noword = await crypto.subtle.digest('SHA-256', this.enc.encode('changepass'+this.email.substr(0,2)));
                    noword = await Array.from(new Uint8Array(noword)).map(b => b.toString(16).padStart(2, '0')).join('');
                    this.$store
                        .dispatch('forgot', {
                            email: this.email,
                            noword: noword,
                            nPass: 'changepass' + this.email.substr(0, 2)
                        })
                        .then(() => {
                            this.$router.push({ name: 'home' })
                        })
                        .catch(err => {
                            if (err.response.status === 401) {
                                this.emsg = "User doesn't exist";
                            } else {
                                this.emsg = 'Wrong password';
                            }

                        })
                }
            }

        },
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .login-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10%;
        background-color: white;
        width: 20%;
        height: 400px;
    }

    .input-name {
        margin-top: 10%;
        height: 45px;
        width: 70%;
        border: 1px solid #dedcdc;
        border-radius: 2px;
        padding: 0 16px;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
    }

    .login {
        width: calc(70% + 32px);
        height: 45px;
        background-color: #0097fe;
        color: white;
        margin: 10%;
    }

    .psw {
        text-decoration: none;
        color: darkred;
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