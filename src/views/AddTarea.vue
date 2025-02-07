<script setup>
import { ref } from 'vue';
import { useTaskState } from '../store/TaskState';
const  taskState = useTaskState();

let titulo=ref('')
let completado=ref('')
function mostrar(){

    console.log(titulo.value)
    console.log(completado.value)
}
</script>
<template>

    <h1>Agrega tarea nueva</h1> 
<form>
    <label for="titulo">Titulo de la tarea</label>
    <input type="text" name="titulo" id="titulo" v-model="titulo">
    <label for="completado">Estado de la tarea</label>
    <select name="completado" id="completado" v-model="completado">
        <option value="">--Elegir Estado--</option>
        <option value="true">Completada</option>
        <option value="false">No completada</option>
    </select>
    <input type="button" value="Añadir tarea" @click="mostrar">
</form>
</template>
<style scoped>

form{
display: flex;
flex-direction: column;
border:2px solid blue;
width: 250px;
padding: 5px;
place-self: center;
}
form input{
    padding: 5px;
    margin-bottom: 5px;
}

</style>