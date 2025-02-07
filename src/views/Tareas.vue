<script setup>
import TaskList from '../components/TaskList.vue';
</script>
<template>

    <h1>Gestor de de tareas</h1>

    <router-link to="/tareas/addTarea">Añadir Tarea nueva</router-link>
     <router-view></router-view>
    <TaskList></TaskList>
   
</template>
<style></style>