<template>
<div>
  <button type="{{ btnType }}" @click="$emit('action')" >{{ placeholder }}</button>
</div>
</template>

<script>
export default {
  name: 'SecundaryButton',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      required: true
    }
  },
  emits: ['action']
}
</script>

<style scoped>
  button{
    border: none;
    background-color: #d4e916;
    color: #000;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    font-weight: 600;
    font-family: Roboto;
    transition: background-color 0.2s;
  }

  button:hover{
    cursor: pointer;
    background-color: #a2b30b;
    color: #fff;
  }
</style>