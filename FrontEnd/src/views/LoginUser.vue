<template>
    <div class="wrapper">
        <form class="login-box" @submit.prevent="login" >
            <input class="input-name"  v-model="email" type="email" name="email" placeholder="Email address" >
            <input class="input-password" v-model="password" name="password" type="text" onfocus="this.value=''; this.type='password'" placeholder="Password" value>
            <div class="stay-in">
                <input type="checkbox" class="larger-box">
                <label>Stay sign in</label><br>
                <span class="psw"><a href="#">Forgot password?</a></span>
            </div>
            <button class="login" type="submit" name="button" >Login</button>
            <div class="social-media">
                <i class="social-roll" id="yo"></i>
                <i class="social-roll" id="fe"></i>
                <i class="social-roll" id="ins"></i>
                <i class="social-roll" id="tw"></i>
                <i class="social-roll" id="in"></i>
            </div>
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
    height: 900px;
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

.stay-in{
display: flex;
justify-content: space-between;
width: 80%;
font-size: 12px;
}
span{
    margin-left: auto;
}
.login{
    width: calc(70% + 32px);
    height: 45px;
    background-color: #0097fe;
    color: white;
    margin-top:45px;
}

.psw a{
text-decoration: none;
color: #0097fe;
}

.social-media{
height: 45px;
width: calc(70% + 32px);
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

#yo{
background-image: url("images/yo.png");
}
#fe{
background-image: url("images/fe.png");
}
#ins{
background-image: url("images/ins.png");
}
#tw{
background-image: url("images/tw.png");
}
#in{
background-image: url("images/in.png");
}
.social-roll{
height: 30px;
width:30px;
transition:all ease 0.3s;
background-size: cover;
background-repeat: no-repeat;
opacity:0.3;
}
.social-roll:hover{
transform:rotate(360);
opacity:1;
}
#yo{
background-image: url("images/yo.png");
}
#fe{
background-image: url("images/fe.png");
}
#oc{
background-image: url("images/oc.png");
}
#ins{
background-image: url("images/ins.png");
}
#st{
background-image: url("images/st.png");
}
#tw{
background-image: url("images/tw.png");
}
#in{
background-image: url("images/in.png");
}
</style>
