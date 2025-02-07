<script setup></script>
<template>

<h2>Pagina de inicio</h2>
    <form>
        <label for="nombre">Nombre de usuario:</label>
        <input type="text" name="nombre" id="nombre">
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password">
       <router-link to="/tareas">Iniciar sesion</router-link>

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