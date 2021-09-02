<template>
  <header>
      <div class="logo">
        <p>UFCFood</p>
      </div>
      <div class="btn">
          <button @click="goLogin">Sair</button>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        goLogin(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .logo{
        width: 15%;
        display: flex;
        height: 30px;
    }

    .logo p{
        color: #080808;
        font-size: 16px;
        margin: auto;
        font-family: Roboto;
    }
    .btn button{
        margin-top: 5%;
        width: 65px;
        height: 24px;
        background-color: #ffffff;
        color: #000;
        border: none;
        border-radius: 8px;
        transition: background-color 0.2s;
    }
    .btn button:hover{
        cursor: pointer;
        background-color: #f7f7f7;
    }
</style>