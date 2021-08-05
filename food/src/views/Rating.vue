<template>
<main class="main-body">
  <div class="center-div">
            <p>Cadastre uma avaliação</p>
            <br/>
            <form action="" name="rating_form" @submit="goToDashboard">
                <div class="form-div">
                    <label for="evaluation_type">Tipo de avaliação:</label>
                    <select name="evaluation_type" id="evaluation_type" required>
                        <option value="praise">ELOGIO</option>
                        <option value="complaint">RECLAMAÇÂO</option>
                    </select>

                    <label for="evaluation_grade">Nota da avaliação:</label>
                    <select name="evaluation_grade" id="evaluation_grade" required>
                        <option value="excellent">OTIMO</option>
                        <option value="good">BOM</option>
                        <option value="reasonable">RAZOÁVEL</option>
                    </select>
                
                    <label for="menu_itens">Item do cardápio:</label>
                    <select name="menu_items" id="menu_items" required>
                        <option value="arroz">ARROZ</option>
                        <option value="salada">SALADA</option>
                        <option value="feijoada">FEIJOADA</option>
                        <option value="carne">CARNE VERMELHA</option>
                    </select>

                    <label for="commentary">Comentário:</label>
                    <select name="commentary" id="commentary" required>
                        <option value="bom_tempero">BOM TEMPERO</option>
                        <option value="muito_sal">MUITO SAL</option>
                        <option value="sem_sal">SEM SAL</option>
                    </select>

                    <label for="valuation date">Data da avaliação:</label>
                    <input type="date" name="valuation date" id="valuation date" required>
                </div>
                <div class="button-div">
                    <!-- <button type="submit" class="rating-btn" onclick="">Finalizar cadastro de avaliação</button> -->
                    <PrimaryButton placeholder="Avaliar" type="submit" />
                </div>
            </form>
        </div>
</main>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton.vue';

export default {
  name: 'Rating',
  components:{
      PrimaryButton
  },
  methods: {
      goToDashboard(){
          this.$router.push('/dashboard')
      }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main-body{
     background-color: #0da3e93b;
    height: 100vh;
    padding-top: 10%;
}

.main-body .center-div{
    background-color: #F7F7F7;
    border: 1px solid #c7c7c7;
    width: 75%;
    height: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin:  auto auto auto;
    text-align: center;
}

.main-body .center-div p{
    font-size: 20px;
    font-weight: 600;
    color: #323751;
}

.main-body .center-div span{
    font-size: 17px;
    font-weight: 500;
    margin-top: 2%;
    margin-bottom: 2%;
}

.main-body .center-div .form-div{
    display: flex;
    flex-direction: column;
}

 select{
    width: 52%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
    border-radius: 10px;
    border: 1px solid #c7c7c7;
    padding-left: 1%;
}

select, input:focus{
    outline: none;
}

input{
    width: 52%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
    border-radius: 10px;
    border: 1px solid #c7c7c7;
    padding-left:1% ;
}

.main-body .center-div .form-div label{
    font-weight: 500;
    color: #323751;
}

.main-body .center-div .button-div button{
    margin-bottom: 2%;
    background-color: #05be59;
    color: #fff;
    border: none;
    transition: background-color 0.2s;
}

.main-body .center-div .button-div button:hover{
    background-color: #049c48;
    color: #fff;
    cursor: pointer;
}
</style>