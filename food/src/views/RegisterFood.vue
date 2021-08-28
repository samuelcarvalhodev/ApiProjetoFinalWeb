<template>
     <main class="main-body">
        <div class="center-div">
                  <p>Vamos cadastrar o cardápio ? </p>
                  <form action="" name="cardapio_form" @submit="finish" >
                      <div class="form-div">
                          <label for="tipOpcao">Informe o tipo de opção:</label>
                          <select name="" id="" v-model="type_option">
                            <option value="PROTEINA VEGETARIANA">PROTEINA VEGETARIANA</option>
                            <option value="PROTEINA">PROTEINA</option>
                            <option value="FRUTA">FRUTA</option>
                            <option value="CARBOIDRATO">CARBOIDRATO</option>


                          </select>
                          
                        <br>
                          <label for="opcao">Informe a opção:</label>
                          <select name="" id="" v-model="option_name" @click="getOption">
                              <option v-for="opt of options" v-bind:value="opt.option_name" :key="opt.id">{{opt.option_name}}</option>
                          </select>

                          <br>
                          
                          <label for="cardápio">Data do cardápio:</label>
                          <input type="date" v-model="date_menu">
                      </div>
                      <div class="button-div">
                         <PrimaryButton type="submit" placeholder="Cadastrar"/>
                      </div>
                  </form>
              </div>
           </main>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton.vue';
import api from '@/services/api.js';

export default {
    name: 'RegisterFood',
    components:{
        PrimaryButton
    } ,
    data(){
        return{
            type_option: null,
            option_name: null,
            date_menu: null,
            option_id: null,
            image_food: null,
            options: []
        }
    },
    methods: {
        finish(e){
            e.preventDefault();
            this.register()
        },
        getOption(){
            for(let opt of this.options){
                if(opt.option_name === this.option_name){
                    this.image_food = opt.image_food;
                    this.option_id = opt.id;
                    console.log(opt);
                }
            }
            console.log(`${this.image_food} - ${this.option_id}`)
        },

        async getAllOptions(){
            const res = await api.get('/option/');
            console.log(res.data.Option);
            this.options = res.data.Option;
        },
        async register(){
            const data = {
                type_option: this.type_option,
                option_name: this.option_name,
                date_menu: this.date_menu,
                option_id: this.option_id,
                image_food: this.image_food

            }
            const res = await api.post('/menu/', data);
            if(res.data.message === 'Cadastro efetuado com sucesso!'){
                console.log(res.data);
                this.$router.push('/dashboard')
            }
        }

    },
    mounted(){
        this.getAllOptions()
    }
}
</script>

<style>
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
    margin-top: 1%;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.button-div  {
    
    color: #fff;
    font-weight: 700;
    border: none;
    transition: background-color 0.2s;
}

.button-div :hover{
   
    cursor: pointer;
}

</style>