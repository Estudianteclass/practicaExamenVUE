<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useTaskState } from '../store/TaskState';
import TaskItem from './TaskItem.vue';
const url = 'https://jsonplaceholder.typicode.com/todos';
const taskState = useTaskState();
const listado = ref([]);
const getDatos = async () => {
    try {
        const respuesta = await axios.get(url);
        taskState.iniciarLista(respuesta.data)
        console.log("estado")
        console.log(taskState.listaActual)
    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    getDatos();
})
listado.value=taskState.listaActual;

</script>
<template>

    <h1>Lista de tareas</h1>
    <div v-for="tarea in taskState.listaActual">

        <TaskItem :titulo="tarea.title" :estado="tarea.completed"></TaskItem>
    </div>
</template>
<style></style>