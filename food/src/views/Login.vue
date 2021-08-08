<template>
<main class="main-body">
  <div class="center-div">
            <p>Bem vindo (a) ao UFC Food</p>
            <form action="" name="login_form" @submit="validateLogin">
                <div class="form-div">
                    <div class="opt-div">
                        <div class="options">
                            <input type="radio" name="type" id="nutri" value="Nutricionista" v-model="TypeUser">
                            <input type="radio" name="type" id="nutri" value="Aluno" v-model="TypeUser">
                        </div>
                        <div class="labels">
                            <label for="type">Nutricionista</label>
                            <label for="type">Aluno</label>
                        </div>
                    </div>
                    <div v-if="TypeUser === 'Nutricionista'" class="identification">
                        <label for="username" >CRO:</label>
                        <input type="text" name="username" id="username" v-model="cro" required >

                    </div>
                    <div v-if="TypeUser === 'Aluno'" class="identification">
                        <label for="username" >Matrícula:</label>
                        <input type="text" name="username" id="username" v-model="registration" required >

                    </div>

                    <label for="password">Senha:</label>
                    <input type="password" name="password" id="password" v-model="password" required>
                </div>
                <div class="button-div">
                    <!-- <button type="submit" class="login-btn" @click="validateLogin">Entrar</button> -->
                    <!-- <button class="register-btn" @click="goToRegister ">Cadastrar</button> -->
                    <PrimaryButton placeholder="Entrar" type="button" />

                    <SecundaryButton placeholder="Cadastrar" @action="goToRegister" />
                </div>
            </form>
        </div>
     </main>
</template>

<script >
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecundaryButton from '@/components/SecundaryButton.vue';
import api from '@/services/api.js'


export default {
  name: 'Login',
  data(){
      return{
          registration: "",
          cro: "",
          password: "",
          TypeUser: null
      }
  },
  components: {
      PrimaryButton,
      SecundaryButton,
      
  },
  methods: {
    goToRegister(){
      this.$router.push('/register')
    },
    validateLogin(e){
        e.preventDefault();
        this.login();
    //   
    console.log(`Matrícula: ${this.registration} || CRO: ${this.cro} || Senha: ${this.password}`)
    },
    async login(){
        const data = {
            registration: this.registration,
            password: this.password,
            cro: this.cro
        }
        try{
            const res = await api.post('/login',data);
            console.log(res.data);
            this.$router.push('/dashboard');
        }catch(err){
            alert(err.response.data.message)
        }
        // if(res.data.user ){
        // }else{
        //     console.log(res.data.message)
        // }

        
        // if(res.status === 200){
        // }
    }
  }
}
</script>
<style scoped>

p, label{
    font-family: Roboto;
}


.main-body{
    background-color: #0da3e93b;
    height: 100vh;
    padding-top: 10%;
    
}
.center-div{
    background-color: #F7F7F7;
    border: 1px solid #c7c7c7; 
    border-radius: 10px;
    width: 70%;
    height: 50vh;
    margin-top: 1%;
    margin-right: auto;
    margin-left: auto;
    padding: 2%;
    color: #333;
}
.identification{
    display: flex;
    flex-direction: column;
}

.opt-div{
    width:60%;
    height: 10vh;
    margin: auto;
}

.opt-div .options{
    display: flex;
}

.opt-div .labels{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.center-div p{
    text-align: center;
    font-weight: 600;
    font-size: 27px;
}

.center-div .form-div{
    display: flex;
    flex-direction: column;
    padding: 1%;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.center-div .form-div input{
    width: 90%;
    height: 20px;
    border-radius: 8px;
    border: 1px solid #c7c7c7;
    padding-left: 1%;
}


input:focus{
    outline: none;
}

.center-div .form-div input, label{
    margin-left: 3% ;
}

.center-div .button-div{
    /* border: 1px solid #000; */
    margin-top: 1%;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.button-div .login-btn {
    background-color: #04D361;
    color: #fff;
    font-weight: 700;
    border: none;
    transition: background-color 0.2s;
}

.button-div .login-btn:hover{
    background-color: #04BF58;
    cursor: pointer;
}

.button-div .register-btn{
    background-color: #d1e751;
    color: #fff;
    font-weight: 700;
    border: none;
    transition: background-color 0.2s;
}

.button-div .register-btn:hover{
    background-color: #a6b64e;
    color: #f7f7f7;
    cursor: pointer;
}
</style>