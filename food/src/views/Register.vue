<template>
<main class="main-body">
  <div class="center-div">
            <p>Bem vindo (a) ao UFC Food</p>
            <span>Cadastre-se gratuitamente</span>
            <form action="" name="register_form" @submit="watchRegister">
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
                    <select v-model="SexUser">
                        <option disabled value="">Sexo</option>
                        <option >Masculino</option>
                        <option >Feminino</option>
                        <option >Outro</option>
                    </select>

                    <select v-model="CourseUser">
                        <option disabled value="">Curso</option>
                        <option >CC</option>
                        <option >SI</option>
                        <option >Eng.Minas</option>
                        <option >Eng.Civil</option>
                        <option >Eng.Ambiental</option>
                    </select>

                    <label for="">Apelido:</label>
                    <input type="text" name="" id="" v-model="username" required>

                    <label for="password">Senha:</label>
                    <div class="input-div">
                        <input :type="pswd" name="password" id="password" v-model="password" minlength="6" maxlength="12" required> 
                        <button class="show-btn" @click="showPassword" type="button" >Mostrar senha</button>
                    </div>
                    
                    <label for="password">Confirme a senha:</label>
                    <div class="input-div">
                        <input :type="confirmPswd" name="confirm_password" id="confirm_password" minlength="6" maxlength="12" required>
                        <button class="show-btn" @click="showConfirmePassword" type="button" >Mostrar senha</button>
                    </div>

                </div>
                <div class="button-div">
                   <!-- <button type="submit" class="login-btn" @click="watchRegister">Finalizar cadastro</button> -->
                    <SecundaryButton placeholder="Finalizar cadastro" type="submit" />
                </div>
            </form>
    </div>
</main>
</template>

<script>
import SecundaryButton from '@/components/SecundaryButton.vue';

import api from '@/services/api.js';

export default {
  name: 'Register',
  data(){
      return{
        pswd: 'password',
        confirmPswd :'password',
        password: null,
        CourseUser: null,
        SexUser: null,
        TypeUser: null,
        cro: null,
        registration: null,
        username: null
      }
  },
  components:{
      SecundaryButton
  },
  methods: {
    watchRegister(e){
    e.preventDefault();
    this.createUser();
    },
    showPassword(){
        this.pswd == 'password' ? this.pswd = 'text' : this.pswd = 'password'
    },
    showConfirmePassword(){
        this.confirmPswd == 'password' ? this.confirmPswd = 'text' : this.confirmPswd = 'password'
    },

    async createUser(){
        const data = {
            username: this.username,
            password: this.pswd,
            cro: this.cro,
            registration: this.registration,
            sex: this.SexUser,
            course: this.CourseUser,
            typeUser: this.TypeUser
        }
        const res = await api.post('/', data );
        if(res.status === 200){
            console.log(res.data)
            this.$router.push('/');

        }
    }
  }
}
</script>

<style scoped>
p,label, span{
    font-family: Roboto;
}
.main-body{
    background-color: #0da3e93b;
    height: 100vh;
    padding: 10%;
    margin: auto;
}

.center-div{
    border: 1px solid #f7f7f7;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #F7F7F7;
    border-radius: 10px;
    width: 80%;
    height: 70vh;
    margin: auto;
    padding: 2%;
    color: #333;
}

.identification{
    display: flex;
    flex-direction: column;
}

.opt-div{
    width:50%;
    margin: auto;
}

.opt-div .labels{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.center-div p{
    font-size: 20px;
    font-weight: 600;
}

.center-div span{
    font-size: 17px;
    font-weight: 500;
    margin-top: 2%;
    margin-bottom: 2%;
}

.center-div .form-div{
    display: flex;
    flex-direction: column;
}

.center-div .form-div input{
    width: 50%;
    height: 25px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
    border: 1px solid #c7c7c7;
    border-radius: 8px;
}
input:focus{
    outline: none;
}

select{
    width: 50%;
    height: 25px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
    border: 1px solid #c7c7c7;
    border-radius: 8px;
    background-color: #fff;
}

select:focus{
    outline: none;
}

.center-div .form-div label{
    font-weight: 500;
    font-size: 14px;
    color: #32264D;
}

.input-div{
    display: grid;
    grid-template-rows: auto;
}

.form-div .show-btn{
    width: 14%;
    height: 30px;
    font-size: 11px;
    background-color: #10a580;
    font-weight: 500;
    color: #fff;
    border: none;
    margin-right: auto;
    margin-left: 80%;
    margin-top: -6%;
    transition: background-color 0.2s;
}

.form-div .show-btn:hover{
    background-color: #39cca0;
    color: #000;
    cursor: pointer;
}
</style>