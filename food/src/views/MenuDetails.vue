<template>
    <main>
       <div class="container">
        <div class="logo">
                <h1>UFCFood</h1>
            </div>
            <div class="nav-bar">
                <h3>Detalhes do cardápio</h3>
            </div>
                  <div class="card">
                    <img class="ilustrator-food" src="../assets/hamburguer-de-lentilha.jpg" alt="Avatar">
                        <div class="container-card">
                            <h4><b>{{options.type_option}}</b></h4>
                            <p>{{options.option_name}}</p>
                        </div>
                    </div>
                    <div class="text">
                        <div class="container-card">
                            <h4><b>{{options.type_option}}:  {{options.option_name}}</b></h4>
                            <p>{{ options.description }}</p>
                              
                              
                              <h4><p> Tabela nutricional. </p></h4>
                              <p>  QUANTIDADE POR PORÇÃO 120 G	Qtd.	%vd(*) </p>
                              <p>  Valor Energético	{{options.energetic_value}} Kcal</p>
                              <p>   Carboidratos	{{options.carbohydrate}}g </p>
                              <p>  Proteínas	{{options.protein}}g	 </p>
                              <p>   Gorduras Totais	{{options.total_fat}}g</p>
                        </div>
                    </div>
             </div>
    </main>
</template>
<script>
import api from '@/services/api.js';
export default{
    name: 'ShowSelected',
    data(){
        return{
            id: this.$route.params.id,
            options: []
            
        }
    },
    methods: {
        async getOption(){
            const res = await api.get(`/option/${this.id}`);
            console.log(res.data.Option[0].option_name);
            this.options = res.data.Option[0];
        }
    },
    mounted(){
        this.getOption();
    }
}
</script>
<style scoped>
 .logo{
            text-align: center;
        }
        .nav-bar{
           text-align: center;
           background-color: #0da3e93b;
        }
        .card{
            margin-top: 7%;
            margin-left: 10%;
        }
        .text{
            height: 50%;
            width: 50%;
            text-align: center;
            margin-top: -19%;
            margin-left: 25%;
        }
        .ilustrator-food{
            height: 10%;
            width: 10%;
        }
        h3{
            color: black;
        }
</style>
